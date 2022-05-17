'use strict'
const avro = require('avsc');

const producer = avro.Type.forSchema({
  type: 'record',
  fields: [
    {
      name: 'username',
      type: 'string',
    },
    {
      name: 'password',
      type: 'string',
    }
  ]
})

module.exports = {
  producer,
};