let handler  = async (m, { conn, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, `https://server-api-rey.herokuapp.com/api/random/cosplay?apikey=apirey`, 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^cosplay$/i
handler.register = true

handler.limit = true

module.exports = handler
