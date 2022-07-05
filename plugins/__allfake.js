let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = m => m
handler.all = async function (m) {
	let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
	global.axios = require('axios')	
	global.request = require('request')
	global.users = global.db.data.users[m.sender]
	global.chats = global.db.data.chats[m.chat]
	global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: '9999999999999999999999999999999999999999999999999999999', status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
	global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./media/radbotz.jpg'), thumbnail: require('fs').readFileSync('./media/radbotz.jpg'),sendEphemeral: true}}}
	    let _uptime = process.uptime() * 1000
        global.uptime = clockString(_uptime)
        global.img = media
        global.blur = pickRandom(global.blurr)
        global.wait = pickRandom(global.waitt)
        global.fla = pickRandom(global.flaa)
        global.eror = pickRandom(global.emror)    
        global.ucapan = ucapan()
        global.pickRandom = pickRandom
        global.sock = conn        
        global.d = new Date(new Date + 3600000)
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
        // pesan sementara
	global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
	
	// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
	global.adReply = {
	    contextInfo: {
		forwardingScore: 9999,
		isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
		externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
		    title: "aktif selama: " + global.uptime,
		    body: wm,
		    previewType: "PHOTO",
		    thumbnail: await (await fetch(img)).buffer(),
		    //sourceUrl: 'https://wa.me',
		}
	    }
	}
	
        const hariRaya = new Date('December 31, 2022 23:59:59')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const ultah = new Date('december 24, 2022 23:59:59')
        const sekarat = new Date().getTime() 
        const Kurang = ultah - sekarat
        const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
        const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
        const detek = Math.floor( Kurang % (1000 * 60) / 1000)
        global.locale = 'id'
        global.week = d.toLocaleDateString(locale, { weekday: 'long' })
        global.date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        })
        global.dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        }).format(d)
        let jax = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        let jbx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        let jcx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        let jdx = 'application/pdf'
        let jex = 'text/rtf'

        global.td = pickRandom([jax, jbx, jcx, jdx, jex])        
        global.wib= require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
        global.watermark = `Waktu: ${wib} WIB\nTanggal : ${week}, ${date}\nTanggal Islam: ${dateIslamic}\nAktif Selama: ${uptime}\n\n©radbotz`
	    // Tambahin ya
    }
}

module.exports = handler

function ucapan() {
      const time = require('moment-timezone').tz('Asia/Jakarta').format('HH')
      res = "Selamat dinihari"
      if (time >= 4) {
        res = "Selamat pagi"
      }
      if (time > 10) {
        res = "Selamat siang"
      }
      if (time >= 15) {
        res = "Selamat sore"
      }
      if (time >= 18) {
        res = "Selamat malam"
      }
      return res
    }
    
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.emror = [
'Error', 
'Astagfirullah Error', 
'Nice Error', 
'Salah Format Keknya :v', 
'error bro', 
'Kocak Error :v', 
'Wtf Error :v', 
'Ciaaa error', 
'Error cuyy', 
'Dahlah (emot batu) Error',
'Kyaa Error',
'Error Sayangg', 
'Error Mengcapek Keknya Aku', 
'Astoge Error, Yok Bisa Yok', 
'Buset Error :)',
'Lah Gabisa, Kurang Donasi Aku Ni Keknya'
]

global.waitt = [
'「 ⏱️ 」 _Tunggu Sedang di Proses..._',
'「 ⏱️ 」Loading...',
'「 ⏱️ 」Loanjing...',
'bntr lgi bedmud aku',
'iya lagi di proses',
'sabar y',
'bntr aku usahain dlu', 
'mulai dari nol yahh say', 
'tunggu bntar, jan kemana-mana y', 
'wait a minute', 
'wait a second', 
'iya iyaaa bntar woila', 
'iya bntar lagiii, jan spam ya',
'lagi di proses, kurang cepet? donasi banh, jan make doang, huhuu'
]

global.flaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23401620&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
 ]

global.blurr = [
'https://telegra.ph/file/49f202e8f18ce4825618c.jpg',
'https://telegra.ph/file/1811561e85c55eb7e10c9.jpg',
'https://telegra.ph/file/b6e8d4e5a413c6f6b7d4d.jpg'
]