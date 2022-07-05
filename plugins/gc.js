let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let anu = `
┌─〔 GRUB BOT 〕
│ 
├➥ Owner grup
│ *@62858929626673*
├➥ *✗Link grub bot by raditya*
│https://tinyurl.com/y77m6n2j
├➥ *Yang ada Bot Boleh*
│   *masukin ke grub✅*
├➥ *Admin Selalu Benar✅*
├➥ *Jangan spam karna*
│   *owner grub hp nya kentang✅*
├➥ *Sebelum Bergabung Baca*
│   *Rules Terlebih dahulu❗*
│
├➥*©GRUB-BOT 2021*
└─「 *BOT* 」

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), anu, 'Grub Bot By Raditya', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['gruboffical', 'gruprad']
handler.tags = ['main']
handler.command = /^(gruboffical|gruprad)$/i

module.exports = handler
