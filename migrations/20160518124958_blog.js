
exports.up = function(knex, Promise) {
  knex.schema.createTable('users').then((tbl) => {
    tbl.increments('id').primary();
    tbl.string('email');
    tbl.string('username');
    tbl.string('name');
    tbl.timestamps() ;
  })
};

exports.down = function(knex, Promise) {
  knex.schema.destroyTable('users').destroyTable('posts').destroyTable('comments')
};
