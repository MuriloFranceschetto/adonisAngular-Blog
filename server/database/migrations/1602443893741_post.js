'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments();
      table.integer('user').notNullable().unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('title').notNullable();
      table.text('content').notNullable();
      table.integer('likes').defaultTo(0);
      table.timestamps();
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
