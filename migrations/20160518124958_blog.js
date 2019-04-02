
exports.up = function(knex, Promise) {
  knex.schema.createTable('users').then((tbl) => {
    tbl.increments('id').primary();
    tbl.string('email');
    tbl.string('username');
    tbl.string('name');
  }).createTable('posts', table => {
    table.increments('id').primary();
    table.string('body');
    table.string('title');
    table.integer('user_id').references('users.id');
  }).createTable('comments', table => {
    table.increments('id').primary();
    table.string('post_id').references('posts.id');
    table.string('user_id').references('users.id');
    table.string('body');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.destroyTable('users').destroyTable('posts').destroyTable('comments')
};
