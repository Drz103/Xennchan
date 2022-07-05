let handler = async (m, { conn }) => {
    conn.sendMessage(m.chat, {
	react: {
	    text: `${pickRandom(["🐤","😃","🥴","😔", "🚶","👎","🗿", "👍", "💨", "🌝", "💩", "👻", "🔥", "🖕"])}`,
	    key: m.key
	}
    })	
}
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k)/i
handler.command = new RegExp

module.exports = handler  

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}			