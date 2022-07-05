let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'Raditya' || args[0] == 'Rad_ganteng' || args[0] == 'radbotzz' || args[0] == 'RadBot') {

    if (new Date - global.db.data.users[m.sender].lastpremgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n5000 XP ✨\n 10 Limit! 🎫\n10000 Money 💹', m)
    global.db.data.users[m.sender].exp += 5000
    global.db.data.users[m.sender].limit += 10
    global.db.data.users[m.sender].money += 10000
    global.db.data.users[m.sender].lastpremgift = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」`, m)
    }
}
handler.help = ['premgift <kode>']
handler.tags = ['xp']
handler.command = /^(premgift)$/i

module.exports = handler
