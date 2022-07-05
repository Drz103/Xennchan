let handler = async (m, { conn, text, participants }) => {
const {delay} = require("@adiwajshing/baileys")

async function f(){
let getGroups = await conn.groupFetchAllParticipating()

let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])

let anu = groups.map(v => v.id)

m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)

for (let i of anu) {

await delay(100)

conn.copyNForward(i, m.quoted.fakeObj, true)

}

m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group Chat`)

}

return f()
}
handler.help = ['tobc']
handler.tags = ['owner']
handler.command = /^(tobc)$/i

handler.owner = true

module.exports = handler
