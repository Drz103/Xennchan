let handler = async(m, { conn, text, participants }) => {
if(!text) throw `Teks nya mana?`
let mantap = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: '120363045172639704@g.us' }, message: { contactMessage: { displayName: `${await conn.getName(m.sender)}`, vcard: `BEGIN: VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${m.sender.split('@')[0]}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: mantap })
}
handler.help = ['ohidetag <pesan>']
handler.tags = ['group']
handler.command = /^(ohidetag)$/i

handler.group = true
handler.owner = true

module.exports = handler
