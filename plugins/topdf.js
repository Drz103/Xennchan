const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada media yang ditemukan'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  conn.sendFile(m.chat, global.API('xteam', '/imagetopdf', { url: `${link}` }, 'APIKEY'), 'NihKak', null, m, false, {fileName:"radbotz.pdf"})
}
handler.help = ['topdf <reply image>']
handler.tags = ['tools']
handler.command = /^(topdf)$/i

handler.limit = true

module.exports = handler
