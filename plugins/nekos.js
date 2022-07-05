let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('http://nekos.life/api/v2/img/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, json.url, 'Nyaa', wm, 'NEXT', '.nekos', m)
}
handler.help = ['nekos']
handler.tags = ['anime']
handler.command = /^nekos$/i

module.exports = handler
//MADE USING 🗿
