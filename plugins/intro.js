let handler = async (m, { conn }) => {

let intro= `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
 |  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙` // Tambah sendiri kalo mau
conn.sendBut(m.chat, intro.trim(), wm, 'INTRO!!', 'KAGAIN', m)
}
handler.command = /^(intro)$/i

module.exports = handler






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
