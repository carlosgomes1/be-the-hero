exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments() // incrementa no 'id' do incidents

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable() // vai receber o id da ong de outra tabela

        table.foreign('ong_id').references('id').inTable('ongs') // vai na table ongs, pega o id e coloca nessa table
    }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
