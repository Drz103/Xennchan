let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _timers = (2592000000 - (new Date - user.lastmonthly))
    let timers = clockString(_timers)  
    if (new Date - user.lastmonthly > 2592000000) {
        conn.sendBut(m.chat, `Anda sudah mengklaim dan mendapatkan 100000 💰money dan 5 🏆Legendary crate Dan 3 🎁Pet Crate`, wm, 'Inventory', '.inv', m)
        user.money += 100000
        user.legendary += 5
        user.pet += 3
        user.lastmonthly= new Date * 1
    } else {
        let buttons = `silahkan tunggu *${timers}* Jam lagi untuk bisa mengclaim lagi`.trim()
        conn.sendBut(m.chat, buttons, wm, 'Daily', '#daily', m)
    }
}
handler.help = ['monthly']
handler.tags = ['xp']
handler.command = /^(monthly)$/i

handler.fail = null
handler.exp = 0

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
