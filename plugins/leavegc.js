let handler = async (m, { conn, args, command }) => {
        if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply('Bye, Bot akan Leave dari group', m.chat) // WKWKW pesannya sama semua. gk kreatif :v
        await conn.groupLeave(m.chat)
    }
    
handler.help = ['gc', 'gcall', 'group'].map(v => 'leave' + v)
handler.tags = ['group', 'owner']
handler.command = /^leaveg(c|ro?up)(all|semua)?$/i

handler.rowner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time)) 
