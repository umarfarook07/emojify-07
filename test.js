const { convertEmojis, addEmoji } = require('./index');

const testText = 'I am feeling :smile: and :heart: today!';
console.log(convertEmojis(testText));

addEmoji(':salute:', '🫡');

const customEmojiTest = ':salute: to your work man!!';
console.log(convertEmojis(customEmojiTest));
