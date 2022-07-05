let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
const defaultMenu = {
          before: `
 ╭────ꕥ radbotz ꕥ────
│✾ Version: %version
│✾ Library: Baileys-MD
│✾ Runtime: %uptime
╰❑
╭─❑ 「 INFO USER 」 ❑──
│ ✾ Name: %name
│ ✾ Status: Free User
│ ✾ Limit: %limit
│ ✾ Money: %money
│ ✾ Exp: %totalexp
│ ✾ Level: %level
│ ✾ Role: %role
╰❑
╭─❑ 「 INFORMASI 」 ❑──
│ Di larang spam !
╰❑
%readmore`.trimStart(),
  header: '╭─「 *%category* 」',
  body: '│ • %cmd %islimit %isPremium',
  footer: '╰────\n',
          after: ` `,
}

let handler = async (m, { conn, usedPrefix: _p, args, command, DevMode }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'random', 'game', 'xp', 'islam', 'stiker', 'jadian', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'vote', 'nsfw', 'audio', 'info', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'MENU UTAMA',
  'game': 'MENU GAME',
  'rpg': 'MENU RPG',
  'xp': 'MENU EXP',
  'group': 'MENU GROUP',
  'owner': 'MENU OWNER',
  'premium': 'KHUSUS PREM', 
  'vote': 'MENU VOTE',
  'downloader': 'MENU DOWNLOAD',
  'fun': 'MENU FUN',
  'sticker': 'MENU CONVERT',
  'shortlink': 'MENU SHORTLINK',
  'nulis': 'NULIS & BUAT LOGO',
  'image': 'RANDOM IMAGE',
  'absen': 'ABSEN',
  'audio': 'PENGUBAH SUARA',
  'stalk': 'MENU STALK',
  'jadian': 'MENU JADIAN',
  'film': 'MENU FILM',
  'maker': 'MENU MAKER',
  'nsfw': 'MENU NSFW',
  'github': 'MENU GITHUB',
  'quotes' : 'MENU QUOTES',
  'random': 'MENU RANDOM',
  'internet': 'INTERNET',
  'kerang': 'MENU KERANG',
  'anime': 'MENU ANIME',
  'tools': 'MENU TOOLS',
  'advanced': 'ADVANCED',
  'islam' : 'MENU ISLAMI',
  'info': 'MENU INFO',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'islam') tags = {
    'islam': 'Islam'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'advanced': 'Advanced'
  }
  if (teks == 'update') tags = {
    'update': 'Update'
  }
 

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

let mantap = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${await conn.getName(m.sender)}`, vcard: `BEGIN: VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${m.sender.split('@')[0]}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length    
let aoa = `${ucapan()} ${name}.\nJika ada fitur eror tidak usah lapor owner!`.trim()
let anu = `Silahkan Pilih Menu Dibawah!`.trim()
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })
    if (teks == '404') {
        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: aoa,
            description: anu,
            buttonText: 'Pilih Disini',
            listType: 1,
            footerText: watermark,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": "Status Bot",
                  "description": "Status dan informasi Bot.",
                  "rowId": `.infobot`
               }, {
                   "title": "Rules",
                   "description": "User yang bijak selalu mematuhi Rules.",
                   "rowId": `.rules`
               }, {
                   "title": "Sewa bot - Premium",
                    "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                    "rowId": `.sewabot`
               }],
               "title": "───────────「 Tentang Bot Dan Lainya 」"
              }, {
                "rows": [{
                  "title": `Semua Perintah`,
                  "description": "Menu Semua Perintah",
                  "rowId": `${_p}? all`
               }],
                "title": `List Menu ${conn.user.name}`
              }, {
                "rows": [{
                  "title": `Menu Anime`,
                  "description": "Menu search & random anime wibu baka>//<",
                  "rowId": `${_p}? anime`
              }, {
                  "title": `Menu Admin & Group`,
                  "description": "Menu untuk admin & grup",
                  "rowId": `${_p}? admin`
              }, {
                  "title": `Menu Random Cogan & Cecan`,
                  "description": "Lagi perbaikan",
                  "rowId": `${_p}? gacha`
              }, {
                  "title": `Menu Anonymous`,
                  "description": "Menu untuk bermain anonymous chat versi whatsapp",
                  "rowId": `${_p}? anonymous`
              }, {
                  "title": `Menu Audio`,
                  "description": "Menu pengubah suara audio atau convert audio",
                  "rowId": `${_p}? audio`
              }, {
                  "title": `Menu Downloader`,
                  "description": "Menu download media video, foto, dan file",
                  "rowId": `${_p}? downloader`
              }, {
                  "title": `Menu Random`,
                  "description": "Menu download media video, foto, dan file",
                  "rowId": `${_p}? random`
              }, {
                  "title": `Menu Fun`,
                  "description": "Menu fun hanya untuk bersenang-senang, jangan baperan yaa<3",
                  "rowId": `${_p}? fun`
              }, {
                  "title": `Menu Game`,
                  "description": "Menu untuk bermain game dan mendapatkan xp untuk levelup",
                  "rowId": `${_p}? game`
              }, {
                  "title": `Menu Info`,
                  "description": "Menu info seperti pemilik bot dan source code bot",
                  "rowId": `${_p}? info`
              }, {
                  "title": `Menu Internet`,
                  "description": "Menu untuk menjelajah di internet",
                  "rowId": `${_p}? internet`
              }, {
                  "title": `Menu Islamic`,
                  "description": "Menu agama islam, tetap jaga toleransi beragama ya kak 🥰",
                  "rowId": `${_p}? islam`
              }, {
                  "title": `Menu Kerang Ajaib`,
                  "description": "Menu jawaban random dari bot, masa gak tau gak pernah nonton spongebob ya?",
                  "rowId": `${_p}? kerangajaib`             
              }, {
                  "title": `Menu Nulis & Logo`,
                  "description": "Menu mager nulis & logo",
                  "rowId": `${_p}? nulis`                
              }, {
                  "title": `Menu Nsfw`,
                  "description": "Menu khusus dewasa 🔞",
                  "rowId": `${_p}? nsfw`
              }, {
                  "title": `Menu Premium`,
                  "description": "Menu untuk user premium, jika ingin menggunakannya daftar premium dulu ke owner",
                  "rowId": `${_p}? premium`               
              }, {
                  "title": `Menu Quotes`,
                  "description": "Menu random quotes & membuat quotes",
                  "rowId": `${_p}? quotes`
              }, {
                  "title":  `Menu RPG`,
                  "description": "Menu game rpg (role playing game)",
                  "rowId": `${_p}? rpg`              
              }, {
                  "title":  `Menu Stiker`,
                  "description": "Menu membuat stiker dan mencari stiker",
                  "rowId": `${_p}? stiker`
              }, {
                  "title":  `Menu Tools`,
                  "description": "Menu alat convert",
                  "rowId": `${_p}? tools`
              }, {
                  "title":  `Menu Update`,
                  "description": "Menu fitur baru bot, silahkan di cek <3",
                  "rowId": `${_p}? update`
              }, {
                  "title":  `Menu Vote & Absen`,
                  "description": "Menu untuk vote dan absen",
                  "rowId": `${_p}? vote`
                }, {
                  "title":  `Menu XP dan Limit`,
                  "description": "Menu cek level, xp, limit, dan pendaftaran user",
                  "rowId": `${_p}? xp`
                }, {
                  "title":  `Menu Owner`,
                  "description": `Menu khusus untuk owner ${conn.user.name}`,
                  "rowId": `${_p}? owner`
                }, {
                  "title":  `Menu jadian`,
                  "description": "Menu buat para Kang bucin",
                  "rowId": `${_p}? jadian`
                 }],
                  "title": "───────────「 All menu 」"
                }, {
                "rows": [{
                  "title": `Owner bot`,
                  "description": "pemilik RadBotZ",
                  "rowId": `.owner`
                }, {
                  "title": "Donasi",
                  "description": "Jangan lupa donasi untuk mendukung bot agar aktif selalu",
                  "rowId": `.donasi`
                }, {
                  "title": `Kata penutup`,
                  "description": "Terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/main² tidak akan di respon(user bisa terkena banned/block)",
                  "rowId": ".creator"
                }, {
                  "title": `Thanks To |🎖️|`,
                  "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                  "rowId": `.tqto`
                 }],
                  "title": "───────────「 Penutup 」"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participants":"0@s.whatsapp.net",
              "remoteJid": "status@broadcast",
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: mantap });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '```Limit```' : '')
                  .replace(/%isPremium/g, menu.premium ? '```Premium```' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      name, weton, week, date, dateIslamic, time,
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    await conn.send3Template2UrlButtonLoc(m.chat, text.trim(), wm, await(await require('node-fetch')(fla + teks)).buffer(), `Profile`, `.my`, 'Owner👤', '.owner', 'Donasi', '.donasi', m)
    } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "jangan lupa tidur yaah, lop yu<3"
  if (time >= 4) {
    res = "Selamat Pagi ☀"
  }
  if (time > 10) {
    res = "Selamat Siang 🌞"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌝"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌚"
  }
  return res
}
