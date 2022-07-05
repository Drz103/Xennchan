let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/uniform', {}, 'APIKEY'), `wangy wangy wangy`, wm, 'NEXT',`${usedPrefix + command}`, m, false)
}
handler.help = ['uniform']
handler.tags = ['nsfw']
handler.command = /^(uniform)$/i
handler.private = true

handler.limit = true

module.exports = handler
