let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('_Proses..._')
  let res = `https://caliphapi.com/api/rem?text=${response[0]}&text2=canz&apikey=ELYAS_TZY`
  conn.sendFile(m.chat, res, 'gura.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(logorem)$/i

module.exports = handler

