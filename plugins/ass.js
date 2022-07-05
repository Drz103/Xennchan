let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/ass', {}, 'APIKEY'), 'wangy wangy wangy', wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i
handler.private = true
handler.register = true

handler.limit = true

module.exports = handler

