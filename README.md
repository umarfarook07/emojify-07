
# Emoji Converter

  

A simple JavaScript package to convert text representations of emojis into actual emoji characters.

  

## Add Custom Emoji Mappings

  

You can add your own emoji mappings dynamically:

  

```javascript

const { convertEmojis, addEmoji } = require('emojify');

  

addEmoji(':custom:', '✨');

  

const  text = "This is a :custom: emoji!";

const  convertedText = convertEmojis(text);

  

console.log(convertedText); // "This is a ✨ emoji!"
```
  

## Installation

````bash
npm  install  emojify-07