let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/jahy', {}, 'APIKEY'), `wangy wangy wangy`, wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['jahy']
handler.tags = ['image']
handler.command = /^(jahy)$/i
handler.private = true

handler.limit = true

module.exports = handler

