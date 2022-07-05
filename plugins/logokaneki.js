let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://caliphapi.com/api/kaneki?text=${response[0]}&apikey=ELYAS_TZY`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(logokaneki)$/i
handler.register = true

handler.limit = true

module.exports = handler
