let { get } = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...kode nya mana?'
  m.reply('Searching....')
  let lol = global.API('lolhuman', `/api/nhentaipdf/${args[0]}`, {}, 'apikey')
  let { result } = (await get(lol)).data
  if (result.includes('HTML')) throw `Code ${args[0]} Not Found!`
   conn.sendFile(m.chat, await getBuffer(result), 'NihKak', null, m, false, {fileName:"hm.pdf"})
}
handler.help = ['nhpdf'].map(v => v + ' <code>')
handler.tags = ['internet']
handler.command = /^(nhpdf)$/i
handler.limit = 1
module.exports = handler

async function getBuffer(url) {
k = await require('node-fetch')(url)
a = await k.buffer()
return a 
}
