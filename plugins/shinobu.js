let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButtonImg(m.chat, `https://api.lolhuman.xyz/api/random/shinobu?apikey=sanzychan01`, 'Nih kak', wm, 'NEXT', `.${command}`, m)
}

handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i

handler.limit = true

module.exports = handler
