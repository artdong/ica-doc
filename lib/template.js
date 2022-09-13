'use strict';
/**
 * 包含样式的完整html生成方法
 */
module.exports = function template(str, title) {
    let htmlTemple1 = getHtmlTemple(title);
    return `${htmlTemple1}${str}${htmlTemple2}`;
};
function getHtmlTemple(title) {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"
            />
            <title>${title}</title>
            <meta http-equiv="Cache-Control" content="no-cache" />
            <meta http-equiv="Pragma" content="no-cache" />
            <meta http-equiv="expires" content="0" />
            <meta name="format-detection" content="telephone=no" />
            <style>
                body {
                    font-family: Microsoft YaHei;
                }
                .container {
                    padding: 0 25px;
                }
                .title {
                    width: 100%;
                    text-align: center;
                    font-size: 30px;
                    fon-weight: bold;
                }
                .center{
                    text-align: center;
                }
                p strong {
                    font-size: 14px;
                }
                .divider{
                   width: 100%;
                   height: 15px;
                   border-collapse:collapse;
                   border-top: 1px solid #000;
                }
                table{
                    text-align: center;
                    width: 100%;
                    border-collapse:collapse;
                    border-top: 1px solid #000;
                    border-left: 1px solid #000;
                }
                table td{
                    border-bottom: 1px solid #000;
                    border-right: 1px solid #000;
                    font-size: 16px;
                    min-height: 35px;
                    line-height: 22px;
                    padding: 12px 8px;
                    text-align: left;
                }
                .dashed-table{
                    border-top: 1px dashed #000;
                    border-left: 1px dashed #000;
                }
                .dashed-table td{
                    border-bottom: 1px dashed #000;
                    border-right: 1px dashed #000;
                }
                .no-border-table{
                   border: none;
                }
                .no-border-table td{
                    border: none;
                }
                .left{
                    text-align: left;
                }
                .m-t{
                    margin-top:15px;
                }
                .m-top{
                    margin-top:18px;
                }
            </style>
            </head>
            <body><div class="container">`;
}

const htmlTemple2 = '</div></body></html>';