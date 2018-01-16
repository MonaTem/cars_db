
exports.up = function(knex, Promise) {
  return knex.schema.createTable('formulas', function(table) {
    table.increments('fid').primary()
    table.string('english_name')
    table.string('pinyin_name')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("formulas");
};
