/**
* maykell
**/
let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {

	let monsters = [
		{ area: 1, name: "Goblin" },
		{ area: 1, name: "Slime" },
		{ area: 1, name: "Wolf" },
		{ area: 2, name: "Nymph" },
		{ area: 2, name: "Skeleton" },
		{ area: 2, name: "Wolf" },
		{ area: 3, name: "Baby Demon" },
		{ area: 3, name: "Ghost" },
		{ area: 3, name: "Zombie" },
		{ area: 4, name: "Imp" },
		{ area: 4, name: "Witch" },
		{ area: 4, name: "Zombie" },
		{ area: 5, name: "Ghoul" },
		{ area: 5, name: "Giant Scorpion" },
		{ area: 5, name: "Unicorn" },
		{ area: 6, name: "Baby Robot" },
		{ area: 6, name: "Sorcerer" },
		{ area: 6, name: "Unicorn" },
		{ area: 7, name: "Cecaelia" },
		{ area: 7, name: "Giant Piranha" },
		{ area: 7, name: "Mermaid" },
		{ area: 8, name: "Giant Crocodile" },
		{ area: 8, name: "Nereid" },
		{ area: 8, name: "Mermaid" },
		{ area: 9, name: "Demon" },
		{ area: 9, name: "Harpy" },
		{ area: 9, name: "Killer Robot" },
		{ area: 10, name: "Dullahan" },
		{ area: 10, name: "Manticore" },
		{ area: 10, name: "Killer Robot" },
		{ area: 11, name: "Baby Dragon" },
		{ area: 11, name: "Young Dragon" },
		{ area: 11, name: "Scaled Baby Dragon" },
		{ area: 12, name: "Kid Dragon" },
		{ area: 12, name: "Not so young Dragon" },
		{ area: 12, name: "Scaled Kid Dragon" },
		{ area: 13, name: "Definitely not so young Dragon" },
		{ area: 13, name: "Teen Dragon*" },
		{ area: 13, name: "Scaled Teen Dragon" },
	]
	let player = global.db.data.users[m.sender]
	let pname = conn.getName(m.sender)
	let rad = 'https://telegra.ph/file/7051c993248276a1d4ce6.jpg'
    let time = db.data.users[m.sender].lasthunt + 1200000
		
	let areaPlayer = monsters.map(v => v.area)
    areaPlayer = areaPlayer[Math.floor(Math.random() * areaPlayer.length)]
	let area_monsters = monsters.filter(monster => { return monster.area === areaPlayer })
	let monster = area_monsters[Math.floor(Math.random() * area_monsters.length)]
	let monsterName = monster.name.toUpperCase()
    

	if (new Date -  global.db.data.users[m.sender].lasthunt > 1200000) {
		let sum = 10 * areaPlayer - 59
		let dmg = (player.sword  * 5 + player.armor * 5 - sum)
		dmg = dmg < 0 ? Math.abs(dmg) : 0
		let coins = areaPlayer * 700
		let exp = areaPlayer * 200

		player.healt -= dmg
		player.lasthunt = new Date * 1 // waktu hunt 2menit

		if (player.healt < 0) {
			let msg = `*${pname}* Anda Mati Di Bunuh Oleh *${monsterName}*`
			if (player.level > 0) {
				player.level -= 1
				msg += `\nLevel Anda Turun 1 Karena Mati Saat Berburu!`
			}
			player.healt = 100
			conn.sendBut(m.chat, msg, wm, 'Heal', '.heal' ,m)
			return
		}

		player.money += coins * 1
		player.exp += exp * 1

		let pesan = `*${pname}* Menemukan Dan Membunuh \n*${monsterName}🗡*\nMendapatkan *${new Intl.NumberFormat('en-US').format(coins)}* coins💰\nDan *${new Intl.NumberFormat('en-US').format(exp)}* XP\n\nBerkurang -${dmg}Hp\nTersisa *${player.healt}/${100}*❤`
		await conn.sendButtonLoc(m.chat, await (await fetch(rad)).buffer(), pesan, wm, 'Claim', '.daily', m)
	} else throw `Tunggu *${msToTime(time - new Date())}⏰* Untuk Berburu Lagi`
}

handler.help = ['hunt']
handler.tags = ['rpg']
handler.command = /^hunt/i

handler.disabled = false

handler.fail = null

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam " + minutes + " Menit " + seconds + " Detik"
}

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
  }
