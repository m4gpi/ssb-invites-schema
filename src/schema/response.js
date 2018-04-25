const definitions = require('../v1/lib/definitions')

module.exports = {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  required: ['version', 'type', 'root', 'branch', 'recps'],
  properties: {
    version: { type: 'string' },
    module: { type: 'string' },
    type: { 
      type: 'string',
      pattern: '^response$'
    },
    root: {
      oneOf: [
        { type: 'null' },
        { $ref: '#/definitions/messageId' },
      ]
    },
    branch: {
      oneOf: [
        { type: 'null' },
        { $ref: '#/definitions/messageId' },
      ]
    },
    body: { type: 'string' },
    mentions: { $ref: '#/definitions/mentions/any' },
    accept: { type: 'boolean' },
    recps: { $ref: '#/definitions/recps' },
  },
  definitions: definitions
}
