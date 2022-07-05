let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/pussy', {}, 'APIKEY'), 'mpsss ahhh', wm, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = /^(pussy)$/i
handler.private = true
handler.register = true

handler.limit = true

module.exports = handler

