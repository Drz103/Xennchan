global.fs = require('fs')
global.owner = ['6285892962667', '6285714313795'] // Put your number here
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://api.sekha.tech',
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto.xyz',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.sekha.tech': 'apirey',
  'https://melcanz.com': 'dUtJxxvp',
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto.xyz': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://zekais-api.herokuapp.com': 'f4nczIeU',
  'https://api.lolhuman.xyz': 'sanzychan01',
}

//Edit sesuka lu, Sebagian ad di allfake
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = 'stickerby'
global.author = '©radbotz'
global.wm = 'radbotz'

//========Url 1 Template Buttons=========//
global.dtu1 = 'Youtube Creator'
global.urlnya1 = 'https://youtube.com/channel/UCL91faappuHbbUImf3aZ_2A'

//========Url 2 Template Buttons=========//
global.dtu2 = 'Group Bot WhatsApp'
global.urlnya2 = 'https://chat.whatsapp.com/D5IU5pzGDSyE6lAkqqYnvr'

//=============callButtons=============//
global.dtc = 'Add Me'
global.phn = '+62 858-9296-2667'

global.titlink = 'Folllow me on tiktok'
global.linktiktok = 'tiktok.com/@notyourfavboy330'
global.deslink = ''
global.github = 'https://github.com/Drz103'
global.media = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg'//Ubah gan kalo mao

//======== Fake Size ========//
global.fsx = 999999999999  //fake size foto/video
global.fsdx = 9999999999999  //fake size document 
global.pcdx = 999999999999  // fake page count document

global.multiplier = 200 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
