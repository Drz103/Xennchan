let handler = async (m, { conn, args }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/wpnsfwmobile', {}, 'APIKEY'), `wangy wangy wangy`, wm, 'NEXT', '.wpnsfmobile', m)
}
handler.help = ['wpnsfwmobile']
handler.tags = ['nsfw']
handler.command = /^(wpnsfwmobile)$/i
handler.private = true

handler.limit = true

module.exports = handler

