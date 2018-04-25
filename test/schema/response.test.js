const Test = require('tape')
const Validator = require('is-my-json-valid')

const responseSchema = require('../../src/schema/response')
const validate = Validator(responseSchema)

Test('response is valid', (t) => {
  var response = {
    module: 'secrets',
    version: 'v1',
    type: 'response',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha25',
    accept: true,
    body: '[](@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519) has accepted your invitation',
    mentions: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
    ],
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  t.ok(validate(response))
  t.end()
})

Test('missing root: response is not valid', (t) => {
  var response = {
    type: 'response',
    version: 'v1',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha25',
    accept: false,
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  t.notOk(validate(response))
  t.end()
})

Test('missing branch: response is not valid', (t) => {
  var response = {
    type: 'response',
    version: 'v1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    accept: true,
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  t.notOk(validate(response))
  t.end()
})

Test('missing recps: response is not valid', (t) => {
  var response = {
    type: 'response',
    version: 'v1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
  }

  t.notOk(validate(response))
  t.end()
})

Test('missing accept: response is not valid', (t) => {
  var response = {
    type: 'response',
    version: 'v1',
    root: '%MPB9vxHO0pvi2ve2wh6Do05ZrV7P6ZjUQ+IEYnzLfTs=.sha256',
    branch: '%Lihvp+fMdt5CihjbOY6eZc0qCe0eKsrN2wfgXV2E3PM=.sha25',
    recps: [
      '@EJq0UuR1gFJFs+8STga0AbYdt5IYQ4YsTr0niycscfg=.ed25519',
      '@MFz/AT3ldQoPaRPLjBSXTorLG1TZdyXtApJRmNNMjjg=.ed25519'
    ]
  }

  t.notOk(validate(response))
  t.end()
})
