let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let chats = Object.keys(conn.chats).filter(v => v.endsWith('s.whatsapp.net')).map(v => v)
    let anu = chats.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat pribadi, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of chats) {
    await delay(500)
    conn.sendTB(i, `${pesan}`, wm, 'Chat Owner', 'https://wa.me/'+global.owner[0]+'?text=Assalamu\'alaikum', null).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Chat pribadi`)
}
handler.help = ['bcpc <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastpc|bcpc)$/i

handler.owner = true

module.exports = handler
