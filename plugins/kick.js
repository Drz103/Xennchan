let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
await sock.groupParticipantsUpdate(
  m.chat, 
  [usr],
  "remove" // replace this parameter with "remove", "demote" or "promote"
)
//conn.groupRemove(m.chat, [usr]); return;
}
  if (!m.mentionedJid[0]) throw `tag yang mau dikick`
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await sock.groupParticipantsUpdate(
    m.chat,
    [user],
    "remove" // replace this parameter with "remove", "demote" or "promote"
)
 // await conn.groupRemove(m.chat, [user])
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
