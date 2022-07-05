let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.db.data.users[m.sender].lastnyampah = global.db.data.users[m.sender].lastnyampah || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let nyampah = 'https://telegra.ph/file/c549ee70e732af52b9500.jpg'
    let knyampah = 'https://telegra.ph/file/d3b358eef80de7791515c.jpg'
    let mnyampah = 'https://telegra.ph/file/fcc8793b46723417b4d66.jpg'
    //let name = conn.getName[m.sender]
    let __timers = (new Date - global.db.data.users[m.sender].lastnyampah)
    let _timers = (1200000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date - global.db.data.users[m.sender].lastnyampah > 120000) {
      if (Aku > Kamu) {
        conn.send2ButtonLoc(m.chat, await (await fetch(mnyampah)).buffer(), 'Kamu Tertangkap🛂 Setelah Kamu Menyampah sembarangan. Dan kamu harus membayar denda 5000 ribu rupiah💵', wm, 'Lagi lah', '.nyampah', 'Dompet', '.my', m)
        user.money -= 5000
        global.db.data.users[m.sender].lastnyampah = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 2000
        user.exp += 2000
        conn.send2ButtonLoc(m.chat, await (await fetch(nyampah)).buffer(), 'Kamu berhasil *Menyampah. Dan kamu mendapatkan 2 ribu rupiah*💵 Dan 2000 Exp', wm, 'Again', '.nyampah', 'Dompet', '.my', m)
        global.db.data.users[m.sender].lastnyampah = new Date * 1
      } else {
        conn.sendButtonLoc(m.chat, await (await fetch(knyampah)).buffer(), `Sorry Gan Lu g Berhasil Nyampah Dan Tidak Kena denda karna kamu *Kena sanksi sosial🚮*`, wm, `Kembali`, `${usedPrefix}menu`, m)
        global.db.data.users[m.sender].lastnyampah = new Date * 1
      }
    } else conn.sendBut(m.chat, `Kamu sudah Menyampah, dan kamu harus menunggu selama *${timers}* agar bisa Nyampah kembali`, wm, `Menu`, `${usedPrefix}menu`, m)
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['nyampah']
handler.tags = ['rpg']
handler.command = /^(nyampah)$/i
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
