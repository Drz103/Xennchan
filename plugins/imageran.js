let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButtonImg(m.chat, global.API('xteam', `/randomimage/${command}`, {}, 'APIKEY'), 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m)
}

handler.help = ['exo', 'bts', 'cewe', 'cowo', 'blackpink']
handler.tags = ['image']
handler.command = /^(exo|bts|cewe|cowo|blackpink)$/i

handler.limit = true

module.exports = handler
