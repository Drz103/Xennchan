let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.me/api/gplaybutton?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'nama.jpg', `Selamat Atas 1 Juta Subsnya!!!`, m, false)
}
handler.help = ['gplaybutton'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(gplaybutton)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
