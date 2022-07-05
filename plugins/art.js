let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButtonImg(m.chat, `https://api.lolhuman.xyz/api/random/art?apikey=sanzychan01`, 'Nih kak', wm, 'NEXT', `.${command}`, m)
}
handler.help = ['art']
handler.tags = ['anime']
handler.command = /^(art)$/i
handler.limit = true

module.exports = handler
