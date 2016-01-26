
'use strict'

const Schema = use('Schema')

class NewSchema extends Schema {

  up () {
    this.create('todos', function (table) {
      table.increments('id')
      table.string('body')
      table.boolean('completed')
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('todos')
  }

}

module.exports = NewSchema
