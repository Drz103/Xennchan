let handler = async (m, { conn }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/ero', {}, 'APIKEY'), 'istri gweh', wm, 'NEXT', '.ero', m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i
handler.private = true

handler.limit = true

module.exports = handler
