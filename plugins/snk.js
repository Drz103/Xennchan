const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let faq = `
*FAQ BOT*

╭─────[ *PERATURAN* ]─────✧ 
┴ 
│BOT Aktif Jika Owner Aktif! 
*│¹ Dilarang Hina Bot / Ownerku* 
*│² Dilarang Spam Commands* 
*│³ Dilarang Kirim Virtex / Virkon* 
*│⁴ Dilarang Spam Menu Gak Jelas* 
*│⁵ Dilarang Telpon / Vc bot* 
*│⁶ Dilarang Culik Bot / Trial 2 Day* 
*│⁷ Dilarang Promosi* 
*│⁸ Dilarang Meniru pesan Bot* 
*│⁹ Bot Tidak Menerima Save Kontak 🗿* 
*│¹⁰ Dilarang Chat Owner Ga Jelas* 
*│¹¹ No plagiat*
┬ 
╰──────────··· 
 
╭─────[ *HUKUMAN* ]─────✧ 
┴ 
│ 1 & 11 = Block  banned permanent 🗿 
│ 2,4,6 & 8 = Banned sementara ✌ 
│ 3 = War 👻 
│ 5 = Block sementara ✨ 
│ 9 & 10 = Block permanent 🗿 
┬ 
╰──────────···
`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: faq,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/radbotz.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 Source Code',
               url: 'https://github.com/ilmanhdyt/ShiraoriBOT-Md'
             }

           },
           {
             urlButton: {
               displayText: 'Group Bot WhatsApp',
               url: 'https://chat.whatsapp.com/D5IU5pzGDSyE6lAkqqYnvr'
             }

           },
           {
             callButton: {
               displayText: 'Nomor Owner',
               url: '+62 858-9296-26673'
             }

           },
           {
             quickReplyButton: {
               displayText: 'DONASI',
               id: '.donasi',
             }
           },
               {
             quickReplyButton: {
               displayText: 'MENU',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|peraturan|faq|syarat|snk)$/i

module.exports = handler
