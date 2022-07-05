let handler = async (m, { conn, args }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/orgy', {}, 'APIKEY'), `wangy wangy wangy`, wm, 'NEXT', '.orgy', m)
}
handler.help = ['orgy']
handler.tags = ['nsfw']

handler.command = /^(orgy)$/i
handler.private = true
handler.register = true

handler.limit = true

module.exports = handler

