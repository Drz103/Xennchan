let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'url/link nya mana?'
  let res = await fetch(global.API('xteam', '/shorturl/cuttly', { url: `${text} }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.result.shortLink)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['cuttly'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^cuttly$/i

module.exports = handler
