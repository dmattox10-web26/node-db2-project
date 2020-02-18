
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.string('VIN', 64).notNullable().index()
      tbl.string('make', 64).notNullable()
      tbl.string('model', 64).notNullable()
      tbl.integer('mileage').notNullable()
      tbl.string('transmission', 10)
      tbl.string('title', 16)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
