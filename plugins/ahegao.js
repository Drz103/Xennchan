let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/ahegao', {}, 'APIKEY'), `wangy wangy wangy`, wm, 'NEXT', '.ahegao', m, false)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i
handler.private = true
handler.register = true

handler.limit = true

module.exports = handler

