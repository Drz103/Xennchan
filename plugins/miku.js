let handler  = async (m, { conn, usedPrefix, command }) => {
 conn.sendButtonImg(m.chat, `https://server-api-rey.herokuapp.com/api/wallpaper/miku?apikey=apirey`, 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['miku']
handler.tags = ['anime']
handler.command = /^miku$/i

handler.limit = true

module.exports = handler
