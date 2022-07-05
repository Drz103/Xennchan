let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
   conn.sendButtonImg(m.chat, 'https://server-api-rey.herokuapp.com/api/wallpaper/anime?apikey=apirey', 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['wallhpnime']
handler.tags = ['anime']
handler.command = /^wallhpnime$/i
handler.register = true

handler.limit = true

module.exports = handler
