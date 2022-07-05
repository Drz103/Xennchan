let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastgetmoney)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastgetmoney > 86400000) {
        conn.reply(m.chat, `Anda sudah menarik uang dan mendapatkan 4000 💰money dan 500 exp🎊`, m)
        global.db.data.users[m.sender].money += 4000
        global.db.data.users[m.sender].exp += 500
        global.db.data.users[m.sender].lastgetmoney = new Date * 1
    } else {
        let buttons = `silahkan tunggu *${timers}* lagi untuk bisa menarik uang lagi`.trim()
        conn.sendBut(m.chat, buttons, watermark, 'Daily', '.daily', m)
    }
}
handler.help = ['getmoney', 'tarikuang']
handler.tags = ['rpg', 'premium']
handler.command = /^(getmoney|tarikuang)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
