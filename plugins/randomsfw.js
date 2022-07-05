let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendButtonImg(m.chat, `https://server-api-rey.herokuapp.com/api/nsfw/${command}?apikey=apirey`, 'Nih kak', wm, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['bdsm', 'blowjob', 'cuckold', 'cum', 'femdom', 'foot', 'gangbanh', 'glasses', 'gifs', 'manga', 'mstb', 'neko', 'orgy', 'panties', 'neko2', 'tentacles', 'things', 'zettai']
handler.tags = ['nsfw']
handler.command = /^(bdsm|blowjob|cuckold|cum|femdom|foot|gangbanh|glasses|gifs|manga|mstb|neko|orgy|panties|neko2|tentacles|things|zettai)$/i
handler.private = true

handler.limit = true

module.exports = handler
