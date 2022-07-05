let handler = async (m, { conn }) => {
conn.sendButtonImg(m.chat, `https://api.xteam.xyz/randomimage/wpmobile?apikey=cristian9407`, 'Nih kak', wm , 'NEXT', '.wpmobile', m)
}
handler.help = ['wpmobile'].map(v => v + ' ')
handler.tags = ['image']
handler.command = /^(wpmobile)$/i
 
handler.limit = true

module.exports = handler
