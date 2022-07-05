let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `_Example:_ ${usedPrefix + command} 10`
    let user = global.db.data.users[m.sender]
    let caption = `
Kamu Menukarkan *Exp* kamu dengan money senilai ${text} money💰`
if ( user.exp >= text) {
    user.exp -= text
    user.money += text
 
    conn.sendBut(m.chat, caption, wm, 'Tukar Lagi', `.tukarmoney ${text}`, m)
 } else m.reply('ngadi Ngadi lu xp abis mau ditukerin apa')
    
   }
handler.help = ['tukarmoney <jumlah>']
handler.tags = ['xp']
handler.command = /^(tukarmoney|tukaruang)$/i

module.exports = handler
