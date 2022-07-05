let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan nama daerah\nContoh= .jadwalsholat jakarta'
  let res = await xfar.JadwalSholat(text)
conn.sendBut(m.chat, ` *JADWAL SHOLAT*

_*${res.tanggal}*_

Imsyak: ${res.imsyak}
Subuh: _${res.subuh}_
Dzuhur: _${res.dzuhur}_
Ashar: ${res.ashar}
Maghrib: ${res.maghrib}
Isya: ${res.isya}
`, wm, 'OK', 'huuu',m)

}
handler.help = ['jadwalsholat <daerah>']
handler.tags = ['internet']
handler.command = /^jadwalsholat$/i


module.exports = handler
