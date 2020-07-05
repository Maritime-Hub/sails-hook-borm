// initializing a Bookshelf hook for sails, to later turn into a separate core hook ...

module.exports = function(sails) {
    const knex = require('knex')(sails.config.database);
    const bookshelf = require('bookshelf')(knex);
    bookshelf.plugin('bookshelf-virtuals-plugin');
    return {
        bookshelf,
    };
}