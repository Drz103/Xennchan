let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {

let name = conn.getName(m.sender)
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let banteng = global.db.data.users[m.sender].banteng
let harimau = global.db.data.users[m.sender].harimau
let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
let buaya = global.db.data.users[m.sender].buaya
let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
let monyet = global.db.data.users[m.sender].monyet
let babihutan = global.db.data.users[m.sender].babihutan
let babi = global.db.data.users[m.sender].babi
let ayam = global.db.data.users[m.sender].ayam
let kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
let past = `*《 ISI KANDANG 》*
  
kandang: *${name}*

Level: *${level}*
Exp: *${exp}*

*JENIS-JENIS*
🐂 banteng = *${banteng}*
🐅 harimau = *${harimau}*
🐘 gajah = *${gajah}*
🐐 kambing = *${kambing}*
🐼 panda = *${panda}*
🐊 buaya = *${buaya}*
🐃 kerbau = *${kerbau}*
🐮 sapi = *${sapi}*
🐒 monyet = *${monyet}*
🐗 babi hutan = *${babihutan}*
🐖 babi = *${babi}*
🐓 ayam = *${ayam}*

🗻 Total Isi: *${banteng + harimau + gajah + kambing + panda + buaya + kerbau + sapi + monyet + babihutan + babi + ayam}* Jenis`
let isi = ` *🐂 = ${banteng}*
*🐅 = ${harimau}*
*🐘 = ${gajah}*
*🐐 = ${kambing}*
*🐼 = ${panda}*
*🐊 = ${buaya}*
*🐃 = ${kerbau}*
*🐮 = ${sapi}*
*🐒 = ${monyet}*
*🐗 = ${babihutan}*
*🐖 = ${babi}i*
*🐓 = ${ayam}*`.trim()
await conn.send2ButtonLoc(m.chat, await(await fetch(kandang)).buffer(), past, wm, 'Dompet', '#my', 'SHOP', '#shop', m)
}
handler.help = ['kotakhewan', 'kandang', 'kandanghewan']
handler.tags = ['rpg']
handler.command = /^(kandang(hewan)?|kotak(hewan)?)$/i
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
