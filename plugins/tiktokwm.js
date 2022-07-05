const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {
if (!text) throw 'Uhm...url nya mana?'
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.reply(m.chat, wait, m)
conn.sendFile(m.chat, wm, null, 'dengan watermark', m)
}
handler.help = ['tiktokwm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokwm)$/i
handler.limit = true
module.exports = handler
