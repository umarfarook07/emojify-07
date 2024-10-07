# Emoji Converter

A simple JavaScript package to convert text representations of emojis into actual emoji characters.

## Add Custom Emoji Mappings

You can add your own emoji mappings dynamically:

```javascript
const { convertEmojis, addEmojiMapping } = require('emojify');

// Add a custom mapping
addEmojiMapping(':custom:', '✨');

// Convert text with the custom emoji
const text = "This is a :custom: emoji!";
const convertedText = convertEmojis(text);

console.log(convertedText); // "This is a ✨ emoji!"


## Installation

```bash
npm install emojify-07

