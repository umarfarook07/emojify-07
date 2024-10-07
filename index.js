const emojiMap = {
    ':smile:': '😄',
    ':sad:': '😢',
    ':heart:': '❤️',
    ':thumbsup:': '👍',
    ':laughing:': '🤣',
    ':angry:': '😡',
    ':surprised:': '😯'
};

const convertEmojis = (text) => {
    return text.replace(/:\w+:/g, (match) => emojiMap[match] || match);
};

const addEmoji = (key, value) => {
    emojiMap[key] = value;
}

module.exports = {
    convertEmojis,
    addEmojis
};

