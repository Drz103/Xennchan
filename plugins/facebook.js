let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/fbv2', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.result.hd.url  
  await conn.sendButtonVid(m.chat, `${url}`, `Nih Gan\n${args[0]}`, wm, 'Thanks', 'Thanks', m)
}
handler.help = ['fb','fbdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(fb|facebook|fbdl)$/i
handler.limit = true
module.exports = handler
