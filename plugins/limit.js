let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendBut(m.chat, `${global.db.data.users[who].limit} Limit Tersisaಥ_ಥ`, wm, 'Beli Limit', '.buy', m)
}
handler.help = ['limit']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler
