# ica-doc

[![npm version][npm-image]][npm-url] [![mnt-image](https://img.shields.io/maintenance/yes/2023.svg?style=flat-square)](../../commits/master) [![GitHub stars](https://img.shields.io/github/stars/artdong/ica-doc.svg?style=flat-square)](https://github.com/artdong/ica-doc/stargazers) [![GitHub forks](https://img.shields.io/github/forks/artdong/ica-doc.svg?style=flat-square)](https://github.com/artdong/ica-doc/network) [![npm download][download-image]][download-url] [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/artdong/ica-doc/blob/master/LICENSE)
<img src="https://komarev.com/ghpvc/?username=ica-doc&label=Visits" alt="ica-doc" />

[npm-image]: http://img.shields.io/npm/v/ica-doc.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ica-doc
[download-image]: https://img.shields.io/npm/dm/ica-doc.svg?style=flat-square
[download-url]: https://npmjs.org/package/ica-doc
[bundlephobia-url]: https://bundlephobia.com/result?p=ica-doc
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/ica-doc

word文档转换工具（支持docx文件转换成html文件）

> 支持docx格式文件直接转换

> 如果是doc文件，可另存为docx文件再转换

> 如果是pdf文件，可通过[此工具](https://convertio.co/zh/)转换成docx文件，再转换

## 安装

`npm install ica-doc -g`

## 使用

```
doc start -------- 自动读取当前文件夹下的doc文件并转换成对应的html

doc start [sorceDir] [distDir] --------- 读取目标文件夹下的doc文件并转换成对应的html
```
