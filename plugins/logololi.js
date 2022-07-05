let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://caliphapi.com/api/lolimaker?text=${response[0]}&text2=canz&apikey=ELYAS_TZY`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logololi)$/i

handler.limit = true

module.exports = handler
