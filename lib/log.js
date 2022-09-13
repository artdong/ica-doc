'use strict';
/**
 * 输出控制台日志记录
 */
const chalk = require('chalk');
const logTypeList = [
    {
        'type': 'info',
        'color': 'gray',
        'icon': '>'
    },
    {
        'type': 'error',
        'color': 'red',
        'icon': '×'
    },
    {
        'type': 'success',
        'color': 'green',
        'icon': '√'
    },
    {
        'type': 'trace',
        'color': 'dim',
        'icon': '*'
    },
    {
        'type': 'debug',
        'color': 'bgBlack',
        'icon': '*'
    },
    {
        'type': 'warn',
        'color': 'yellow',
        'icon': '!'
    },
    {
        'type': 'fatal',
        'color': 'bgRed',
        'icon': '×'
    },
    {
        'type': 'tip',
        'color': 'cyan'
    }
];

logTypeList.forEach(function(logType) {
    const { type, icon, color} = logType;
    exports[type] = function() {
        let args = Array.prototype.slice.call(arguments, 0);
        if(icon) args = [icon].concat(args);
        global.console.log(chalk[color].apply(global.console, args));
    };
});