let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => { 
let res = await (await fetch('https://raw.githubusercontent.com/Alfarqun/database/main/anime/kanna.json'))
 if (!res.ok) throw await eror
 let json = await res.json(); 
 let url = json[Math.floor(Math.random() * json.length)] 
await conn.sendButtonImg(m.chat, url, 'Kawai > _<', wm, 'NEXT', `${usedPrefix + command}`, m)
}

handler.help = ['kanna']
handler.tags = ['internet', 'anime'] 
handler.command = /^(kanna)$/i

handler.limit = true

module.exports = handler
