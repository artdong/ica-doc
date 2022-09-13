#!/usr/bin/env node
'use strict';

const log = require('../lib/log');
const program = require('commander');
const pkg = require('../package.json');
const docx2html = require('../lib/docx2html');

program
    .option('-v, --version', 'output the version');

program
    .usage('<command> [sorceDir] [distDir]')
    .description('doc start [sorceDir] [distDir]: 读取目标文件夹下的doc文件并转换成对应的html')
    .version(pkg.version)
    .parse(process.argv);

program.on('--help', function () {
    help();
});


const commands = program.args;

runCommand(commands, program);

/**
 * 运行命令
 * @param  {String} command 命令脚本
 * @param  {Object} env     运行环境
 */
function runCommand(commands) {
    const firstCommand = commands[0];
    const secondCommand = commands[1];
    const thirdCommand = commands[2];
    
    // 当没有输入指令时,默认输出help信息
    if(!firstCommand) {
        program.help();
    }

    switch(firstCommand) {
    case 'start': {
        const sourcePath = secondCommand;
        const distPath = thirdCommand;
        if(!secondCommand) {
            docx2html.startConvert(null);
            return;
        }
        if(!thirdCommand) {
            docx2html.startConvert(sourcePath);
            return;
        }
        docx2html.startConvert(sourcePath, distPath);
        break;
    }
    default:
        program.help();
    }
}

// 自定义 help
function help() {
    console.log();
    console.log('  Global Commands:');
    console.log();
    log.tip('    doc start：', '自动读取当前文件夹下的doc文件并转换成对应的html');
    log.tip('    doc start [sorceDir] [distDir]: \', \'读取目标文件夹下的doc文件并转换成对应的html');
    return;
}




