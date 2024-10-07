const emojiMap = {
    ':smile:': '😄',
    ':sad:': '😢',
    ':heart:': '❤️',
    ':thumbsup:': '👍',
    ':laughing:': '😂',
    ':angry:': '😠',
    ':surprised:': '😲',
};

const convertEmojis = (text) => {
    return text.replace(/:\w+:/g, (match) => emojiMap[match] || match);
};


module.exports = {
    convertEmojis,
};

