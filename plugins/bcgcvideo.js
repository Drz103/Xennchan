let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Gc, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await delay(500)
    conn.sendButtonVid(i, 'https://telegra.ph/file/e5dfc510dae4bf57c2e20.mp4', `${pesan}`, 'BROADCAST', 'Owner', '.owner', ftroli).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgcvid <teks>']
handler.tags = ['owner']
handler.command = /^(broadcastgcvid|bcgcvid)$/i

handler.owner = true

module.exports = handler
