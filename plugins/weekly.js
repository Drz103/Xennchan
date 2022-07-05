let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _timers = (604800000 - (new Date - user.lastweekly))
    let timers = clockString(_timers)     
    if (new Date - user.lastweekly > 604800000) {
        conn.sendBut(m.chat, `Anda sudah mengklaim dan mendapatkan 20000 💰money dan 3 🏆Legendary crate`, wm, 'Inventory', '.inv', m)
        user.money += 20000
        user.legendary += 3
        user.lastweekly= new Date * 1
    } else {
        let buttons = `silahkan tunggu *${timers} Jam* lagi untuk bisa mengclaim lagi`.trim()
        conn.send2But(m.chat, buttons, wm, 'Daily', '#daily', 'Monthly', '#monthly', m)
    }
}
handler.help = ['weekly']
handler.tags = ['xp']
handler.command = /^(weekly)$/i

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
