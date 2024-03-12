const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s'
global.ig = '@remoon15_' // ubah aja
global.email = 'contactreonstore@gmail.com' //serah
global.region = 'Indonesia' // serah

global.noCreator = "6282142435092"
global.namaCreator = "Reon"
global.namastore = "Reon Store"
global.namaOwner = "Reon"
global.namabot = "Reon"
global.namaStore = 'Reon Store'
global.ownername = 'Reon' //ubah jadi nama mu, note tanda ' gausah di hapus!

global.owner = ['6282142435092'] // ubah aja pake nomor lu

global.dana = "6282142435092" //pake nope kalian bolee
global.ovo = "" //pake nope kalian bolee
global.gopay = "" //pake nope kalian bolee
global.shopeepay = "" //pake nope kalian bolee
global.linkig = "@remoon15_" // link ig lu
global.linkyt = "https://www.youtube.com/@remoon15" // link yt lu
global.linkgc = "https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s" // link gc lu
global.linktt = "@remoon1507" // link tiktok lu

global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location


global.botname = 'Reon Bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Reon' // ubah aja ini nama sticker
global.author = 'Sticker By Reon' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'reon' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false //ganti ke true buat on



//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})