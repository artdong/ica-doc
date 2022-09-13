'use strict';
/**
 * convert docx to html
 */
const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const template = require('./template');
const pretty = require('pretty');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora('get docs from remote...');

function transformElement(element) {
    if (element.children) {
        const children = _.map(element.children, transformElement);
        element = Object.assign({}, element, {children: children});
    }
    if (element.type === 'paragraph') {
        element = transformParagraph(element);
    }
    return element;
}

function transformParagraph(element) {
    if (element.alignment === 'center' && !element.styleId) {
        return Object.assign({}, element, {styleName: 'center'}, {className: 'center'});
    } else {
        return element;
    }
}

const options = {
    styleMap: [
        'u => u',
        'b => b',
        'i => i',
        'strike => del',
        'p[style-name=\'center\'] => p.center',
    ],
    transformDocument: transformElement,
};

exports.startConvert = (dirPath, distPath) => {
    let filePaths = [];
    const sourcePath = dirPath || process.cwd();
    if(sourcePath) {
        fs.stat(sourcePath, function(err) {
            if(err) {
                if(err.code === 'ENOENT') {
                    spinner.fail(chalk.red('当前文件夹不存在，请检查'));
                }
                return;
            }
            if(distPath) {
                fs.stat(distPath, function (err, stats) {
                    if (!stats) {
                        fs.mkdir(distPath, {recursive: true}, err => {
                            if (err) throw err;
                        });
                    }
                });
            }
            spinner.start();
            fs.readdir(sourcePath, function(err, files) {
                if(err) {
                    spinner.fail(chalk.gray('读取文件失败'));
                }
                for (let i = 0; i < files.length; i++) {
                    if(files[i].indexOf('.doc') > 0) {
                        filePaths.push(path.join(sourcePath, files[i]));
                    }
                }
                if(!filePaths.length) {
                    spinner.fail(chalk.red('没有获取到doc文件'));
                }
                let promiseList = [];
                filePaths.map(item => {
                    promiseList.push(convertToHtml(item, distPath));
                });
                Promise.all(promiseList).then(() => {
                    spinner.succeed(chalk.green('所有文档转换完成'));
                }).catch((errorMessage) => {
                    spinner.fail(chalk.red(`转换成html异常：${errorMessage}`));
                });
            });
        });
    }
};

function convertToHtml(filePath, distPath) {
    return new Promise((resolve) => {
        mammoth
            .convertToHtml({ path: filePath }, options)
            .then(function(result) {
                const html = result.value; // The generated HTML
                let distFilePath = `${filePath.split('.')[0]}.html`;
                const fileName = path.basename(filePath); // 获取文件名称
                if(distPath) {
                    distFilePath = path.join(distPath, `${fileName.split('.')[0]}.html`);
                }
                spinner.info(chalk.gray(`正在转换${filePath}，请耐心等待....`));
                const title = fileName.split('.')[0];
                fs.writeFile(distFilePath, pretty(template(html, title)), (err) => {
                    if(err) {
                        spinner.fail(chalk.red(`${filePath}转换成html失败： ${err}`));
                        resolve(false);
                    }
                    spinner.succeed(chalk.green(`${filePath}转换成html成功`));
                    resolve(true);
                });
            })
            .catch((msg)=> {
                spinner.fail(chalk.red(`${filePath}转换成html异常：${msg}`));
            });
    });
}