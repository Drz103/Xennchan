let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
await sock.groupParticipantsUpdate(
  m.chat, 
  [usr],
  "promote" // replace this parameter with "remove", "demote" or "promote"
)
//conn.groupRemove(m.chat, [usr]); return;
}
  if (!m.mentionedJid[0]) throw `tag yang mau di promosi`
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await sock.groupParticipantsUpdate(
    m.chat, 
    [user],
    "promote" // replace this parameter with "remove", "demote" or "promote"
)
 // await conn.groupRemove(m.chat, [user])
}
handler.help = ['promote'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(opromote)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
