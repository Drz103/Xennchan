let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {
let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 43200000) return // setiap 12 jam
    await this.sendBut(m.chat, `Hai, ${ucapan()}\n\nAda yang bisa saya bantu?`.trim(), `Bot aktif selama ${uptime}\n*Offical By xennchan*`, 'Menu', '.menu')
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  if (time >= 5) {
    res = "Selamat pagi🌄"
  }
  if (time > 9) {
    res = "Selamat siang🏞️"
  }
  if (time >= 15) {
    res = "Selamat sore🌇"
  }
  if (time >= 19) {
    res = "Selamat malam🌃"
  }
  return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
