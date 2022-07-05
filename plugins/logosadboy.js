let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://caliphapi.com/api/sadboy?text=${response[0]}&text2=${response[1]}&apikey=ELYAS_TZY`
  conn.sendFile(m.chat, res, 'gfx3.jpg', `Nih kak`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(sadboylogo)$/i
handler.register = true

handler.limit = true

module.exports = handler

