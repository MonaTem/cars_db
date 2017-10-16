
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', function(table) {
    table.increments('id').primary()
    table.string('make')
    table.string('model')
    table.integer('year')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("car");
};
