module.exports = function(plugin, change) {
    const newState = plugin.changes.unwrapCodeBlock(change, 'paragraph');

    return newState;
};
