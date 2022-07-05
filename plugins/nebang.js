let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.db.data.users[m.sender].lastnebang = global.db.data.users[m.sender].lastnebang || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 11)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let nebang = 'https://telegra.ph/file/d7bc33cc50144c08f0cb5.jpg'
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastnebang)
    let _timers = (1200000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastnebang > 1200000) {
      if (Aku > Kamu) {
        conn.send2But(m.chat, 'Kamu Tertangkap Setelah Kamu Menebang pohon sembarangan🌳. Dan kamu harus membayar denda 1000 ribu rupiah💵', wm, 'Again', '.nebang', 'Dompet', '.my', m)
        user.money -= 1000
        global.db.data.users[m.sender].lastnebang = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 2000
        user.exp += 1000
        conn.send2ButtonLoc(m.chat, await (await fetch(nebang)).buffer(), 'Kamu berhasil Menebang semua pohon🪵. Dan kamu mendapatkan 2 ribu rupiah💵 Dan 1000 Exp', wm, 'Again', '.nebang', 'Dompet', '.my', m)
        global.db.data.users[m.sender].lastnebang = new Date * 1
      } else {
        conn.sendBut(m.chat, `Sorry Gan Lu g Berhasil Nebang pohon Dan Tidak masuk penjara karna kamu *melarikan diri🏃*`, wm, `Kembali`, `${usedPrefix}menu`, m)
        global.db.data.users[m.sender].lastnebang = new Date * 1
      }
    } else conn.sendBut(m.chat, `Kamu sudah Menebang Semua pohon, dan kamu harus menunggu selama ${timers} agar Pohon nya tumbuh kembali🌱`, wm, `Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)$/i
handler.premium = false
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
