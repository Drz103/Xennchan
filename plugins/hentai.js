let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/hentai', {}, 'APIKEY'), 'wangy wangy wangy', wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
handler.private = true
handler.register = true

handler.limit = true

module.exports = handler
