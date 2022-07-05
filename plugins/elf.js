let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButtonImg(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=sanzychan01', 'Nih kak', watermark, 'NEXT', `.${command}`, m)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

handler.limit = true

module.exports = handler
