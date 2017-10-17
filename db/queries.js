const knex = require('./knex')

module.exports = {
  cars: {
    getAll: function() {
      return knex('car')
    },
    getOne: function(id) {
      return knex('car')
             .where('id', id)
    },
    create: function(car) {
      return knex('car')
             .insert(car)
             .returning('*')
    },
      update: function(id, car) {
        return knex('car')
               .where('id', id)
               .update(car)
               .returning('*')
    },
      delete: function(id) {
        return knex('car')
               .where('id', id)
               .del()
    }
  }
}
