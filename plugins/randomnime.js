let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => { 
let res = await (await fetch('https://raw.githubusercontent.com/Alfarqun/database/main/anime/randomanime.json'))
 if (!res.ok) throw eror
 let json = await res.json(); 
 let url = json[Math.floor(Math.random() * json.length)] 
conn.sendButtonImg(m.chat, url, url, wm, 'NEXT', `${usedPrefix + command}`, m)
}

handler.help = ['randomnime']
handler.tags = ['random', 'anime'] 
handler.command = /^(randomnime)$/i

handler.limit = true

module.exports = handler
