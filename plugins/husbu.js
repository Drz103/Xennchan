let handler = async (m, { conn, usedPrefix, command }) => {
    conn.sendButtonImg(m.chat, global.API('xteam', '/randomimage/husbu2', {}, 'APIKEY'), 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

handler.limit

module.exports = handler
