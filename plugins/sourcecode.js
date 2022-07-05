let handler = async (m, { usedPrefix, command }) => {
let scnya = `
*───「 SCRIPT BOT 」───*
Bot ini menggunakan Script Dari
Elyas: -
Private bg
`
await conn.send3Template2UrlButtonLoc(m.chat, scnya.trim(), wm, await(await require('node-fetch')(media)).buffer(), `Back`, `${usedPrefix}menu`, 'Owner', 'owner', 'Donasi', '.donasi', m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc|script|sourcecode)$/i

module.exports = handler
