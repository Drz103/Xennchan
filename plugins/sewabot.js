let fetch = require("node-fetch")
let fs = require('fs')
let handler = async (m, { conn }) => {    
let anu = `*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _5k/grup (1 Bulan)_
❒ Sewa = _7k/grup (1 Tahun)_
❒ Sewa = _10k/group (Permanen)

❒ Bot reset setiap hari

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _DANA_

◪ 𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏

❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Banyak Sepuas Nya Main*

◪ *Jika Minat Hubungi owner kami @6285892962667*
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'radbotz')).buffer(), anu, wm, 'Owner', '.owner', 'Back', '.menu', m)
}
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^(sewabot)$/i

module.exports = handler
