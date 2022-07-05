let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `_Example:_ ${usedPrefix + command} 10`
    let user = global.db.data.users[m.sender]
    let caption = `
Kamu Menukarkan *Money* kamu dengan exp senilai ${text} Exp🧬`
if ( user.money >= text) {
    user.money -= text
    user.exp += text
 
    conn.sendBut(m.chat, caption, wm, 'Tukar Lagi', `.tukarexp ${text}`, m)
 } else m.reply('ngadi Ngadi lu Money abis mau ditukerin apa')
    
   }
handler.help = ['tukarexp <jumlah>']
handler.tags = ['xp']
handler.command = /^(tukarexp|tukarexp)$/i

module.exports = handler
