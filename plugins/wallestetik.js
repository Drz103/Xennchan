let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {    
   conn.sendButtonImg(m.chat, 'https://server-api-rey.herokuapp.com/api/wallpaper/wallhp?apikey=apirey', 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['wallestetik']
handler.tags = ['internet']
handler.command = /^wallestetik$/i
handler.register = true

handler.limit = true

module.exports = handler
