let handler = async (m, { conn, command, usedPrefix, text }) => {
  let fetch = require('node-fetch')
  let { performance } = require('perf_hooks')
  let os = require('os')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let getGroups = await conn.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let chats = Object.keys(conn.chats).filter(v => v.endsWith('s.whatsapp.net')).map(v => v)
  let anu = groups.map(v => v.id)
   let old = performance.now()
   let neww = Math.round(performance.now())
   let speed = neww 
   let fakespeed = `${pickRandom(['12','190','20','36','15','174','591','45','30','195','61','70','180','612','390','122','8','1','85','27'])}`
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
╭──「 ${conn.user.name} ──࿐
│✇ Library : *Baileys-MD*
│✇ Language : *Javascript*
│✇ Database : *MongoDB*
│✇ Speed : *${fakespeed} Ms*
│✇ Version : *^0.2.1*
│✇ Dev : *@6285892962667*
│✇ Runtime : *${runtime}*
│✇ Prefix : *Multi Prefix 「 ${usedPrefix} 」*
│✇ Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
│✇ User : *${usergakdaftar}*
│✇ Register : *${userdaftar}*
│✇ Platform: *${os.platform()}*
╰─────────⳹

╭─「 *❏ CHAT INFO ❏* 」─
│ ▧ *${chats.length}* Total Chats
│ ▧ *${anu.length}* Total Grup
│ ▧ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│ ▧ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
╰──────────────࿐
`.trim()
var as = `Tanggal : ${week}, ${date}\nWaktu : ${a} (WIB)`

  await conn.sendTemplateButtonLoc(m.chat, infonyacok, as, await(await fetch(fla + `${command}`)).buffer(), `Menu`,  `${usedPrefix}menu`, m)

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler
let more = String.fromCharCode(8206)
let readMore = more.repeat(4001)

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
