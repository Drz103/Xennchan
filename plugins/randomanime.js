let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButtonImg(m.chat, `https://server-api-rey.herokuapp.com/api/wallpaper/${command}?apikey=apirey`, 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['waifu2', 'shota', 'yotsuba', 'shinomiya', 'yumeko', 'tejina', 'chiho', 'boruto', 'kaori', 'shizuka', 'kaga', 'kotori', 'mikasa', 'akiyama', 'gremory', 'isuzu', 'shina', 'kagura', 'shinka', 'eba', 'elaina', 'erza', 'hinata', 'minato', 'naruto', 'sagiri', 'nezuko', 'rize', 'ana', 'deidara', 'yuki', 'asuna', 'ayuzawa', 'chitoge', 'emilia', 'hestia', 'inori', 'itachi', 'madara', 'sakura', 'sasuke', 'tsunade', 'onepiece', 'mobil', 'montor', 'keneki', 'toukachan', 'akira', 'itori', 'kurumi', 'pokemon']
handler.tags = ['random']
handler.command = /^(waifu2|shota|yotsuba|shinomiya|yumeko|tejina|chiho|boruto|kaori|shizuka|kaga|kotori|mikasa|akiyama|gremory|isuzu|shina|kagura|shinka|eba|elaina|erza|hinata|minato|naruto|sagiri|nezuko|rize|ana|deidara|yuki|asuna|ayuzawa|chitoge|emilia|hestia|inori|itachi|madara|sakura|sasuke|tsunade|onepiece|mobil|montor|keneki|toukachan|akira|itori|kurumi|pokemon)$/i

handler.limit = true

module.exports = handler