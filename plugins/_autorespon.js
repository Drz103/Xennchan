let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.db.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `misi`
    this.sendBut(m.chat, `Invite Group 
Group 7 Day / Rp 5k
Group 15 Day / Rp 10k
Group 30 Day / Rp 15k

Jika berminat hubungi: @${global.owner[0]} untuk order:)
`, wm, `Owner`, `.owner`, m)
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam Warohmatullahi Wabarokatuh_`)
    }
    
    let reg2 = /(raditya|radbotz|radit)/i
    let isIrwan = reg2.exec(m.text)
    if (isIrwan && !m.fromMe) {
        m.reply(m.chat, `Pacarku Mungkin Lagi Sibuk Kak, Tunggu Aja😉`)
    }    

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
