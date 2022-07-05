let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
	let { lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]	    
    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `
*—「 🕖 Cooldown 」—*
*Last Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
*Last Memancing :* ${lastfishing > 0 ? '❌' : '✅'}
*Last Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
*Last Duel :* ${lastduel > 0 ? '❌' : '✅'}
*Last War :* ${lastwar > 0 ? '❌'  : '✅'}
*Last Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
*Last Mining :* ${lastmining > 0 ? '❌' : '✅'}
*Last Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
*Last Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
*Last Claim :* ${lastclaim > 0 ? '❌' : '✅'}
*Last Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
*Last Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
\n${readMore}
⚠️ *Warn:* ${warn}
⛔ *Banned:* No
`.trim()
    conn.send2But(m.chat, str, wm, `Inventory`, `.inv`, `Profile`, `.profile`, m)
    conn.reply(str)
}
handler.help = ['cd','cooldown']
handler.tags = ['rpg']
handler.command = /^(cooldown)$/i
handler.register = false
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)
