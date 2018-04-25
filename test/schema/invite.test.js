const Test = require('tape')
const Validator = require('is-my-json-valid')

const inviteSchema = require('../../src/schema/invite')
const validate = Validator(inviteSchema)

Test('invite is valid', (t) => {
  var invite = {
    module: 'secrets',
    version: 'v1',
    type: 'invite',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    expiresAt: new Date().toISOString(),
    body: '[](@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519) invites you to share a secret',
    mentions: [
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ],
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  t.ok(validate(invite))
  t.end()
})

Test('missing root: invite is not valid', (t) => {
  var invite = {
    type: 'invite',
    version: 'v1',
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  t.notOk(validate(invite))
  t.end()
})

Test('missing recps: invite is not valid', (t) => {
  var invite = {
    type: 'invite',
    version: 'v1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
  }

  t.notOk(validate(invite))
  t.end()
})
