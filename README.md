# logseq-plugin-browser
> A browser plugin for logseq

[![latest release version](https://img.shields.io/github/v/release/haydenull/logseq-plugin-browser)](https://github.com/haydenull/logseq-plugin-browser/releases)
[![License](https://img.shields.io/github/license/haydenull/logseq-plugin-browser?color=blue)](https://github.com/haydenull/logseq-plugin-markdown-table/blob/main/LICENSE)

English | [简体中文](./README-zh_CN.md)

## Demo
![demo](./demo.gif)

## Usage
1. Install plugin
2. Open command palette, input `browser`
3. Select `Modify logseq-plugin-browser config`
3. Fill in configuration information
3. Restart LogSeq makes the configuration take effect

Open command palette shortcut:
- Windows: `Ctrl + Shift + P`
- Mac: `Cmd + Shift + P`

## Plugin Configuration

buttons: toolbar buttons
  - key: unique identifier
  - icon: Button icon
  - url(config file is href): Web page address
  - style: Web page container iframe style object

use [tablericons](https://tablericons.com/) icon library

example: book icon, icon parameter value is `ti-book`

## Configuration Example
```json
{
  "buttons": [
    {
      "key": "dida",
      "icon": "ti-checkbox",
      "href": "https://dida365.com/webapp/#q/all/today"
    },
    {
      "key": "translate",
      "icon": "ti-language",
      "href": "https://translate.google.com",
      "style": {
        "width": "400px",
        "right": "20px",
        "top": "50px",
        "left": "auto",
        "bottom": "auto"
      }
    }
  ]
}
```
