let fetch = require("node-fetch")
let fs = require('fs')
let handler = async (m, { conn }) => {    
let anu = `*BIODATA OWNER*

*Nama* : Raditya
*Umur* : 17
*Kelas* : 3 Smk
*Status* : Private

*SOSIAL MEDIA*

*Wangsaf Owner* : @6285892962667
*Gmail* : Xnxx@gmail.com
*Github* : https://github.com/Drz103

_Oke udah itu aja terimakasih_
`.trim()
conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), anu, wm, 'Back', '.menu', m)
}
handler.help = ['infoowner', 'infodevoloper']
handler.tags = ['info']
handler.command = /^(infoowner|infodevoloper|bioowner|biodata|bio)$/i

module.exports = handler
