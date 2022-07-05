let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *Pesan dari Admin Group* ⋘
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` @${mem.id.split('@')[0]}\n`
				}
                teks += `\nbukan radbotz`
                conn.send2But(m.chat, teks, wm, 'Apa sih', 'p', 'Tag ra jls', 'p', m)
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
