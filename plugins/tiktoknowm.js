const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {
if (!text) throw 'Uhm...url nya mana?'
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.reply(m.chat, wait, m)
conn.sendButtonVid(m.chat, nowm, `Nih gan`, wm, 'Thanks', 'Thanks', ftroli)
}
handler.help = ['tiktok', 'tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokdl|tiktok|tiktoknowm)$/i
module.exports = handler