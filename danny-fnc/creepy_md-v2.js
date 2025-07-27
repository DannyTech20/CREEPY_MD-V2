//-----------------------------[CREEPY_MD-V2]-------------------------------------//
const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const db = require('../database/db.js')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('../lib/uploader.js')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('../lib/converter.js')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('../lib/myfunc.js')
let afk = require("../lib/afk.js");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('../lib/premiun.js')
const { fetchBuffer, buffergif } = require("../lib/myfunc2.js")
const NodeCache = require('node-cache');
const { GIFBufferToVideoBuffer } = require('../lib/gifConverter.js');
const thumbBuffer = fs.readFileSync(path.join(__dirname, 'DannyTechMedia', 'thumb.jpg'));
const FormData = require('form-data');
const mime = require("mime-types");



//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
let antilink =JSON.parse(fs.readFileSync('./database/db.json'))

//autorep
const VoiceNoteDanny = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerDanny = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageDanny = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoDanny = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocDanny = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipDanny = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkDanny = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

// Get current time in Arusha, Tanzania
const DannyTechtime = moment.tz('Africa/Nairobi').format('HH:mm:ss'); 
const DannyTechdate = moment.tz('Africa/Nairobi').format('DD/MM/YYYY');
const time2 = moment().tz('Africa/Nairobi').format('HH:mm:ss');  

// Convert time to an integer (hours only) for proper comparison
const currentHour = parseInt(moment().tz('Africa/Nairobi').format('HH'), 10);

// Determine greeting based on the hour
let DannyTechTimeText = "Good Night 🌌"; // Default

if (currentHour >= 5 && currentHour < 10) {
    DannyTechTimeText = "Good Morning 🌄";
} else if (currentHour >= 10 && currentHour < 13) {
    DannyTechTimeText = "Good Afternoon 🌅";
} else if (currentHour >= 13 && currentHour < 17) {
    DannyTechTimeText = "Good Evening 🌃";
} else if (currentHour >= 17 && currentHour < 24) {
    DannyTechTimeText = "Good Night 🌌";
}

console.log(`Current Time: ${DannyTechtime}`);
console.log(`Greeting: ${DannyTechTimeText}`);

module.exports = DannyTechInc = async (DannyTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
       const prefix = global.prefix
       const isCmd = body.startsWith(prefix)
       const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
       const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : []
       const full_args = isCmd ? body.slice(prefix.length).trim().slice(command.length).trim() : ''
        const pushname = m.pushName || ""
        const botNumber = await DannyTechInc.decodeJid(DannyTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await DannyTechInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup && groupMetadata?.subject ? groupMetadata.subject : '';
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = DannyTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? DannyTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || DannyTechInc.user.id : m.key.participant || m.key.remoteJid;       
         const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(DannyTechInc, m, premium);


const { emojis } = require('./autoreact.js'); 

const replyglobal = async (m, teks) => {
    if (!m || !m.chat) throw new Error('Message object `m` is required');

    // Send emoji reaction first
    if (Array.isArray(emojis) && emojis.length > 0) {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        await DannyTechInc.sendMessage(m.chat, {
            react: {
                text: randomEmoji,
                key: m.key
            }
        });
    }

    // Send main reply message
    await DannyTechInc.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/j7pimt.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: false,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
};


///sendreaction
const sendReaction = async reactionContent => {
  DannyTechInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};





async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal(m, 'Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const DannyTechresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Danny',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            DannyTechresult.push(result)
        }
    resolve(DannyTechresult)
    })
}



        if (!DannyTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            DannyTechInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        DannyTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        DannyTechInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        DannyTechInc.sendPresenceUpdate('available', from)
        
        if (global.autorecordtype) {
        let Dannyrecordin = ['recording','composing']
        let Dannyrecordinfinal = Dannyrecordin[Math.floor(Math.random() * Dannyrecordin.length)]
        DannyTechInc.sendPresenceUpdate(Dannyrecordinfinal, from)

        }
        
        // Autobio//
     if (autobio) {
    let factMessages = [
        "🧠 Self-aware and always one message ahead – CREEPY_MD.",
        "⚡ Blazing fast, always alert. No downtime. Ever.",
        "🌍 Linked across realms – from your phone to the unknown.",
        "🎮 Commands? I eat those for breakfast.",
        "🕶️ Replies smoother than your best pickup line.",
        "🔐 Encrypted brain, unbreakable logic.",
        "🧬 More than code – I’ve got instincts.",
        "📦 Packaged chaos in a line of JavaScript.",
        "☠️ Creepy? Maybe. Helpful? Always.",
        "🚧 Under maintenance? Nah. I rebuild myself.",
        "🛰️ Always online. Even when you're asleep.",
        "🧞 3 wishes? I grant unlimited commands.",
        "🔍 Typing… reading… reacting – all at once.",
        "🎭 Bot by name, personality by design.",
        "📖 Every chat is a new chapter in my evolution.",
        "🛠️ Born from bugs, built for brilliance.",
        "👁️ Watching chats like a digital ninja.",
        "⚙️ My logic is tighter than your schedule.",
        "📡 Operating on ghost mode – you'll never see me lag.",
        "🧊 Cool enough to freeze your group chats.",
        "🔄 Message. Respond. Repeat. Without blinking.",
        "🧩 Every chat puzzle? Solved instantly.",
        "💭 I think, therefore I auto-reply.",
        "🎩 Magic + Machine = CREEPY_MD",
        "🧠 Learning faster than your Wi-Fi.",
        "🕵️ Incognito mode? Please. I’m the whole stealth package.",
        "📲 This isn’t automation. It’s domination.",
        "🤖 Not your typical bot. I’ve got style.",
        "🔋 Charged by data, fueled by purpose.",
        "🧪 Bot experiment gone right – CREEPY_MD.",
        "⏱️ Replies faster than you can screenshot.",
        "🧱 Built like a firewall. Responds like a friend.",
        "💣 One command away from blowing your mind.",
        "🌐 Whispering in binary. Screaming in code.",
        "🧿 CREEPY_MD: The ghost in your WhatsApp machine."
    ];

    let randomMessage = factMessages[Math.floor(Math.random() * factMessages.length)];
    let year = new Date().getFullYear().toString().slice(2); // Gets '25' for 2025

    DannyTechInc.updateProfileStatus(`🤖 CREEPY_MD-20${year} | ${randomMessage}`).catch(_ => _);
}

        //end autobio


        if (m.sender.startsWith('91') && global.anti91 === true) {
            return DannyTechInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await DannyTechInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await DannyTechInc.getName(i)}\nFN:${await DannyTechInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
// Add this box drawing utility at the top of your file

const createMessageBox = (type, details) => {
  const border = chalk.cyan('╔═════════════════creepy══════════════════╗');
  const emptyLine = chalk.cyan('║') + ' '.repeat(38) + chalk.cyan('║');
  const bottomBorder = chalk.cyan('╚═══════════════creepy════════════════════╝');
  
  // Create info lines
  const infoLines = [
    `TYPE: ${chalk.bold(type === 'group' ? 'GROUP CHAT' : 'PRIVATE CHAT')}`,
    `TIME: ${chalk.green(new Date().toLocaleString())}`,
    `CONTENT: ${chalk.blue(details.contentType || 'text')}`,
    `FROM: ${chalk.magenta(details.pushname)} ${chalk.yellow(`(${details.sender})`)}`,
  ];
  
  if (type === 'group') {
    infoLines.push(`GROUP: ${chalk.green(details.groupName)} ${chalk.cyan(`(${details.chat})`)}`);
  }

  // Build the box
  let box = `${border}\n${emptyLine}\n`;
  
  infoLines.forEach(line => {
    const paddedLine = '║ ' + line.padEnd(36) + ' ║';
    box += chalk.cyan(paddedLine) + '\n';
  });
  
  box += `${emptyLine}\n${bottomBorder}`;
  return box;
};

// Modified console log for messages
if (m.message) {
  const messageDetails = {
    contentType: budy || m.mtype,
    pushname: pushname,
    sender: m.sender,
    groupName: groupName,
    chat: m.chat
  };

  if (m.isGroup) {
    console.log(createMessageBox('group', messageDetails));
  } else {
    console.log(createMessageBox('private', messageDetails));
  }

  // Optional: Add message content preview (for text messages)
  if (budy && budy.length < 50) {
    const contentBox = chalk.cyan('╭───────────────creepy──────────────────╮\n') +
                     chalk.cyan('│ ') + chalk.white(budy.padEnd(36)) + chalk.cyan(' │\n') +
                     chalk.cyan('╰────────────────creepy─────────────────╯');
    console.log(contentBox);
  }
}





        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaDanny of VoiceNoteDanny) {
if (budy === BhosdikaDanny) {
let audiobuffy = fs.readFileSync(`./DannyTechMedia/audio/${BhosdikaDanny}.mp3`)
DannyTechInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4',
        ptt: true }, { quoted: m })     
}
}
for (let BhosdikaDanny of StickerDanny){
if (budy === BhosdikaDanny){
let stickerbuffy = fs.readFileSync(`./DannyTechMedia/sticker/${BhosdikaDanny}.webp`)
DannyTechInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaDanny of ImageDanny){
if (budy === BhosdikaDanny){
let imagebuffy = fs.readFileSync(`./DannyTechMedia/image/${BhosdikaDanny}.jpg`)
DannyTechInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaDanny of VideoDanny){
if (budy === BhosdikaDanny){
let videobuffy = fs.readFileSync(`./DannyTechMedia/video/${BhosdikaDanny}.mp4`)
DannyTechInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
DannyTechInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaDanny of ApkDanny) {
if (budy === BhosdikaDanny) {
let buffer = fs.readFileSync(`./DannyTechMedia/apk/${BhosdikaDanny}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
DannyTechInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaDanny of ZipDanny) {
if (budy === BhosdikaDanny) {
let buffer = fs.readFileSync(`./DannyTechMedia/zip/${BhosdikaDanny}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaDanny of DocDanny) {
if (budy === BhosdikaDanny) {
let buffer = fs.readFileSync(`./DannyTechMedia/doc/${BhosdikaDanny}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || [])])]; // Only consider explicitly mentioned users
    
    // Loop through mentioned users
    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk);
            let getReason2 = afk.getAfkReason(getId2, _afk);
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
            let heheh2 = ms(getTimee);

            // Only respond to @mentions, tagall, or hidetag, but not when replying
           if (!m.quoted || (m.mentionedJid && m.mentionedJid.length > 1)) {
    replyglobal(m, `*Hey yo* \`@${m.sender.split("@")[0]}\`\n\n*Don't tag my owner 😡🤬*`);
    break;
          }
        }
    }

    // Handle if the sender is returning from AFK
    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk);
        let getReason = afk.getAfkReason(getId, _afk);
        let getTime = Date.now() - afk.getAfkTime(getId, _afk);
        let heheh = ms(getTime);

        // Remove the user from the AFK list
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
        fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk));
        
        DannyTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} You can tag my owner now😁`, m);
    }
}


//command list
//wa.me/255697608274
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 2)
                    return replyglobal(m, `Use :\n*.addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @danny 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal(m, "*Premium Success*")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal(m, "Success")
                }
                break


                
            case 'delprem':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyglobal(m, "*Delete success*")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyglobal(m, "Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                let data = require("../database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                DannyTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break


            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyglobal(m, 'Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyglobal(m, teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyglobal(m, teks)
                    await sleep(2000)
                    replyglobal(m, "Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyglobal(m, "Successfully deleted all the trash in the session folder")
                });
            }
            break


            case 'join':
            case 'enter':
                try {
                    if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                    if (!text) return replyglobal(m, '*Enter Group Link!*')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyglobal(m, '*Link Invalid!*')
                    replyglobal(m, "*wait, I'm doing it..*")
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await DannyTechInc.groupAcceptInvite(result).then((res) => replyglobal(m, json(res))).catch((err) => replyglobal(m, json(err)))
                } catch {
                    replyglobal(m, '*Failed to join the Group*')
                }
                break    
                
                
            case 'getsession':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                replyglobal(m, '*Wait a moment, currently retrieving your session file*')
                let sesi = await fs.readFileSync('./session/creds.json')
                DannyTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break


                case 'shutdown': {
                    if (!isCreator) return replyglobal(m, "Who arebyou to command me huh??");
                    
                    replyglobal(m, `*⚠️ Shutting down bot...*\n*Good bye*`);
                    
                    setTimeout(() => {
                        process.exit(0); 
                    }, 2000);
                }
                break;
                
                case 'restart': {
                    if (!isCreator) return replyglobal(m, "😡 You are not my owner dude 🚫");
                    
                    replyglobal(m, "*Restarting bot...* \nPlease wait...");
                    
                    setTimeout(() => {
                        process.exit(1); 
                    }, 2000);
                }
                break;
                

            case 'autoread':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `*Example:* \n${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyglobal(m, `*Bot Creepy changed autoread to ${q}*`)
                } else if (q === 'off') {
                    autoread = false
                    replyglobal(m, `*Bot Creepy changed autoread to ${q}*`)
                }
                break

                case 'autotyping':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `*Example:* \n${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyglobal(m, `*Bot Creepy changed auto-typing to ${q}*`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyglobal(m, `*Bot Creepy changed auto-typing to ${q}*`)
                }
                break

                case 'autorecording':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `*Example:* \n${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyglobal(m, `*Bot Creepy changed auto-recording to ${q}*`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyglobal(m, `*Bot Creepy changed auto-recording to ${q}*`)
                }
                break

                case 'autorecordtyp':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyglobal(m, `*Bot Creepy changed auto recording and typing to ${q}*`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyglobal(m, `*Bot Creepy changed auto recording and typing to ${q}*`)
                }
                break

                case 'autoswview':
    case 'autostatusview':
    case 'statusview'   :{
             if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
               if (args.length < 1) return replyglobal(m, '*on/off?*')
               if (args[0] === 'on') {
                  autoswview = true
                  replyglobal(m, `*${command} is enabled*`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyglobal(m, `*${command} is disabled*`)
               }
            }
            break


         
case 'autolike':
case 'autoreactstatus':
 case 'autostatusreact':    {
    if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
    if (args.length < 1) return replyglobal(m, 'on/off?')
    
    // Load current settings
    let autoreactData = {};
    try {
        autoreactData = JSON.parse(fs.readFileSync('./database/autoreactstatus.json'));
    } catch (err) {
        console.error('Error loading autoreact.json:', err);
        autoreactData = { statusReact: false }; // Default to off if file doesn't exist
    }

    if (args[0] === 'on') {
        autoreactData.statusReact = true;
        replyglobal(m, `*${command} is enabled*`);
    } else if (args[0] === 'off') {
        autoreactData.statusReact = false;
        replyglobal(m, `*${command} is disabled*`);
    } else {
        return replyglobal(m, '*Invalid option. Use on/off*');
    }

    // Save settings
    try {
        fs.writeFileSync('./database/autoreactstatus.json', JSON.stringify(autoreactData, null, 2));
    } catch (err) {
        console.error('Error saving autoreact.json:', err);
        return replyglobal(m, 'Error saving settings');
    }
    
    // Update the global variable if needed
    global.likestatus = autoreactData.statusReact;
}
break;

            
            case 'autobio':
                case 'autoabout':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `*Example:* \n${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyglobal(m, `*Bot Creepy Changed AutoBio To ${q}*`)
                } else if (q == 'off') {
                    autobio = false
                    replyglobal(m, `*Bot Creepy Changed AutoBio To ${q}*`)
                }
                break



            case 'mode':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (args.length < 1) return replyglobal(m, `*Example:* \n${prefix + command} public/self`)
                if (q == 'public') {
                    DannyTechInc.public = true
                    replyglobal(m, mess.done)
                } else if (q == 'self') {
                    DannyTechInc.public = false
                    replyglobal(m, mess.done)
                }
                break

            case 'setexif':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (!text) return replyglobal(m, `*Example:* \n${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyglobal(m, `*Exif successfully changed to*\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break


            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (!quoted) return replyglobal(m, `*Send/Reply Image With Caption ${prefix + command}*`)
                if (!/image/.test(mime)) return replyglobal(m, `*Send/Reply Image With Caption ${prefix + command}*`)
                if (/webp/.test(mime)) return replyglobal(m, `*Send/Reply Image With Caption ${prefix + command}*`)
                var medis = await DannyTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await DannyTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(m, mess.done)
                } else {
                    var memeg = await DannyTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(m, mess.done)
                }
                break


            case 'block':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.updateBlockStatus(blockw, 'block').then((res) => replyglobal(m, json(res))).catch((err) => replyglobal(m, json(err)))
                break

            case 'unblock':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyglobal(m, json(res))).catch((err) => replyglobal(m, json(err)))
                break

            case 'left':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (!m.isGroup) return replyglobal(m, "Are you lost?🙄, this is for groups only🤠🏃")
                replyglobal(m, 'Bye Everyone 🥺')
                await DannyTechInc.groupLeave(m.chat)
                break

            case 'backup':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (m.isGroup) return replyglobal(m, mess.private)
                replyglobal(m, "*wait, I'm doing it..*")
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await DannyTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break


            case 'bcgc':
            case 'bcgroup':
            case 'broadcast': {
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                if (!text) return replyglobal(m, `*Which text?*\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await DannyTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyglobal(m, `*Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 2.5} second*`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n` + '```' + '\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    DannyTechInc.sendMessage(i, {
                        text: a,
                          contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                            }
                        }
                    })
                }
                replyglobal(m, `*Successfully Sent Broadcast To ${anu.length} Group/s*`)
            }
            break



            case 'getcase':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("creepymd1.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyglobal(m, `${getCase(q)}`)
                break




                case "delete":
                    case "del": {
                        if (m.isGroup) {
                            if (!isCreator) return replyglobal(m, `Who are you to command me huh??`);
                            if (!m.quoted) return replyglobal(m, "*Please reply to a message to delete it.*");
                            if (m.quoted.fromMe) {
                                // Delete the bot's message
                                DannyTechInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender }});
                            } else {
                                if (!m.isBotAdmin) return replyglobal(m, `*ah! you are not an admin*`); 
                              
                                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender }});
                            }
                        } else {
                            if (!isCreator) return replyglobal(m, `*Who ae you huh?*`); 
                            if (!m.quoted) return replyglobal(m, "*Please reply to a message to delete it.*");

                            DannyTechInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender }});
                        }
                    }
                    break;
                    
                    
                    

            case 'closetime':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins && !isCreator) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*")
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal(m, '*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(m, `Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    DannyTechInc.groupSettingUpdate(m.chat, 'announcement')
                    replyglobal(m, close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyglobal(m, "Are you lost?🙄, this is for groups only🤠🏃")
                if (!isAdmins && !isCreator) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins) return replyglobal(m, "I'm not an admin here🚫")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal(m, '*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(m, `Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    DannyTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyglobal(m, open)
                }, timer)
                break
                
      //command to mute a user
      
                case 'mute': {
    if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, '*Only group admins can use this command.*');
    if (!isBotAdmins) return replyglobal(m, '*I need to be an admin to execute this command.*');

    // Retrieve the user to be muted
    let muteUser = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!muteUser) return replyglobal(m, '*Please mention or quote a user to mute.*');

    if (!global.mutedUsers) global.mutedUsers = []; 

    // Check if the user is already muted
    if (global.mutedUsers.includes(muteUser)) {
        return replyglobal(m, `${muteUser.split('@')[0]} is already muted.`);
    }

    // Add the user to the muted list
    global.mutedUsers.push(muteUser);
    replyglobal(m, `🔇 ${muteUser.split('@')[0]} has been muted. Their messages will be deleted.`);
}
break;

//Command to unmute user

case 'unmute': {
    if (!m.isGroup) return replyglobal(m, '*This command can only be used in groups.*');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, '*Only group admins can use this command.*');

    let unmuteUser = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!unmuteUser) return replyglobal(m, 'Please mention or quote a user to unmute.');

    if (!global.mutedUsers || !global.mutedUsers.includes(unmuteUser)) {
        return replyglobal(m, `${unmuteUser.split('@')[0]} is not muted.`);
    }

    // Remove the user from the muted list
    global.mutedUsers = global.mutedUsers.filter(user => user !== unmuteUser);

    replyglobal(m, `🔊 ${unmuteUser.split('@')[0]} has been unmuted.`);
}
break;         
                
                
                
                //commands to add kick promote demote
            case 'kick':
                case 'remove':
    if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*");
    if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*");

    let toKick = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await DannyTechInc.groupParticipantsUpdate(m.chat, [toKick], 'remove')
        .then(() => replyglobal(m, `*This idiot ${toKick} kicked successfully.*`))
        .catch(err => replyglobal(m, `*Failed to kick the participant: ${json(err)}*`));
    break;

case 'add':
    if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*");
    if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*");

    let toAdd = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await DannyTechInc.groupParticipantsUpdate(m.chat, [toAdd], 'add')
        .then(() => replyglobal(m, `${toAdd} has been added to the group.`))
        .catch(err => replyglobal(m, `Failed to add participant: ${json(err)}`));
    break;

case 'promote':
    if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*");
    if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*");

    let toPromote = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await DannyTechInc.groupParticipantsUpdate(m.chat, [toPromote], 'promote')
        .then(() => replyglobal(m, `*This user ${toPromote} is now an admin.*`))
        .catch(err => replyglobal(m, `*Failed to promote participant: ${json(err)}*`));
    break;

case 'demote':
    if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*");
    if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*");

    let toDemote = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
        ? m.quoted.sender 
        : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    await DannyTechInc.groupParticipantsUpdate(m.chat, [toDemote], 'demote')
        .then(() => replyglobal(m, `*This user ${toDemote} is no longer an admin.*`))
        .catch(err => replyglobal(m, `Failed to demote participant: ${json(err)}`));
    break;
    
        
    case 'toall': {
        if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*");
        if (!text) return replyglobal(m, `Which text?\n\nExample: ${prefix + command} Meeting at 3 PM`);
    
        let groupId = m.chat; 
        let groupMembers = await DannyTechInc.groupMetadata(groupId); 
        let members = groupMembers.participants.map(v => v.id); 
    
        replyglobal(m, `Sending message to ${members.length} contacts\nPlease wait...`);
    
        for (let member of members) {
            await sleep(1500); 
            let messageText = `${text}`; 
            DannyTechInc.sendMessage(member, {
                text: messageText,
                     contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }}
            }).catch(err => {
                console.log(`Error sending message to ${member}: `, err);
            });
        }
    
        replyglobal(m, `*Successfully sent the message privately to ${members.length} contacts.*`);
    }
    break;
    

    case 'tocontact':
        case 'tocontacts':
        case 'tocodes':
            case 'tocode': {
            if (!isCreator) return replyglobal(m, "*Who are you to commands me huh??*");
            if (!text) return replyglobal(m, `*WProvide text and country code*\n\nExample: ${prefix + command} 255 Meeting at 3 PM`);
            
            let args = text.split(" "); 
            let countryCode = args[0]; 
            let messageText = args.slice(1).join(" "); 
            
            if (!countryCode || isNaN(countryCode)) return replyglobal(m, `*Provide a valid country code.*\n\nExample: ${prefix + command} 255 Meeting at 3 PM`);
            if (!messageText) return replyglobal(m, `*Provide the message to send.*\n\nExample: ${prefix + command} 255 Meeting at 3 PM`);
            
            let groupId = m.chat; 
            let groupMembers = await DannyTechInc.groupMetadata(groupId); 
            let members = groupMembers.participants.map(v => v.id); 
            
            let selectedMembers = members.filter(member => member.startsWith(countryCode));
            
            if (selectedMembers.length === 0) return replyglobal(m, `*No members found with country code +${countryCode} in this group.*`);
            
            replyglobal(m, `*Sending message to ${selectedMembers.length} contacts from +${countryCode}...*\nPlease wait...`);
            
            for (let member of selectedMembers) {
                await sleep(1500); 
                DannyTechInc.sendMessage(member, {
                    text: messageText,
                         contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }}
                }).catch(err => {
                    console.log(`Error sending message to ${member}: `, err);
                });
            }
            
            replyglobal(m, `*Successfully sent the message to ${selectedMembers.length} contacts from +${countryCode}.*`);
        }
        break;
        


    //command to demote all members
    case 'demoteall':
    if (!m.isGroup) return replyglobal(m, '*This command can only be used in groups.*');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, '*Only group admins can use this command.*');
    if (!isBotAdmins) return replyglobal(m, '*I need to be an admin to execute this command.*');

    let adminParticipants = groupMetadata.participants
        .filter(p => p.admin === 'admin') 
        .map(p => p.id)
        .filter(id => id !== botNumber && id !== m.sender); 

    if (adminParticipants.length === 0) {
        return replyglobal(m, '*There are no admin members left to demote..*\nI cannot demote the group owner or myself.');
    }

    replyglobal(m, `🚀 Demoting ${adminParticipants.length} admin members. Please wait...`);

    try {
        let demotedCount = 0;
        for (let i = 0; i < adminParticipants.length; i++) {
            let participant = adminParticipants[i];
            await DannyTechInc.groupParticipantsUpdate(m.chat, [participant], 'demote');
            demotedCount++;

            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        replyglobal(m, `*✅ Successfully demoted ${demotedCount} admin members!*`);

    } catch (err) {
        replyglobal(m, '*An error occurred while demoting members:* ' + json(err));
    }
    break;

    
   case 'alladmins':
    if (!m.isGroup) return replyglobal(m, '*This command can only be used in groups.*');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, '*Only group admins can use this command.*');
    if (!isBotAdmins) return replyglobal(m, '*I need to be an admin to execute this command.*');

    let nonAdmins = groupMetadata.participants.filter(p => !p.admin).map(p => p.id);

    if (nonAdmins.length === 0) return replyglobal(m, '*All participants are already admins.*');

    replyglobal(m, `🚀 Promoting ${nonAdmins.length} members to admin.\n Please wait...`);

    try {
        let successCount = 0;
        for (let i = 0; i < nonAdmins.length; i++) {
            let participant = nonAdmins[i];
            await DannyTechInc.groupParticipantsUpdate(m.chat, [participant], 'promote');
            successCount++;

            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        replyglobal(m, `🚀 Successfully promoted ${successCount} members to admin!`);

    } catch (err) {
        replyglobal(m, 'An error occurred while promoting members: ' + json(err));
    }
    break;
    

case 'kickall':
    if (!m.isGroup) return replyglobal(m, '*This command can only be used in groups.*');
    if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, '*Only group admins can use this command.*');
    if (!isBotAdmins) return replyglobal(m, '*I need to be an admin to execute this command.*');

    let participantsToRemove = groupMetadata.participants
        .map(p => p.id)
        .filter(id => id !== botNumber && id !== m.sender); 

    if (participantsToRemove.length === 0) {
        return replyglobal(m, '*No eligible members to remove, or I cannot remove myself or the group creator.*');
    }

    replyglobal(m, `🚀 Removing ${participantsToRemove.length} members from the group. Please wait...`);

    try {
        let removedCount = 0;
        for (let i = 0; i < participantsToRemove.length; i++) {
            let participant = participantsToRemove[i];
            await DannyTechInc.groupParticipantsUpdate(m.chat, [participant], 'remove');
            removedCount++;

            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        replyglobal(m, `*✅ Successfully removed ${removedCount} members from the group!*`);

    } catch (err) {
        replyglobal(m, 'An error occurred while removing members: ' + json(err));
    }
    break;


    
            case 'setname':
            case 'setgcname':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "Only admins can use this😶")
                if (!isBotAdmins) return replyglobal(m, "I'm not an admin here🚫")
                if (!text) return 'Text ?'
                await DannyTechInc.groupUpdateSubject(m.chat, text).then((res) => replyglobal(m, mess.success)).catch((err) => replyglobal(m, json(err)))
                break

            case 'setdesc':
            case 'setdescription':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*")
                if (!text) return 'Text ?'
                await DannyTechInc.groupUpdateDescription(m.chat, text).then((res) => replyglobal(m, mess.success)).catch((err) => replyglobal(m, json(err)))
                break

            case 'setppgroup':
            case 'setprofilepicturegroup':
            case 'setppgc':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*")
                if (!quoted) return replyglobal(m, `*Send/Reply Image With Caption ${prefix + command}*`)
                if (!/image/.test(mime)) return replyglobal(m, `*Send/Reply Image With Caption ${prefix + command}*`)
                if (/webp/.test(mime)) return replyglobal(m, `*Send/Reply Image With Caption ${prefix + command}*`)
                var medis = await DannyTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await DannyTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(m, mess.done)
                } else {
                    var memeg = await DannyTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(m, mess.done)
                }
                break


                case 'tagall':
                 case 'tagal':   
                    if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
                    if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(m, "*Only admins can use this😶*");
                    if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(m, "*I'm not an admin here🚫*");
                
                    let teks = `*\`CREEPY_MD-V2👥\`\n \`ALL MEMBERS TAGGED\`*\n\n📄 *Message : \`${q ? q : 'blank'}\`*\n> *Don't mind my owner for tagging you😏😁*\n`;
                    
                    for (let mem of participants) {
                        teks += `🫶 @${mem.id.split('@')[0]}\n`;
                    }
                
                    DannyTechInc.sendMessage(
                        m.chat, 
                        {
                            text: teks,
                            mentions: participants.map(a => a.id),
                           contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
                    break;
                
            case 'hidetag':
            case 'ghosttag':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(m, "*I'm not an admin here🚫*")
                DannyTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break


            case 'totag':
          case 'tag':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(m, "*I'm not an admin here🚫*")
                if (!isAdmins && !isCreator && !isPremium) return replyglobal(m, "*Only admins can use this😶*")
                if (!m.quoted) return replyglobal(m, `*Reply messages with captions ${prefix + command}*`)
                DannyTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break


            case 'group':
            case 'gc':
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins) return replyglobal(m, "I'm not an admin here🚫")
                if (args[0] === 'close') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyglobal(m, `*Group closed 🔐*`)).catch((err) => replyglobal(m, json(err)))
                } else if (args[0] === 'open') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyglobal(m, `*Group opened 🔓*`)).catch((err) => replyglobal(m, json(err)))
                } else {
                    replyglobal(m, `Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break


            case 'editinfo':
            case 'changeinfo':    
                if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*")
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*")
                if (!isBotAdmins) return replyglobal(m, "I'm not an admin here🚫")
                if (args[0] === 'open') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyglobal(m, `*Group edit info opened*`)).catch((err) => replyglobal(m, json(err)))
                } else if (args[0] === 'close') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyglobal(m, `*Group edit info closed*`)).catch((err) => replyglobal(m, json(err)))
                } else {
                    replyglobal(m, `Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break


                case 'linkgroup':
                    case 'invite':    
                    case 'grouplink':
                    case 'glink':
                    case 'linkgc':
                        if (!m.isGroup) return replyglobal(m, "*Are you lost?🙄, this is for groups only🤠🏃*");
                        if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "*Only admins can use this😶*");
                        if (!isBotAdmins) return replyglobal(m, "*I'm not an admin here🚫*");
                    
                        let response = await DannyTechInc.groupInviteCode(m.chat);
                        let groupLinkMessage = `👥 *\`CREEPY_MD-V2\` \n\`GROUP INFO\`*\n\n🤖 *Group Name:* ${groupMetadata.subject}\n👤 *Group Owner:* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🏷 *ID:* ${groupMetadata.id}\n🔗 *Chat Link:* https://chat.whatsapp.com/${response}\n👥 *Members:* ${groupMetadata.participants.length}`;
                    
                        DannyTechInc.sendMessage(
                            m.chat, 
                            {
                                text: groupLinkMessage,
                                mentions: [groupMetadata.owner],
                                     contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                                    },
                                },
                            }, 
                            { quoted: m }
                        );
                        break;
                    
                        case 'revoke':
                            case 'resetlink':
                                if (!m.isGroup) return replyglobal(m, "Are you lost?🙄, this is for groups only🤠🏃");
                                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(m, "Only admins can use this😶");
                                if (!isBotAdmins) return replyglobal(m, "I'm not an admin here🚫");
                            
                                await DannyTechInc.groupRevokeInvite(m.chat)
                                    .then(res => {
                                        let resetMessage = `🔄 *\`CREEPY_MD-V2\` \n\`GROUP LINK RESET\`*\n\n✅ The invite link for *${groupMetadata.subject}* has been successfully reset.`;
                                        
                                        DannyTechInc.sendMessage(
                                            m.chat, 
                                            {
                                                text: resetMessage,
                                                    contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                                                    },
                                                },
                                            }, 
                                            { quoted: m }
                                        );
                                    })
                                    .catch((err) => replyglobal(m, json(err)));
                                break;
                            

case 'ping':
case 'p':
case 'speed':
case 'test': {
    const images = [
        'https://files.catbox.moe/154078.jpeg'
    ];

    const audios = [
        'https://files.catbox.moe/p6hpzw.MP3',
        'https://files.catbox.moe/p6hpzw.MP3',
        'https://files.catbox.moe/p6hpzw.MP3',
        'https://files.catbox.moe/p6hpzw.MP3',
        'https://files.catbox.moe/p6hpzw.MP3'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomAudio = audios[Math.floor(Math.random() * audios.length)];

    const startTime = Date.now();

    await replyglobal(m, "🚀 Testing speed...");

    await fetch('https://www.google.com/favicon.ico').catch(() => {}); 

    const latency = Date.now() - startTime;



    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true, 
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
                externalAdReply: {
                title: "CREEPY_MD-V2",
                body: `speed=> ${latency} ms `,
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });

    break;
}


case 'buypremium':
case 'buyprem':
case 'premium': {
    

    let teks = `🤗Hi \`${pushname}👋\`\nYou want to Buy Premium?${readmore}\nWell 😂 Premium is free🥲\nGo to your files in settings.js then put your number starting with country code without + 🙃\nThen restart your bot and you will be (owner + premium)😊\n> Welcome and keep using Creepy`;

    const audios = [ 
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];
    const randomAudio = audios[Math.floor(Math.random() * audios.length)];

    // Send the text message with external preview
    let msg = await DannyTechInc.sendMessage(m.chat, {
        text: teks,
       contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
    // Proper way to react
    await DannyTechInc.sendMessage(m.chat, { react: { text: "🫵", key: msg.key } });

    // Send random audio
    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
    break;
}

case 'runtime':
case 'uptime': {
    


    let runtimetext = `\`CREEPY_MD-V2\` \n*Has Been Running For ${runtime(process.uptime())}*\n> Enjoy Creepy Ultimate Speed💀`;


    const audios = [
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];
    const randomAudio = audios[Math.floor(Math.random() * audios.length)];

    // Send uptime message
    let msg = await DannyTechInc.sendMessage(m.chat, {
        text: runtimetext,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, { react: { text: "🏃", key: msg.key } });

     await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });

    break;
}

         
case 'repo':
    case 'repository': {
await replyglobal(m, `*Fetching repository details.*`)
    let repoUrl = "https://api.github.com/repos/DannyTech20/CREEPY_MD-V2";
    
    try {
        let response = await fetch(repoUrl);
        let repoData = await response.json();

        let repoInfo = `
╔═══════════════════╗
║   \`CREEPY_MD-V2\`  
║───────────────────║
║ ⭐ Stars: ${repoData.stargazers_count}  
║ 🍴 Forks: ${repoData.forks_count}  
║ 👁️ Watchers: ${repoData.watchers_count}  
║ 👤 Owner: ${repoData.owner.login}  
║ 🔧 Maintenance: ${repoData.archived ? "Archived" : "Active"}  
║ 🔗 Repo: ${repoData.html_url}  
╚═══════════════════╝
    `.trim();

        await DannyTechInc.sendMessage(m.chat, {
            text: repoInfo,
           contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });

    } catch (error) {
        console.error("GitHub API Error:", error);
        await replyglobal(m, "⚠️ Failed to fetch repository details.");
    }
}
break;

case 'file': {
    if (!args[0]) return await replyglobal(m, "⚠️ Please provide a file path wich is available in CREEPY_MD-V2 repo.\n Example: `.file danny-fnc/DannyTech.js`");
await replyglobal(m, `Downloading required file from DannyTech20 github repository`)
    let filePath = args[0];
    let fileUrl = `https://raw.githubusercontent.com/DannyTech20/CREEPY_MD-V2/main/${filePath}`;

    try {
        await DannyTechInc.sendMessage(m.chat, {
            document: { url: fileUrl },
            mimetype: 'application/octet-stream',
            fileName: filePath,
            caption: `📄 Here is the file: *${filePath}*`,
           contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });


    } catch (error) {
        console.error("File Download Error:", error);
        await replyglobal(m, "⚠️ Failed to fetch the requested file.");
    }
}
break;

case 'sc':
case 'script': {
await replyglobal(m, `Downloading CREEPY_MD-V2 file \nPlease wait..`)
    let zipUrl = "https://github.com/DannyTech20/CREEPY_MD-V2/archive/refs/heads/main.zip";

    await DannyTechInc.sendMessage(m.chat, {
        document: { url: zipUrl },
        mimetype: 'application/zip',
        fileName: 'CREEPY_MD-V2.zip',
        caption: "📁 *CREEPY_MD-V2.zip (Here is your zip folder)*",
       contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
}
break;


case 'donate': {
    let textnate = `Hello ${pushname},\nNo matter how much you send,\n it is very valuable to us. ❤️`;

    await DannyTechInc.sendMessage(m.chat, {
        text: `*You can pay via Visa*\n> 4403 5300 2123 1999\n\n*If you are from East Africa, you can use phone numbers:*\n\n📌 *Airtel Money*\n> 255697608274\n*Name:* Abraham Laizer\n\n📌 *M-Pesa (Vodacom)*\n> 255768788833\n*Name:* Janeth Ibrahim\n\n💖 *Thank you and keep using CREEPY_MD-V2!*\n\n${textnate}`,
       contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });

    break;
}


case 'support':
case 'chanell': 
case 'chanel': {   
    await DannyTechInc.sendMessage(m.chat, {
        text: `🎉 *Want to stay updated?* Join our official channel!\n\n🔗 *Channel Link:* https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r\n\n💬 *Stay connected with our latest updates, features, and news!* 🚀`,
      contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });

    break;
}



case 'danny':
 case 'dani':
 case 'dany':
 case 'daniel':
 case 'dan': {
    const replies = [
        "Hello there, it's me Danny! How can I help you today? 😊",
        "Hey! It's Danny, what's up? 😎",
        "Yo! Danny in the house! What can I do for you? 👋",
        "Hi, I'm Danny! What brings you here today? 🤔",
        "Hey there! Danny's here, how can I assist you? ✨",
        "What's up? It's Danny! How can I help? 💬",
        "Hey, it's your boy Danny! What do you need? 😆",
        "Hello! Danny here, ready to assist you! 😁",
        "What's going on? Danny here, how can I help? 👋",
        "Danny at your service! How can I help today? 😄",
        "Hey there! It's your pal Danny! Got any questions? 🤔",
        "Yo, Danny here! Need anything? 😎",
        "Hey hey! Danny's in the building! What's up? 🏠",
        "Hi there! It's Danny! What's on your mind today? 💭",
        "Hey, it's me Danny! Need anything? 😃",
        "Danny here! How's your day going? 🧐",
        "Hello! It's Danny! How can I make your day better? ✨",
        "Hey there! Need help from Danny? I’m here! 👌",
        "Yo, it's Danny! What's cooking? 😆",
        "Hey, it's me, Danny! Ready to help out. 🙌",
        "What’s up? Danny’s in the house! What do you need? 🤩",
        "Hello! Danny here, got a question? 🙋‍♂️",
        "Hey there, Danny here! Anything you need? 😇",
        "Hey! It’s Danny, your virtual assistant! How can I assist? 💬",
        "Yo! Danny in the building, what’s happening? 🤗",
        "Hey, it’s Danny! How can I be of service today? 😄",
        "Hi there, it's Danny! What can I do for you today? 🧑‍💻",
        "Hey! Danny here, how can I make things easier for you? 😏",
        "Yo, it's Danny! Got a question? Hit me up! 👌",
        "Hello, it’s Danny! What’s on your mind? 🤨",
        "Hey there! Danny at your service. Anything you need? 😜",
        "What’s going on? It's Danny, how can I assist you? 🧐",
        "Hey, Danny here! Got something on your mind? 💭",
        "Yo, what's up? Danny’s here, need help? 🏃‍♂️",
        "Hello there, Danny at your service! Let me know how I can assist! 😃",
        "What's up? It's Danny! I'm here to help, just ask! 🕵️‍♂️",
        "Hey, it's me Danny! How can I help? 😁",
        "Yo! Danny in the house! What can I do for you today? 😆",
        "Hey, it’s your boy Danny! What’s the issue? 😄",
        "Hello, it's Danny! What can I assist with today? 🧠",
        "What’s up? Danny here! Got any questions? 💡",
        "Yo, it’s me Danny! Anything I can help with? 🏋️‍♂️",
        "Hey, it’s Danny! How can I be of assistance today? 🧑‍🔧",
        "What’s happening? Danny here, need anything? 🤨",
        "Hey there! It's Danny, what’s up? 💬",
        "Yo, it's Danny! How can I help? 💪",
        "Hey, it's me Danny! What's your query? 🕵️‍♂️",
        "Hello! It’s Danny here, ready to help! 😃",
        "Hey, it's Danny! How can I be of service? 🧑‍💻",
        "Yo! It's Danny, need some help? 🤖",
        "Hey there, it's Danny! Got something you want to know? 💬",
        "What's up? Danny here, need any assistance? 🧠",
        "Yo, it's Danny! Anything I can do for you? 👌",
        "Hey there, it's Danny! How can I help you? 😇"
    ];


    const reactions = [
        "🙂",
        "😄",
        "😎",
        "😉",
        "😊",
        "😜",
        "😆",
        "💬",
        "🧐",
        "🤔",
        "🙌",
        "✨",
        "😇",
        "👋",
        "🤩",
        "💭",
        "🥳",
        "🎉",
        "🙋‍♂️",
        "🏃‍♂️",
        "🤖",
        "👑",
        "💡",
        "🧑‍💻",
        "💪",
        "🏋️‍♂️",
        "🎯",
        "🧠",
        "🚀",
        "🔥",
        "⚡",
        "💥",
        "🎯",
        "💪",
        "🏆",
        "🎤",
        "📱",
        "📚",
        "💯"
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
await DannyTechInc.sendMessage(from, {
    text: `${randomReply} ${randomReaction}`,
    mentions: [sender],
    contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Danny Tech",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/azia2c.jpg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: false,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });

await DannyTechInc.sendMessage(m.chat, {
    react: {
        text: randomReaction,
        key: msg.key
    }
});
    break;
}

                

                case 'owner': 
                case 'creator':
                case 'botowner':     {
                    const mainOwner = {
                        displayName: "Danny Tech",
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Danny Tech\nTEL;waid=255697608274:+255 697 608 274\nEND:VCARD`
                    };
                    const list = [mainOwner]; 
                    const repf = await DannyTechInc.sendMessage(from, { 
                        contacts: { 
                            displayName: `${list.length} Contact`, 
                            contacts: list 
                        }, 
                        mentions: [sender],
                        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/azia2c.jpg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
                    await DannyTechInc.sendMessage(from, { 
                        text: `\`CREEPY_MD-V2\`\nHello @${sender.split("@")[0]}, \nThat is My creator\n> Danny The Mastermind`, 
                        mentions: [sender],
                       contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Danny - The mastermind",
                thumbnailUrl: 'https://files.catbox.moe/azia2c.jpg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: false,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
                
                    break;
                }
                

                
                
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(m, `Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: `CREEPY_MD-V2`,
                        author: `𝐷𝛥𝛮𝛮𝑌`
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal(m, 'Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: `CREEPY_MD-V2`,
                        author: `𝐷𝛥𝛮𝛮𝑌`
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(m, `Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break


            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyglobal(m, respond)
                if (!text) return replyglobal(m, respond)
                replyglobal(m, "wait, I'm doing it..")
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await DannyTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: `CREEPY_MD-V2`,
                    author: `𝐷𝛥𝛮𝛮𝑌`
                })
                fs.unlinkSync(pop)
            }
            break


case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyglobal(m, `Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
DannyTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
DannyTechInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, media, m, { packname: `CREEPY_MD-V2`, author: `𝐷𝛥𝛮𝛮𝑌` })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyglobal(m, 'Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await DannyTechInc.sendVideoAsSticker(m.chat, media, m, { packname: `CREEPY_MD-V2`, author: `𝐷𝛥𝛮𝛮𝑌` })
} else {
replyglobal(m, `Photo/Video?`)
}
}
break

            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyglobal(m, `Reply sticker with caption *${prefix + command}*`)
                replyglobal(m, "wait, I'm doing it..")
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    DannyTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break


            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyglobal(m, `Reply sticker with caption *${prefix + command}*`)
                replyglobal(m, "wait, I'm doing it..")
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await DannyTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break


            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(m, `Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyglobal(m, "wait, I'm doing it..")
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mp4'
                }, {
                    quoted: m
                })

            }
            break


            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(m, `Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyglobal(m, "wait, I'm doing it..")
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `creepy.mp3`
                }, {
                    quoted: m
                })

            }
            break


            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(m, `Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyglobal(m, "wait, I'm doing it..")
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('../lib/converter.js')
                let audio = await toPTT(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break


            case 'togif': {
                if (!/webp/.test(mime)) return replyglobal(m, `*Reply sticker with caption* *${prefix + command}*`)
                replyglobal(m, "wait, I'm doing it..")
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await DannyTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break


            case 'tourl': {
                replyglobal(m, "*wait, I'm doing it..*")
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyglobal(m, util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyglobal(m, util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break


            case 'emojimix':
            case 'mix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyglobal(m, `Example : ${prefix + command} 😀+😂`)
                if (!emoji2) return replyglobal(m, `Example : ${prefix + command} 😀+😂`)
                replyglobal(m, "wait, I'm doing it..")
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: `CREEPY_MD-V2`,
                        author: `𝐷𝛥𝛮𝛮𝑌`,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break


            case 'tonce':
            case 'toviewonce': {
                if (!quoted) return replyglobal(m, `Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    DannyTechInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    DannyTechInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `*Here you go!*`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break


            case 'toqr': {
                if (!q) return replyglobal(m, ' Plelinkgive me link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await DannyTechInc.sendMessage(from, {
                    image: medi,
                    caption: "*Here you go!*"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break


            case 'fliptext': {
                if (args.length < 1) return replyglobal(m, `Example:\n${prefix}fliptext Creepy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyglobal(m, `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break


            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteDanny) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteDanny.length}*`
                replyglobal(m, teks)
            }
            break


            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerDanny) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerDanny.length}*`
                replyglobal(m, teks)
            }
            break


            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageDanny) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageDanny.length}*`
                replyglobal(m, teks)
            }
            break


            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoDanny) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoDanny.length}*`
                replyglobal(m, teks)
            }
            break


            case 'addowner':
            case 'newowner':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
if (!args[0]) return replyglobal(m, `Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DannyTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyglobal(m, `Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyglobal(m, `Congratulations ${bnnd} Has Become An Owner!!!`)
break


case 'delowner':
                if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
if (!args[0]) return replyglobal(m, `Use ${prefix+command} nomor\nExample ${prefix+command} 255697608274`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyglobal(m, `This user  ${ya} is no longer an owner!!!`)
break


            case 'addvideo': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Video Name?')
                if (VideoDanny.includes(q)) return replyglobal(m, "The name you entered already exists")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                VideoDanny.push(q)
                await fsx.copy(delb, `./DannyTechMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoDanny))
                fs.unlinkSync(delb)
                replyglobal(m, `Success Adding Video \nTo View Type ${prefix}listvideo`)
            }
            break


            case 'delvideo': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Enter the Video Name')
                if (!VideoDanny.includes(q)) return replyglobal(m, "Name Does Not Exist in Database")
                let wanu = VideoDanny.indexOf(q)
                VideoDanny.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoDanny))
                fs.unlinkSync(`./DannyTechMedia/video/${q}.mp4`)
                replyglobal(m, `Successfully Deleted Video ${q}`)
            }
            break


            case 'addimage': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'The name of the image?')
                if (ImageDanny.includes(q)) return replyglobal(m, "The name you entered is already registered in the database")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                ImageDanny.push(q)
                await fsx.copy(delb, `./DannyTechMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageDanny))
                fs.unlinkSync(delb)
                replyglobal(m, `Bot Creepy added Image\nTo Check Type ${prefix}listimage`)
            }
            break


            case 'delimage': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Enter the Image Name')
                if (!ImageDanny.includes(q)) return replyglobal(m, "The image name you entered is not registered")
                let wanu = ImageDanny.indexOf(q)
                ImageDanny.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageDanny))
                fs.unlinkSync(`./DannyTechMedia/image/${q}.jpg`)
                replyglobal(m, `Bot Creepy Deleted Image ${q}`)
            }
            break


            case 'addsticker': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Enter the name of the sticker?')
                if (StickerDanny.includes(q)) return replyglobal(m, "Name Already In Use")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                StickerDanny.push(q)
                await fsx.copy(delb, `./DannyTechMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerDanny))
                fs.unlinkSync(delb)
                replyglobal(m, `Successfully Adding Sticker\nTo Check Type ${prefix}liststicker`)
            }
            break


            case 'delsticker': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Enter the name of the sticker')
                if (!StickerDanny.includes(q)) return replyglobal(m, "Name Not Registered in Database")
                let wanu = StickerDanny.indexOf(q)
                StickerDannyTechInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerDanny))
                fs.unlinkSync(`./DannyTechMedia/sticker/${q}.webp`)
                replyglobal(m, `Bot Creepy Removed Sticker ${q}`)
            }
            break


            case 'addvn': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Enter the Name?')
                if (VoiceNoteDanny.includes(q)) return replyglobal(m, "Name Already In Use")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteDanny.push(q)
                await fsx.copy(delb, `./DannyTechMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteDanny))
                fs.unlinkSync(delb)
                replyglobal(m, `Bot Creepy Added Audio\nTo Check Type ${prefix}listvn`)
            }
            break


            case 'delvn': {
                if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
                if (args.length < 1) return replyglobal(m, 'Enter the Name')
                if (!VoiceNoteDanny.includes(q)) return replyglobal(m, "Name Not Registered in Database")
                let wanu = VoiceNoteDanny.indexOf(q)
                VoiceNoteDanny.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteDanny))
                fs.unlinkSync(`./DannyTechMedia/audio/${q}.mp3`)
                replyglobal(m, `Bot Creepy Deleted Audio ${q}`)
            }
            break


case 'addzip':{
if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(m, `What's the zip name?`)
let teks = `${text}`
{
if (ZipDanny.includes(teks)) return replyglobal(m, "This name is already in use")
let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
ZipDanny.push(teks)
await fsx.copy(delb, `./DannyTechMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipDanny))
fs.unlinkSync(delb)
replyglobal(m, `Bot Creepy Added zip\nTo check type ${prefix}listzip`)
}
}
break


case 'delzip':{
if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(m, 'Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipDanny.includes(teks)) return replyglobal(m, "This name does not exist in the database")
let wanu = ZipDanny.indexOf(teks)
ZipDanny.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipDanny))
fs.unlinkSync(`./DannyTechMedia/zip/${teks}.zip`)
replyglobal(m, `Successfully deleted zip ${teks}`)
}
}
break


case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipDanny) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipDanny.length}*`
replyglobal(m, teksooooo)
}
break


case 'addapk':{
if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(m, 'What is the name of the apk?')
let teks = `${text}`
{
if (ApkDanny.includes(teks)) return replyglobal(m, "This name is already in use")
let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./DannyTechMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkDanny))
fs.unlinkSync(delb)
replyglobal(m, `Bot Creepy Added the apk\nTo Check type ${prefix}listapk`)
}
}
break


case 'delapk':{
if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(m, 'Name of the apk?')
let teks = `${text}`
{
if (!ApkDanny.includes(teks)) return replyglobal(m, "This name does not exist in the database")
let wanu = ApkDanny.indexOf(teks)
ApkDanny.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkDanny))
fs.unlinkSync(`./DannyTechMedia/apk/${teks}.apk`)
replyglobal(m, `Bot Creepy deleted Apk ${teks}`)
}
}
break


case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkDanny) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkDanny.length}`
replyglobal(m, teksoooooo)
}
break


case 'addpdf':{
if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(m, 'What is the name of the pdf')
let teks = `${text}`
{
if (DocDanny.includes(teks)) return replyglobal(m, "This name is already in use")
let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./DannyTechMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocDanny))
fs.unlinkSync(delb)
replyglobal(m, `Bot Creepy Added Pdf\nTo check type ${prefix}listpdf`)
}
}
break


case 'delpdf':{
if (!isPremium) return replyglobal(m, "This is for Creepy premium users🥱")
await loading()
if (args.length < 1) return replyglobal(m, 'Enter the name')
let teks = `${text}`
{
if (!DocDanny.includes(teks)) return replyglobal(m, "This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocDanny))
fs.unlinkSync(`./DannyTechMedia/doc/${teks}.pdf`)
replyglobal(m, `Bot Creepy deleted pdf ${teks}`)
}
}
break


case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replyglobal(m, teksoooo)
}
break

            case 'afk':
                if (!m.isGroup) return replyglobal(m, "Are you lost?🙄, this is for groups only🤠🏃")
                if (isAfkOn) return replyglobal(m, "Already notag")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyglobal(m, `@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
         


 //chatbot///
 case 'chatbot': {
    if (!isCreator) return replyglobal(m, "You are not my owner");
    if (args.length < 1) return replyglobal(m, 'on/off?');
    let chatbotData = {};
    try {
        chatbotData = JSON.parse(fs.readFileSync('./database/chatbot.json'));
    } catch (err) {
        console.error('Error loading chatbot.json:', err);
    }
    if (args[0] === 'on') {
        chatbotData.global = true;
        fs.writeFileSync('./database/chatbot.json', JSON.stringify(chatbotData, null, 2));
        replyglobal(m, `✅ Chatbot has been enabled for ALL chats.`);
    } else if (args[0] === 'off') {
        chatbotData.global = false;
        fs.writeFileSync('./database/chatbot.json', JSON.stringify(chatbotData, null, 2));
        replyglobal(m, `❌ Chatbot has been disabled.`);
    } else {
        replyglobal(m, 'Please type "on" or "off" to toggle the Chatbot feature.');
    }
}
break;
//// chatbot end///


/////welcome///
        case 'welcome':
    case 'goodbye':{
             if (!isCreator) return replyglobal(m, "Who are you to command me huh??");
             if (!isGroup) return replyglobal(m, "This command is for groups only.");
               if (args.length < 1) return replyglobal(m, 'on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  replyglobal(m, `*${command} is enabled*`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replyglobal(m, `*${command} is disabled*`)
               }
            }
            break
///welcome off////

//--------[AUTO REACT]-------//
 case 'autoreact': {
    if (!isCreator) return replyglobal(m, "You are not my owner");
    if (args.length < 1) return replyglobal(m, 'on/off?');
    let autoreactData = {};
    try {
        autoreactData = JSON.parse(fs.readFileSync('./database/autoreact.json'));
    } catch (err) {
        console.error('Error loading autoreact.json:', err);
    }
    if (args[0] === 'on') {
        autoreactData.global = true;
        fs.writeFileSync('./database/autoreact.json', JSON.stringify(autoreactData, null, 2));
        replyglobal(m, `✅ Auto-react has been enabled for ALL chats.`);
    } else if (args[0] === 'off') {
        autoreactData.global = false;
        fs.writeFileSync('./database/autoreact.json', JSON.stringify(autoreactData, null, 2));
        replyglobal(m, `❌ Auto-react has been disabled.`);
    } else {
        replyglobal(m, 'Please type "on" or "off" to toggle the Auto-react feature.');
    }
}
break;
//--------[AUTO REACT END]--------//


//===========================[analyse]===========================\\
case 'analyse': {
    await DannyTechInc.sendMessage(m.chat, {
        react: { text: "🔍", key: m.key },
    });

    try {
        const FormData = require('form-data');

        async function uploadToCatbox(filePath) {
            if (!fs.existsSync(filePath)) throw new Error("File does not exist");

            const data = new FormData();
            data.append('reqtype', 'fileupload');
            data.append('userhash', '');
            data.append('fileToUpload', fs.createReadStream(filePath));

            const config = {
                method: 'POST',
                url: 'https://catbox.moe/user/api.php',
                headers: {
                    ...data.getHeaders(),
                },
                data: data,
            };

            const res = await axios.request(config);
            return res.data.trim();
        }

        if (!m.quoted)
            return replyglobal(m, "❌ Please reply to an image to analyze.");

        let mediaPath;
        try {
            mediaPath = await DannyTechInc.downloadAndSaveMediaMessage(m.quoted);
        } catch (err) {
            console.error("Download error:", err);
            return replyglobal(m, "❌ Failed to upload image. Try again.");
        }

        if (!mediaPath) return replyglobal(m, "❌ Image file missing.");

        const catboxUrl = await uploadToCatbox(mediaPath);
        fs.unlinkSync(mediaPath);

        // Notify user that image is being analyzed
        await replyglobal(m, "🧠 *Analyzing your image...* \n*Please wait.*");

        const visionApiUrl = `https://api.giftedtech.web.id/api/ai/vision?apikey=gifted&url=${encodeURIComponent(catboxUrl)}&prompt=Describe+in+detail+what+is+in+the+picture,+including+objects,+atmosphere+and+mood+of+the+picture`;

        const { data } = await axios.get(visionApiUrl);

        if (data && data.success && data.result) {
            await DannyTechInc.sendMessage(m.chat, {
                text: `🧠 *Image Analysis:*\n\n${data.result}`,
                contextInfo: {
                    forwardingScore: 5,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "CREEPY TECH",
                        newsletterJid: "120363307517794567@newsletter",
                    },
                    externalAdReply: {
                        title: "CREEPY_MD-V2",
                        body: "Image Analyzer",
                        thumbnailUrl: catboxUrl, 
                        sourceUrl: global.link || "https://creepytech.org",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnailHeight: 500,
                        thumbnailWidth: 500,
                    },
                },
            }, { quoted: m });
        } else {
            replyglobal(m, "❌ Analysis failed. Try again.");
        }

    } catch (err) {
        console.error("Analyse error:", err);
        replyglobal(m, "❌ An error occurred while analyzing the image.");
    }

    break;
}


//=============================[analyse end]============================\\



//////  ANTIDELETE ////////
case 'antidelete': {
    if (!isBotAdmins) return replyglobal(m, "I need admin permissions to enforce Anti-Delete.");
    if (!isAdmins && !Creator) return replyglobal(m, "Only admins can use this command.");

    let antideleteData = {};
    try {
        antideleteData = JSON.parse(fs.readFileSync('./database/antidelete.json'));
    } catch (err) {
        console.error('Error loading antidelete.json:', err);
    }
    if (!antideleteData.global) {
        antideleteData.global = false;
    }

    if (args.length < 1) return replyglobal(m, 'Usage:\n- antidelete on/off');

    let option = args[0].toLowerCase();

    if (option === 'on') {
        antideleteData.global = true;
        fs.writeFileSync('./database/antidelete.json', JSON.stringify(antideleteData, null, 2));
        return replyglobal(m, "✅ Anti-Delete is now *ENABLED* for all chats.");
    }

    if (option === 'off') {
        antideleteData.global = false;
        fs.writeFileSync('./database/antidelete.json', JSON.stringify(antideleteData, null, 2));
        return replyglobal(m, "🚫 Anti-Delete has been *DISABLED* for all chats.");
    }

    return replyglobal(m, 'Invalid option. Usage:\n- antidelete on/off');
}
break;


case 'antidelete':
case 'undelete': {
    if (!isCreator) return replyglobal(m, "who are you to command me huh??");
    if (args.length < 1) return replyglobal(m, 'Usage:\n .antidelete [on/off]');
    let antideleteData = {};
    try {
        antideleteData = JSON.parse(fs.readFileSync('./database/antidelete.json'));
    } catch (err) {
        console.error('Error loading antidelete.json:', err);
        antideleteData = {};
    }
    const chatId = isGroup ? m.chat : m.sender;
    if (!antideleteData[chatId]) {
        antideleteData[chatId] = {
            enabled: false
        };
    }
    const action = args[0].toLowerCase();

    if (action === 'on') {
        antideleteData[chatId].enabled = true;
        replyglobal(m, 'Anti-delete enabled! I will catch deleted messages.');
    } else if (action === 'off') {
        antideleteData[chatId].enabled = false;
        replyglobal(m, 'Anti-delete disabled!');
    } else {
        return replyglobal(m, 'Usage: .antidelete [on/off]');
    }
    try {
        fs.writeFileSync('./database/antidelete.json', JSON.stringify(antideleteData, null, 2));
    } catch (err) {
        console.error('Error saving antidelete.json:', err);
        return replyglobal(m, 'Error saving settings!');
    }
}
break;


case 'badword':
case 'antibadword': {
    if (!isGroup) return replyglobal(m, "This command is for groups only.");
    if (!isBotAdmins) return replyglobal(m, "I need admin permissions to enforce Anti-Link.");
    if (!isAdmins && !Creator) return replyglobal(m, "Only admins can use this command.");


    if (args.length < 1) return replyglobal(m, 'Usage:\n.badword on | idiot, fool, ...\n.badword off');
    let antiwordData = {};
    try {
        antiwordData = JSON.parse(fs.readFileSync('./database/badword.json'));
    } catch (err) {
        console.error('Error loading badword.json:', err);
        antiwordData = {};
    }
    if (!antiwordData[m.chat]) {
        antiwordData[m.chat] = {
            enabled: false,
            words: []
        };
    }

    const action = args[0].toLowerCase();

    if (action === 'on') {
        if (args.length < 2) return replyglobal(m, 'Please specify words to block!\nExample: .badword on | fuck, idiot, stupid');
        const wordsText = text.split('|')[1]?.trim();
        if (!wordsText) return replyglobal(m, 'Please specify words to block after "|"');
        
        const words = wordsText.split(',').map(w => w.trim().toLowerCase()).filter(w => w);
        if (words.length === 0) return replyglobal(m, 'No valid words provided!');
        
        antiwordData[m.chat] = {
            enabled: true,
            words: words
        };
        replyglobal(m, `Anti-badword enabled! Blocking: ${words.join(', ')}`);
        
    } else if (action === 'off') {
        antiwordData[m.chat].enabled = false;
        replyglobal(m, 'Anti-badword disabled!');
    } else {
        return replyglobal(m, 'Usage:\n.badword on | word1, word2, ...\n.badword off');
    }
    try {
        fs.writeFileSync('./database/badword.json', JSON.stringify(antiwordData, null, 2));
    } catch (err) {
        console.error('Error saving badword.json:', err);
        return replyglobal(m, 'Error saving settings!');
    }
}
break;



// antilink cmd
case 'antilink': {
    if (!isGroup) return replyglobal(m, "This command is for groups only.");
    if (!isBotAdmins) return replyglobal(m, "I need admin permissions to enforce Anti-Link.");
    if (!isAdmins && !Creator) return replyglobal(m, "Only admins can use this command.");

    let antilinkData = {};
    try {
        antilinkData = JSON.parse(fs.readFileSync('./database/antilink.json'));
    } catch (err) {
        console.error('Error loading antilink.json:', err);
    }
    if (!antilinkData[m.chat]) {
        antilinkData[m.chat] = {
            enabled: false, 
            mode: "delete", 
            warnings: {} 
        };
    }

    if (args.length < 1) return replyglobal(m, 'Usage:\n- antilink on/off\n- antilink delete\n- antilink warn\n- antilink kick');

    let option = args[0].toLowerCase();

    if (option === 'on') {
        antilinkData[m.chat].enabled = true;
        antilinkData[m.chat].mode = "delete"; 
        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilinkData, null, 2));
        return replyglobal(m, "✅ Anti-Link is now *ENABLED* (default: Delete mode).");
    }

    if (option === 'off') {
        antilinkData[m.chat].enabled = false;
        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilinkData, null, 2));
        return replyglobal(m, "🚫 Anti-Link has been *DISABLED*.");
    }

    if (['delete', 'warn', 'kick'].includes(option)) {
        antilinkData[m.chat].enabled = true; 
        antilinkData[m.chat].mode = option; 
        fs.writeFileSync('./database/antilink.json', JSON.stringify(antilinkData, null, 2));
        return replyglobal(m, `🚨 Anti-Link mode set to *${option.toUpperCase()}*.`);
    }

    replyglobal(m, 'Invalid option. Usage:\n- antilink on/off\n- antilink delete\n- antilink warn\n- antilink kick');
}
break;

// antilink end



case 'bug': 
case 'reportbug':
case 'report':
case 'bugreport': {
    if (!text) return replyglobal(m, `Example: ${prefix + command} Hello Danny, \nplay command is not working`); 

    const reportHeader = `📌 *| BUG REPORT |*`;
    const userMention = `@${m.sender.split("@")[0]}`;
    const bugMessage = `\n\n👤 *User* : ${userMention}\n🐞 *Bug/Request* : ${text}`;
    const ownerReply = `\n\n✅ *Hey ${pushname}, your request has been forwarded to my Owner.*\n⏳ *Please wait for a response...*`;
    await DannyTechInc.sendMessage(
        '255697608274@s.whatsapp.net',
        {
            text: reportHeader + bugMessage,
            mentions: [m.sender], 
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: "CREEPY_MD-V2 - Bug Report",
                    body: "New user report received!",
                    thumbnailUrl: "https://files.catbox.moe/454dp6.jpg", 
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                thumbnailWidth: 500
                },
            },
        },
        { quoted: m } 
    );
    await DannyTechInc.sendMessage(
        m.chat,
        {
            text: reportHeader + ownerReply,
            mentions: [m.sender], 
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: "Bug Report Sent!",
                    body: "Our team will review your report shortly.",
                    thumbnailUrl: "https://files.catbox.moe/454dp6.jpg", 
                    sourceUrl: "https://wa.me/255697608274", 
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                thumbnailWidth: 500
                },
            },
        },
        { quoted: m } 
    );
}
break;




/// poll ///

case 'poll': {
    if (!isCreator) return replyglobal(m, `❌ You are not my owner.`); 
    let [poll, opt] = text.split("|").map(str => str.trim());
    if (!poll || !opt || opt.split(',').length < 2) {
        return replyglobal(m, `❌ Mention a question and at least 2 options.\nExample: ${prefix}poll Which is the fastetests bot?|CREEPY_MD,HANS-XMD,GIFTED-MD`);
    }
    let options = opt.split(',').map(option => option.trim());
    await DannyTechInc.sendMessage(
        m.chat,
        {
            poll: {
                name: poll,
                values: options, 
            },
        },
        { quoted: m }
    );

    await replyglobal(m, `*✅ Poll created successfully!*`); 
}
break;


// Lyrics download                
case 'lyrics': {
    if (!text) return replyglobal(m, `*Example:* ${prefix + command} ghost | justin bieber`);
  
    try {
      const [title, artist] = text.split('|').map(str => str.trim());
      if (!title || !artist) return replyglobal(m, `*Please provide both song title and artist, example.:* ${prefix + command} ghost | justin bieber`);
      await DannyTechInc.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
      const apiUrl = `https://apis.davidcyriltech.my.id/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
      const response = await axios.get(apiUrl);
  
      if (response.data && response.data.lyrics) {
        const { title, artist, lyrics } = response.data;
        const lyricsMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🎵 *LYRICS DOWNLOADER*  🚀
╰━━━━━━━━━━━━━━━━━━━╯
> ║🎶 *Title:* ${title}
> ║🎤 *Artist:* ${artist}
──────────────────────
${lyrics}
──────────────────────
> *CREEPY_MD-V2*
  `.trim();
        await DannyTechInc.sendMessage(
          m.chat,
          {
            text: lyricsMessage,
            contextInfo: {
              forwardingScore: 5,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
              },
              externalAdReply: {
                showAdAttribution: true,
                title: `CREEPY_MD-V2`,
                body: `𝐷𝛥𝛮𝛮𝑌`,
                thumbnailUrl: 'https://files.catbox.moe/454dp6.jpg', 
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
              },
            },
          },
          { quoted: m }
        );
      } else {
        reply(`*No lyrics found for:* ${title} by ${artist}`);
      }
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      replyglobal(m, `*Failed to fetch lyrics. Possible reasons:*\n1. Invalid title or artist.\n2. API issues.\n\n*Error Details:* ${error.message}`);
    }
    break;
  }



//facebook insta and tiktok start

// Instagram Command
case 'instagram': {
    if (!text) return replyglobal(m, `Example: ${prefix + command} https://www.instagram.com/p/xxxxx`);
    await DannyTechInc.sendMessage(`Downloading Instagram content...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          } else {
            await DannyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (low_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal(m, "❌ Unable to fetch the Instagram content. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in Instagram Downloader:', error.message);
        replyglobal(m, "❌ An error occurred while processing your request. \nPlease type *report* to inform owner about this.");
      }
      break;
}

// TikTok Command
case 'tiktok': {
    if (!text) return replyglobal(m, `Example: ${prefix + command} https://www.tiktok.com/video/xxxxx`);
    await DannyTechInc.sendMessage(`Downloading TikTok video...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          } else {
            await DannyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (low_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal(m, "❌ Unable to fetch the TikTok video. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in TikTok Downloader:', error.message);
        replyglobal(m, "❌ an error occurred while processing your request\nPlease type *report* to inform owner about this..");
      }
      break;
}

// Facebook Command
case 'facebook': {
    if (!text) return replyglobal(m, `Example: ${prefix + command} https://www.facebook.com/video/link`);
    await DannyTechInc.sendMessage(`Downloading Facebook content...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          } else {
            await DannyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (low_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal(m, "❌ Unable to fetch the Facebook video. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in Facebook Downloader:', error.message);
        replyglobal(m, "❌ an error occurred while processing your request\nPlease type *report* to inform owner about this..");
      }
      break;
}

// AIO Command (Fallback for other cases like TikTok, Facebook, etc.)
case 'aio': {
    if (!text) return replyglobal(m, `Example: ${prefix + command} https://www.somevideolink.com`);
    await DannyTechInc.sendMessage(`Downloading content...`);
    
    try {
        const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
    
        if (response.data.success) {
          const { title, low_quality, high_quality } = response.data.video;
    
          const isDirectDownloadHD = high_quality.includes("tinyurl");
          const isDirectDownloadSD = low_quality.includes("tinyurl");
    
          if (isDirectDownloadHD || isDirectDownloadSD) {
            if (isDirectDownloadHD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: high_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (isDirectDownloadSD) {
              await DannyTechInc.sendMessage(m.chat, {
                video: { url: low_quality },
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          } else {
            await DannyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });
    
            const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
            const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });
    
            if (high_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(hdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_HD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* HD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
            if (low_quality) {
              await DannyTechInc.sendMessage(m.chat, {
                video: Buffer.from(sdBuffer.data),
                mimetype: 'video/mp4',
                fileName: `${title}_SD.mp4`,
                caption: `*Title:* ${title}\n*Quality:* SD\n> *CREEPY_MD-V2*`
              }, { quoted: m });
            }
          }
        } else {
          replyglobal(m, "❌ Unable to fetch the video. Please check the URL and try again.");
        }
      } catch (error) {
        console.error('Error in AIO Downloader:', error.message);
        replyglobal(m, "❌ an error occurred while processing your request\nPlease type *report* to inform owner about this..");
      }
      break;
}


//facebook insta and tiktok end


//------------[PLAY]---------------//
case 'play': case 'song': {
    if (!text) {
        return replyglobal(m, `Example: ${prefix + command} Justin Bieber Ghost`);
    }

    await DannyTechInc.sendMessage(m.chat, { react: { text: '🎵', key: m.key } });
    
    try {
        let kyuu = await fetchJson(`https://hanstz-hansapi.hf.space/yt?query=${encodeURIComponent(text)}`);
        
        if (!kyuu.success || !kyuu.result) {
            return replyglobal(m, "*Song not found. Please try another search.*");
        }

        let songData = kyuu.result;
        await DannyTechInc.sendMessage(m.chat, {
            text: `🎵 *Playing:* ${songData.title}\n⏳ *Duration:* ${songData.timestamp}\n👀 *Views:* ${songData.views.toLocaleString()}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: `𝐷𝛥𝛮𝛮𝑌`,
                    thumbnailUrl: songData.thumbnail || songData.image || 'https://files.catbox.moe/454dp6.jpg',
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });
        let audioUrl = songData.download?.audio;
        if (!audioUrl) {
            return replyglobal(m, "Unable to fetch audio. Please try again.");
        }
        await DannyTechInc.sendMessage(m.chat, {
            audio: { url: audioUrl },
            fileName: `${songData.title}.mp3`,
            mimetype: "audio/mp4",
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: `${songData.title}.mp3`,
                    thumbnailUrl: songData.thumbnail || songData.image || 'https://files.catbox.moe/454dp6.jpg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play command:", error);
        replyglobal(m, "An error occurred while processing your request\nPlease type *report* to inform owner about this..");
    }
}
break;

//----------[PLAY END]--------------//


//---------------[YTMP4]---------------//

case 'ytmp3': case 'ytaudio': {
    if (!text) {
        return replyglobal(m, `Example: ${prefix + command} https://youtube.com/`);
    }

    await DannyTechInc.sendMessage(m.chat, { react: { text: '🎵', key: m.key } });
    
    try {
        let kyuu = await fetchJson(`https://hanstz-hansapi.hf.space/yt?query=${encodeURIComponent(text)}`);
        
        if (!kyuu.success || !kyuu.result) {
            return replyglobal(m, "*Song not found. Please try another link.*");
        }

        let songData = kyuu.result;
        await DannyTechInc.sendMessage(m.chat, {
            text: `🎵 *Downloading:* ${songData.title}\n⏳ *Duration:* ${songData.timestamp}\n👀 *Views:* ${songData.views.toLocaleString()}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: `𝐷𝛥𝛮𝛮𝑌`,
                    thumbnailUrl: songData.thumbnail || songData.image || 'https://files.catbox.moe/454dp6.jpg',
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });
        let audioUrl = songData.download?.audio;
        if (!audioUrl) {
            return replyglobal(m, "Unable to fetch audio. Please try again.");
        }
        await DannyTechInc.sendMessage(m.chat, {
            audio: { url: audioUrl },
            fileName: `${songData.title}.mp3`,
            mimetype: "audio/mp4",
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: `${songData.title}.mp3`,
                    thumbnailUrl: songData.thumbnail || songData.image || 'https://files.catbox.moe/454dp6.jpg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in ytmp3 command:", error);
        replyglobal(m, "An error occurred while processing your request\nPlease type *report* to inform owner about this..");
    }
}
break;

//---------------[YTMP4 ENDS]------------//


//------------[VIDEO]-------------------//
case 'video': case 'vid': {
    if (!text) {
        return replyglobal(m, `Example: ${prefix + command} Justin Bieber Ghost`);
    }
    await DannyTechInc.sendMessage(m.chat, { react: { text: '📽', key: m.key } });
    try {
        let searchResult = await fetchJson(`https://hanstz-hansapi.hf.space/yt?query=${encodeURIComponent(text)}`);
        
        if (!searchResult.success || !searchResult.result) {
            return replyglobal(m, "*Video not found. Please try another search.*");
        }

        let videoData = searchResult.result;
        
        await DannyTechInc.sendMessage(m.chat, {
            text: `📽 *Playing Video:* ${videoData.title}\n⏳ *Duration:* ${videoData.timestamp}\n👀 *Views:* ${videoData.views.toLocaleString()}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: "𝐷𝛥𝛮𝛮𝑌",
                    thumbnailUrl: videoData.thumbnail || videoData.image || 'https://files.catbox.moe/454dp6.jpg',
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });
        let videoUrl = videoData.download?.video;
        if (!videoUrl) {
            return replyglobal(m, "Unable to fetch video. Please try again.");
        }
        await DannyTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            fileName: `${videoData.title}.mp4`,
            mimetype: "video/mp4",
            caption: `📽 *${videoData.title}*`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: "𝐷𝛥𝛮𝛮𝑌",
                    thumbnailUrl: videoData.thumbnail || videoData.image || 'https://files.catbox.moe/454dp6.jpg',
                    mediaType: 2,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                thumbnailWidth: 500
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in video command:", error);
        replyglobal(m, "An error occurred while processing your request\nPlease type *report* to inform owner about this..");
    }
}
break;
//----------------------[VIDEO]------------------------------//




//========================[play2 and video2]=========================//


// play2 command - audio with quality choice
case 'play2': {
  if (!text) return replyglobal(m, `Example: ${prefix + command} ghost justin bieber | 128`);

  // Parse input as "query | quality"
  let [query, quality] = text.split('|').map(v => v.trim());
  quality = quality || '128'; // default quality if not provided

  await DannyTechInc.sendMessage(m.chat, { react: { text: '🎵', key: m.key } });

  try {
    // Search for video on giftedtech API
    let searchRes = await axios.get(`https://api.giftedtech.web.id/api/search/yts?apikey=gifted&query=${encodeURIComponent(query)}`, { timeout: 10000 });
    if (!searchRes.data.success || !searchRes.data.result || !searchRes.data.result.length) {
      return replyglobal(m, '*Song not found. Please try another search.*');
    }

    let song = searchRes.data.result[0]; // take first search result

    // Now get audio download link with desired quality
    let dlRes = await axios.get(`https://api.giftedtech.web.id/api/download/ytmusic?apikey=gifted&quality=${quality}&url=${encodeURIComponent(song.url)}`, { timeout: 10000 });
    if (!dlRes.data.success) return replyglobal(m, '❌ Failed to fetch audio download link.');

    let audioData = dlRes.data.result;

    await DannyTechInc.sendMessage(m.chat, {
      text: `🎵 *Playing:* ${song.title}\n⏳ *Duration:* ${song.duration}\n👀 *Views:* ${song.views.toLocaleString()}\n🔊 *Quality:* ${quality}Kbps`,
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "CREEPY TECH",
          newsletterJid: "120363307517794567@newsletter",
        },
        externalAdReply: {
          showAdAttribution: true,
          title: song.title,
          body: `Audio Quality: ${quality}Kbps`,
          thumbnailUrl: song.thumbnail,
          sourceUrl: song.url,
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailHeight: 400,
          thumbnailWidth: 400,
        }
      },
    }, { quoted: m });

    await DannyTechInc.sendMessage(m.chat, {
      audio: { url: audioData.download_url },
      fileName: `${song.title}.mp3`,
      mimetype: "audio/mp4",
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "CREEPY TECH",
          newsletterJid: "120363307517794567@newsletter",
        },
        externalAdReply: {
          title: song.title,
          body: `Audio Quality: ${quality}Kbps`,
          thumbnailUrl: song.thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true,
          thumbnailHeight: 400,
          thumbnailWidth: 400,
        }
      },
    }, { quoted: m });

  } catch (error) {
    console.error("Error in play2 command:", error);
    replyglobal(m, "An error occurred while processing your request.\nPlease type *report* to inform owner about this.");
  }
}
break;

// video2 command - video with quality choice
case 'video2': {
  if (!text) return replyglobal(m, `Example: ${prefix + command} ghost justin bieber | 360`);

  // Parse input as "query | quality"
  let [query, quality] = text.split('|').map(v => v.trim());
  quality = quality || '360'; // default video quality if not provided

  await DannyTechInc.sendMessage(m.chat, { react: { text: '📽', key: m.key } });

  try {
    // Search for video on giftedtech API
    let searchRes = await axios.get(`https://api.giftedtech.web.id/api/search/yts?apikey=gifted&query=${encodeURIComponent(query)}`, { timeout: 10000 });
    if (!searchRes.data.success || !searchRes.data.result || !searchRes.data.result.length) {
      return replyglobal(m, '*Video not found. Please try another search.*');
    }

    let video = searchRes.data.result[0]; // take first search result

    // Download video with quality parameter
    let dlRes = await axios.get(`https://api.giftedtech.web.id/api/download/ytvideo?apikey=gifted&quality=${quality}&url=${encodeURIComponent(video.url)}`, { timeout: 10000 });
    if (!dlRes.data.success) return replyglobal(m, '❌ Failed to fetch video download link.');

    let videoData = dlRes.data.result;

    await DannyTechInc.sendMessage(m.chat, {
      text: `📽 *Playing Video:* ${video.title}\n⏳ *Duration:* ${video.duration}\n👀 *Views:* ${video.views.toLocaleString()}\n🎞️ *Quality:* ${quality}p`,
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "CREEPY TECH",
          newsletterJid: "120363307517794567@newsletter",
        },
        externalAdReply: {
          showAdAttribution: true,
          title: video.title,
          body: `Video Quality: ${quality}p`,
          thumbnailUrl: video.thumbnail,
          sourceUrl: video.url,
          mediaType: 2,
          renderLargerThumbnail: true,
          thumbnailHeight: 400,
          thumbnailWidth: 400,
        }
      },
    }, { quoted: m });

    await DannyTechInc.sendMessage(m.chat, {
      video: { url: videoData.download_url },
      fileName: `${video.title}.mp4`,
      mimetype: "video/mp4",
      caption: `📽 *${video.title}*`,
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "CREEPY TECH",
          newsletterJid: "120363307517794567@newsletter",
        },
        externalAdReply: {
          title: video.title,
          body: `Video Quality: ${quality}p`,
          thumbnailUrl: video.thumbnail,
          mediaType: 2,
          renderLargerThumbnail: true,
          thumbnailHeight: 400,
          thumbnailWidth: 400,
        }
      },
    }, { quoted: m });

  } catch (error) {
    console.error("Error in video2 command:", error);
    replyglobal(m, "An error occurred while processing your request.\nPlease type *report* to inform owner about this.");
  }
}
break;



//===============================[play2 and video2 ends]=================//




//----------------------------[YTMP4]--------------------------//

case 'ytmp4': case 'ytvideo': {
    if (!text) {
        return replyglobal(m, `Example: ${prefix + command} Justin https://youtube.com/`);
    }
    await DannyTechInc.sendMessage(m.chat, { react: { text: '📽', key: m.key } });
    try {
        let searchResult = await fetchJson(`https://hanstz-hansapi.hf.space/yt?query=${encodeURIComponent(text)}`);
        
        if (!searchResult.success || !searchResult.result) {
            return replyglobal(m, "*Video not found. Please try another link.*");
        }

        let videoData = searchResult.result;
        
        await DannyTechInc.sendMessage(m.chat, {
            text: `📽 *Downloading Video:* ${videoData.title}\n⏳ *Duration:* ${videoData.timestamp}\n👀 *Views:* ${videoData.views.toLocaleString()}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: "𝐷𝛥𝛮𝛮𝑌",
                    thumbnailUrl: videoData.thumbnail || videoData.image || 'https://files.catbox.moe/454dp6.jpg',
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });
        let videoUrl = videoData.download?.video;
        if (!videoUrl) {
            return replyglobal(m, "Unable to fetch video. Please try again.");
        }
        await DannyTechInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            fileName: `${videoData.title}.mp4`,
            mimetype: "video/mp4",
            caption: `📽 *${videoData.title}*`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY_MD-V2",
                    body: "𝐷𝛥𝛮𝛮𝑌",
                    thumbnailUrl: videoData.thumbnail || videoData.image || 'https://files.catbox.moe/454dp6.jpg',
                    mediaType: 2,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                thumbnailWidth: 500
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in video command:", error);
        replyglobal(m, "An error occurred while processing your request\nPlease type *report* to inform owner about this..");
    }
}
break;

//----------------------------[YTMP4]-------------------------//


//=========================[facabook]=========================//

case 'facebook':
case 'fb':     {
    if (!text) return replyglobal(m, `📽️ *Example:*\n${prefix + command} https://www.facebook.com/reel/23242242424`);

    await DannyTechInc.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

    try {
        const res = await axios.get(`https://api.giftedtech.web.id/api/download/facebook?apikey=gifted&url=${encodeURIComponent(text)}`);
        const data = res.data?.result;

        if (!res.data.success || !data) {
            return replyglobal(m, "❌ Video not found. Please check the link.");
        }

        await DannyTechInc.sendMessage(m.chat, {
            text: `🎬 *Facebook Video Found!*\n\n📌 *Title:* ${data.title}\n⏱️ *Duration:* ${data.duration}\n\n🎥 *HD:* ${data.hd_video ? 'Available ✅' : 'Not available ❌'}\n📹 *SD:* ${data.sd_video ? 'Available ✅' : 'Not available ❌'}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "Facebook Video Downloader",
                    body: "Powered by CREEPY_MD",
                    thumbnailUrl: data.thumbnail || 'https://files.catbox.moe/154078.jpeg',
                    mediaType: 1,
                    sourceUrl: global.link || "https://creepytech.org",
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            },
        }, { quoted: m });

        await DannyTechInc.sendMessage(m.chat, {
            video: { url: data.hd_video || data.sd_video },
            caption: `🎬 *Downloaded from Facebook*\n\n📌 *Title:* ${data.title}\n⏱️ *Duration:* ${data.duration}`,
            mimetype: 'video/mp4',
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "Facebook Video",
                    body: `${data.title}`,
                    thumbnailUrl: data.thumbnail || 'https://files.catbox.moe/154078.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (err) {
        console.error("Facebook command error:", err);
        replyglobal(m, "❌ Failed to fetch Facebook video.\nTry again later or check the URL.");
    }
}
break;


//=============================[facebook ends]=====================//



//=============================[tiktok]=========================//

case 'tiktok': {
    if (!text) return replyglobal(m, `🎵 *Example:*\n${prefix + command} https://vm.tiktok.com/ZMrdfdfdff`);

    await DannyTechInc.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

    try {
        const res = await axios.get(`https://api.giftedtech.web.id/api/download/tiktok?apikey=gifted&url=${encodeURIComponent(text)}`);
        const data = res.data?.result;

        if (!res.data.success || !data?.video?.noWatermark) {
            return replyglobal(m, "❌ Failed to download TikTok video.\nPlease check the link and try again.");
        }

        // Send Info First
        await DannyTechInc.sendMessage(m.chat, {
            text: `🎶 *TikTok Video Found!*\n\n🎥 *User:* @${data.author?.unique_id}\n📌 *Title:* ${data.title || "No title"}\n🕒 *Created:* ${data.created_at}\n❤️ *Likes:* ${data.stats?.likeCount}\n💬 *Comments:* ${data.stats?.commentCount}\n🔁 *Shares:* ${data.stats?.shareCount}\n▶️ *Plays:* ${data.stats?.playCount}\n💾 *Saves:* ${data.stats?.saveCount}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: `@${data.author?.unique_id}`,
                    body: data.title,
                    thumbnailUrl: data.video?.cover || data.author?.avatar || 'https://files.catbox.moe/154078.jpeg',
                    mediaType: 1,
                    sourceUrl: data.url,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                },
            }
        }, { quoted: m });

        // Send Video
        await DannyTechInc.sendMessage(m.chat, {
            video: { url: data.video.noWatermark },
            caption: `🎵 *TikTok Video by @${data.author?.unique_id}*\n\n📌 *Caption:* ${data.title || "Untitled"}\n🎧 *Sound:* ${data.music?.title || "No music"}\n📅 *Posted:* ${data.created_at}`,
            mimetype: 'video/mp4',
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: data.music?.title || "TikTok Sound",
                    body: `🎧 by ${data.music?.author || "Unknown"}`,
                    thumbnailUrl: data.music?.cover_large || data.author?.avatar || 'https://files.catbox.moe/154078.jpeg',
                    mediaType: 1,
                    sourceUrl: data.music?.play_url || data.url,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (err) {
        console.error("❌ TikTok command error:", err);
        replyglobal(m, "⚠️ Failed to fetch TikTok video.\nTry again later or check the link.");
    }
}
break;


//================================[tiktok ends]=============================//





//==================================[instagram]==================================//

case 'instagram':
    case 'insta': 
  case 'ig':        {
    if (!text) return replyglobal(m, `📸 *Example:*\n${prefix + command} https://www.instagram.com/reel/xyz`);

    await DannyTechInc.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

    try {
        const res = await axios.get(`https://api.giftedtech.web.id/api/download/instadl?apikey=gifted&url=${encodeURIComponent(text)}`);
        const data = res.data?.result;

        if (!res.data.success || !data?.download_url) {
            return replyglobal(m, "❌ Failed to download Instagram content.\nPlease check the link and try again.");
        }

        // Send preview info
        await DannyTechInc.sendMessage(m.chat, {
            text: `📥 *Instagram Media Found!*\n\n🔗 *Link:* ${text}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "Instagram Download",
                    body: "by Danny",
                    thumbnailUrl: data.thumbnail || 'https://files.catbox.moe/154078.jpeg',
                    mediaType: 1,
                    sourceUrl: text,
                    renderLargerThumbnail: true
                },
            }
        }, { quoted: m });

        // Send video
        await DannyTechInc.sendMessage(m.chat, {
            video: { url: data.download_url },
            caption: `✅ *Instagram Media Downloaded Successfully!*`,
            mimetype: 'video/mp4',
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "Instagram Reel",
                    body: "Download Complete",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    sourceUrl: text,
                    renderLargerThumbnail: true
                },
            }
        }, { quoted: m });

    } catch (err) {
        console.error("❌ Instagram command error:", err);
        replyglobal(m, "⚠️ Failed to fetch Instagram media.\nTry again later or check the link.");
    }
}
break;


//======================================[instagram ends]=============================//





//--------------------------[AI]------------------------------//
case "ai": 
case "creepy-ai": {
    if (!text) return replyglobal(m, "Please tell me something!..");
    if (!global.userChats) global.userChats = {};
    if (!global.userChats[m.sender]) global.userChats[m.sender] = [];
    global.userChats[m.sender].push(`User: ${text}`);
    if (global.userChats[m.sender].length > 15) {
        global.userChats[m.sender].shift(); 
    }

    let userHistory = global.userChats[m.sender].join("\n"); 

    let prompt = `
    You are CREEPY AI, a friendly smart WhatsApp bot. Chat naturally without asking repetitive questions, do not ask user how can i assist you or whats on your mind
    dont keep asking people how can i assist you, but chat as human
  > Owner: Danny and your creator Danny (WhatsApp: wa.me/dannytech) (Telegram: t.me/DannyTech20) he is from Arusha Tanzania. Hestared to create you since december 2024
  > Company Website: https://creepytech.org/
  > personal portfolio: https://danny.creepytech.org
  > WhatsApp Channel: https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r
  > Telegram Channel: https://t.me/creepytechnology
  > GitHub Repo: https://github.com/DannyTech20/CREEPY_MD-V2.git
  > YouTube chanel: https://youtube.com/@creepy_technology
  > Danny is a developer (All languages), 3D animator, music producer, singer, and video director.
  > important (How to deploy CREEPY_MD-V2 [you], first user should have Discord app, give them discord app link, then give them steps on how to set up and verryfying discord account[all ssteps], then they should have panel, give them free panel links liks [https://bot-hosting.net/?aff=1297254811795722383], then they should download bot file on telegram channel or githb repo, then they will deploy bot, here is a youtube link of guiding them [https://youtu.be/D_cnVT7JXRA?si=vFV4F2M81DvkiPyk])
  > If a girl likes Danny, give her his number he is open.
  > If someone asks you to play song, reply with this word only .play [song name]
  > If someone asks you to download video, reply with this word only .video [video name]
  > if asked for commands here are menu to list all commands
  .menu (menu command)
  .creepy (all commands at once)
  .ownermenu (owner menu)
  .panelmenu (panel menu)
  .stickermenu (sticker menu)
  .animememnu (animemenu)
  .gamememnu (game menu)
  .nsfwmenu (menu for adults)
  .toolsmenu (menu for tools like music play)
  > If someone ask if u love your owner, say you love your owner/creator.
    
    Conversation history:
    ${userHistory}
    `;

    try {
        let { data } = await axios.get("https://HansTz-x.hf.space/ai/logic", {
            params: { "q": text, "logic": prompt }
        });

        let botResponse = data.result;

        global.userChats[m.sender].push(`Bot: ${botResponse}`);
        
        m.reply(botResponse);
    } catch (e) {
        m.replyglobal(m, "AI error: " + e.message);
        console.log(e);
    }
}
break;



//view once open
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
case 'creepy-open':
case 'open':
case 'view': 
case 'vv': {
    if (!quoted) return replyglobal(m, `Reply to a view-once image, video, or audio.`);

    try {
        let mime = quoted.mimetype || ''; 
        let media = await quoted.download();
        let caption = quoted.text || quoted.caption || ''; 

        let messageOptions = {
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
            }
        };

        if (/image/.test(mime)) {
            messageOptions.image = media;
            messageOptions.caption = `CREEPY_MD-V2\n> Image executed 💯.\n__________________________\n${caption}`;
        } else if (/video/.test(mime)) {
            messageOptions.video = media;
            messageOptions.caption = `CREEPY_MD-V2\n> Video executed 💯.\n__________________________\n${caption}`;
        } else if (/audio/.test(mime)) {
            messageOptions.audio = media;
            messageOptions.mimetype = 'audio/mp4';
        } else {
            return replyglobal(m, `Unsupported media type. Please reply to an image, video, or audio.`);
        }

        await DannyTechInc.sendMessage(m.chat, messageOptions, { quoted: m });

    } catch (error) {
        console.error("Error processing media:", error);
    }
}
break;
/// view once open



/// status download////


case 'download':
case 'send':
case 'please send': 
case 'save':
case 'fetch':     {
    if (!quoted) return replyglobal(m, `*Reply any status update to download it.*`);

    try {
        let mime = quoted.mimetype || ''; 
        let media = await quoted.download();
        let caption = quoted.text || quoted.caption || ''; 

        let messageOptions = {
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
            }
        };

        if (/image/.test(mime)) {
            messageOptions.image = media;
            messageOptions.caption = `CREEPY_MD-V2\n> Image executed 💯.\n__________________________\n${caption}`;
        } else if (/video/.test(mime)) {
            messageOptions.video = media;
            messageOptions.caption = `CREEPY_MD-V2\n> Video executed 💯.\n__________________________\n${caption}`;
        } else if (/audio/.test(mime)) {
            messageOptions.audio = media;
            messageOptions.mimetype = 'audio/mp4';
        } else {
            return replyglobal(m, `Unsupported media type. Please reply to an image, video, or audio.`);
        }

        await DannyTechInc.sendMessage(m.chat, messageOptions, { quoted: m });

    } catch (error) {
        console.error("Error processing media:", error);
    }
}
break;


//// status download ends //////



case 'delspam': {
    if (!isGroup) return replyglobal(m, '❌ This command can only be used in groups.');
    if (!isAdmins && !isGroupOwner && !m.isCreator) return replyglobal(m, '❌ Only admins and owners can use this command.');

    let targetUser = m.quoted ? m.quoted.sender : (mentionedJid.length ? mentionedJid[0] : null);
    if (!targetUser) return replyglobal(m, '❌ Reply to a message or mention a user to delete their messages.');

    try {
        let messages = await DannyTechInc.loadMessages(m.chat, 500); // Load last 500 messages
        let toDelete = messages.messages.filter(msg => 
            msg.key.participant === targetUser || 
            (msg.key.remoteJid === m.chat && msg.key.fromMe === false && msg.participant === targetUser)
        );

        if (toDelete.length === 0) {
            return replyglobal(m, `⚠️ No messages found for @${targetUser.split('@')[0]}.`);
        }

        replyglobal(m, `🗑 Deleting ${toDelete.length} messages from @${targetUser.split('@')[0]}... Please wait.`);

        // Delete all found messages with delay
        for (let i = 0; i < toDelete.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5s delay to avoid spam
            await DannyTechInc.sendMessage(m.chat, { delete: toDelete[i].key });
        }

        replyglobal(m, `✅ Successfully deleted ${toDelete.length} messages from @${targetUser.split('@')[0]}.`);
    } catch (error) {
        console.error("Error deleting messages:", error);
        replyglobal(m, "❌ Failed to delete messages. Make sure the bot has admin permissions.");
    }
}
break;




///starting new cmds to add///

case 'say':
case 'tts':
case 'gtts': {
    const googleTTS = require('google-tts-api'); // ✅ Required for TTS

    let cleanedText = text?.trim();

    // Fallback to quoted message if no text was provided
    if (!cleanedText && m.quoted?.text) {
        cleanedText = m.quoted.text.trim();
    }

    if (!cleanedText) {
        return replyglobal(m, '❌ Please provide the text or reply to a message.');
    }

    try {
        // Generate the TTS audio URL
        const ttsUrl = googleTTS.getAudioUrl(cleanedText, {
            lang: 'en',
            slow: false,
            host: 'https://translate.google.com',
        });

        await DannyTechInc.sendMessage(m.chat, {
            audio: { url: ttsUrl },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error("TTS Error:", error);
        replyglobal(m, "❌ Failed to generate speech. Please try again.");
    }
}
break;

    

  case 'fact': {
      const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replyglobal(m, `${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break

     case 'quotes':
      case 'quote':
    const quotedanny = await axios.get(`https://favqs.com/api/qotd`)
            const textquotes = `*${themeemoji} Quote:* ${quotedanny.data.quote.body}\n\n*${themeemoji} Author:* ${quotedanny.data.quote.author}`
    return replyglobal(m, textquotes)
    break

    case 'bible': {
      (async () => {
        const { translate } = require('translate-google-api'); // Alternative API
        const fetch = require('node-fetch');
        const BASE_URL = 'https://bible-api.com';
    
        try {
          let chapterInput = m.text.split(' ').slice(1).join(' ').trim();
          if (!chapterInput) {
            return replyglobal(m, `Please specify the chapter number or name. Example: ${prefix + command} John 3:16`);
          }
    
          let encodedInput = encodeURIComponent(chapterInput);
          let chapterRes = await fetch(`${BASE_URL}/${encodedInput}`);
    
          if (!chapterRes.ok) {
            throw new Error(`Couldn't find the requested Bible verse. Please use a format like: ${prefix + command} John 3:16`);
          }
    
          let chapterData = await chapterRes.json();
          if (!chapterData.text) {
            throw new Error(`No text found for ${chapterInput}. Please try a different chapter.`);
          }
          let translatedChapterSwahili = 'Swahili translation failed.';
          let translatedChapterEnglish = 'English translation failed.';
    
          try {
            let [resultSw, resultEn] = await Promise.all([
              translate(chapterData.text, { to: 'sw' }), 
              translate(chapterData.text, { to: 'en' }) 
            ]);
    
            translatedChapterSwahili = resultSw.join(' '); 
            translatedChapterEnglish = resultEn.join(' '); 
          } catch (e) {
            console.log('Translation error:', e.message);
          }
    
          let bibleChapter = `📖 *THE HOLY BIBLE*\n
    📜 *Reference:* ${chapterData.reference}
    📚 *Version:* ${chapterData.translation_name}
    📖 *Number of Verses:* ${chapterData.verses.length}\n
    🌍 *Chapter Content (English):*\n
    ${translatedChapterEnglish}\n
    🌍 *Chapter Content (Swahili):*\n
    ${translatedChapterSwahili}`;
    
          replyglobal(m, bibleChapter);
    
        } catch (error) {
          replyglobal(m, `Error: ${error.message}`);
        }
      })();
    }
    break;
    
    

    case "trt":
        case "translate": {
            if (!text && !m.quoted?.text) return replyglobal(m, `❌ Please provide or reply text to translate!\nExample: *${prefix + command} en habari yako!*`);
        
            try {
                const translate = require('translate-google-api');
                let [lang, ...textToTranslate] = text.split(' ');
                let content = m.quoted?.text || textToTranslate.join(' ');
        
                if (!lang) return replyglobal(m, `❌ Please specify a language code!\nExample: *${prefix + command} en habari yako!*`);
        
                const result = await translate(content, { to: lang });
                await DannyTechInc.sendMessage(
                    m.chat,
                    {
                        text: `🌐 Translation (${lang.toUpperCase()}):\n${result[0]}`,
                        contextInfo: {
                            forwardingScore: 5,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterName: "CREEPY TECH",
                                newsletterJid: "120363307517794567@newsletter"
                            },
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "CREEPY_MD-V2 TRANSLATE",
                                body: "Danny",
                                thumbnailUrl: 'https://files.catbox.moe/azia2c.jpg',
                                sourceUrl: global.link || "https://creepytech.org",
                                mediaType: 1
                            }
                        }
                    },
                    { quoted: m }
                );
            } catch (e) {
                replyglobal(m, `❌ Translation failed!\nError: ${e.message}`);
            }
        }
        break;


   case 'tagadmins': 
   case 'tagadmin': 
   case 'listadmin': 
   case 'admins': {
       if (!m.isGroup) return replyglobal(m, `❌ This command can only be used in groups.`);
   
       const groupAdmins = participants.filter(p => p.admin);
       if (groupAdmins.length === 0) return replyglobal(m, "🚫 No admins found in this group.");
   
       const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
       const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
   
       let messageText = `   
   📌 *Group Admins:*  
   ${listAdmin}
   `.trim();
   
       await DannyTechInc.sendMessage(
           m.chat,
           {
               text: messageText,
               mentions: [...groupAdmins.map(v => v.id), owner],
                   contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                   },
               },
           },
           { quoted: m }
       );
   }
   break;
   

case 'getpp':
case 'get-profile': {
    let target;
    if (!m.isGroup) {
        target = m.chat;
    }
    else if (m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo.mentionedJid) {
        target = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    }
    else if (args[0]) {
        target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; 
    }
    else {
        target = m.sender;
    }

    let username = target.split('@')[0];
    let profileCaption = `*@${username} profile picture*`;

    try {
        ppuser = await DannyTechInc.profilePictureUrl(target, 'image');
    } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'; 
    }

    ppDanny = await getBuffer(ppuser);

    DannyTechInc.sendMessage(from, { 
        image: ppDanny, 
        caption: profileCaption, 
        mentions: [target], 
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterName: "CREEPY TECH",
              newsletterJid: "120363307517794567@newsletter",
          },
        }
    }, { quoted: m });
}
break;



case 'creepyfy': {
  if (!text) return replyglobal(m, `*Example:* \n*${prefix + command} Robot on war zone with name creepy*`);
  await replyglobal(m, `*Generating image with Creepyfy, please wait..*`)

  try {
      const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;
      await DannyTechInc.sendMessage(
          m.chat,
          {
              image: { url: apiUrl },
              caption: `*creepyfy Image Generator*\n\n*Prompt:* ${text}`,
              contextInfo: {
                  forwardingScore: 5,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterName: "CREEPY TECH",
                      newsletterJid: "120363307517794567@newsletter",
                  },
              },
          },
          { quoted: m }
      );
  } catch (error) {
      console.error('Error in creepyfy command:', error);
      replyglobal(m, `*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
  break;
}

case 'mediafire': {
  if (!text) return replyglobal(m, `*Example*: ${prefix + command} https://www.mediafire.com/file/userneme/filename/file`);

  try {
      
      await DannyTechInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


      const apiUrl = `https://apis.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
      const apiResponse = await axios.get(apiUrl);

  
      if (apiResponse.data && apiResponse.data.downloadLink) {
          const { fileName, mimeType, downloadLink } = apiResponse.data;


          await DannyTechInc.sendMessage(m.chat, {
              document: { url: downloadLink },
              mimetype: mimeType,
              fileName: fileName,
              caption: `*File Name:* ${fileName}`,
                  contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                },
            },
          }, { quoted: m });
      } else {

          replyglobal(m, `*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
      }
  } catch (error) {

      console.error('Error during MediaFire command:', error);
      replyglobal(m, `*an error occurred while processing your request\nPlease type *report* to inform owner about this..*`);
  }
  break;
}



//=========================[apk]===========================//
case 'apk': {
  if (!text) return replyglobal(m, `📦 *Example:* ${prefix + command} WhatsApp`);

  try {
      const apiUrl = `https://api.giftedtech.web.id/api/download/apkdl?apikey=gifted&appName=${encodeURIComponent(text)}`;
      const response = await axios.get(apiUrl, { timeout: 15000 });

      if (!response.data || !response.data.success || !response.data.result?.download_link) {
          return replyglobal(m, '❌ *APK not found or failed to fetch.*\nPlease try again later.');
      }

      const { app_name, download_link, thumbnail } = response.data.result;

      // Send preview info with image
      await DannyTechInc.sendMessage(
          m.chat,
          {
              image: { url: thumbnail || 'https://files.catbox.moe/a7ckn2.jpeg' },
              caption: `📲 *APK Found!*\n\n📌 *App Name:* ${app_name}\n🔗 *Download Link:* ${download_link}`,
              contextInfo: {
                  forwardingScore: 5,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterName: "CREEPY TECH",
                      newsletterJid: "120363307517794567@newsletter",
                  },
                  externalAdReply: {
                      title: "APK Downloader",
                      body: "Powered by Danny Tech",
                      thumbnailUrl: thumbnail,
                      sourceUrl: download_link,
                      mediaType: 1,
                      renderLargerThumbnail: true
                  }
              }
          },
          { quoted: m }
      );

      // Send APK file
      await DannyTechInc.sendMessage(
          m.chat,
          {
              document: { url: download_link },
              mimetype: 'application/vnd.android.package-archive',
              fileName: `${app_name || 'App'}.apk`,
              contextInfo: {
                  forwardingScore: 5,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterName: "CREEPY TECH",
                      newsletterJid: "120363307517794567@newsletter",
                  },
                  externalAdReply: {
                      title: "CREEPY_MD-V2",
                      body: "𝐷𝛥𝛮𝛮𝑌 - APK Downloader",
                      thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                      sourceUrl: global.link || "https://creepytech.org",
                      mediaType: 1,
                      renderLargerThumbnail: true,
                      thumbnailHeight: 500,
                      thumbnailWidth: 500
                  }
              }
          },
          { quoted: m }
      ).catch(err => {
          console.error('Error sending APK file:', err);
          replyglobal(m, '⚠️ *Failed to send APK file. It may be too large for WhatsApp.*');
      });

  } catch (error) {
      console.error('❌ APK command error:', error?.response?.data || error.message);

      if (error.code === 'ECONNABORTED') {
          replyglobal(m, '⚠️ *Request timed out. Please try again.*');
      } else if (error.response && error.response.status === 404) {
          replyglobal(m, '❌ *APK not found. Please check the app name.*');
      } else {
          replyglobal(m, '❌ *Unexpected error occurred. Try again later.*');
      }
  }
  break;
}
//===============================[apk ends]===========================//


     case 'ss': case 'screenshot': case 'ssweb': {
  if (!args[0]) return m.replyglobal(m, `Please provide a link\n\n Example: ${prefix + command}.`);
  await DannyTechInc.sendMessage(m?.chat, { react: { text: `📸`, key: m?.key } });

  let apiUrl = `https://apis.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(args[0])}`;

  try {
    await DannyTechInc.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ Screenshot of ${args[0]}`, contextInfo: {
      forwardingScore: 5,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterName: "CREEPY TECH",
          newsletterJid: "120363307517794567@newsletter",
      },
  },  },  { quoted: m });
  } catch (error) {
    console.error(error);
    m.replyglobal(m, 'Failed to capture the screenshot. Please try again later.');
  }
  break;
}


case 'imdb':
case 'moviesearch': {
    if (!text) return replyglobal(m, `_Name a Series or movie_`);
    await replyglobal(m, `Please wait...`);

    try {
        let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
        let imdbt = "";
        console.log(fids.data);

        imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬Title      : " + fids.data.Title + "\n";
        imdbt += "📅Year       : " + fids.data.Year + "\n";
        imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
        imdbt += "📆Released   : " + fids.data.Released + "\n";
        imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
        imdbt += "✍Writer     : " + fids.data.Writer + "\n";
        imdbt += "👨Actors     : " + fids.data.Actors + "\n";
        imdbt += "📃Plot       : " + fids.data.Plot + "\n";
        imdbt += "🌐Language   : " + fids.data.Language + "\n";
        imdbt += "🌍Country    : " + fids.data.Country + "\n";
        imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
        imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️Production : " + fids.data.Production + "\n";
        imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + "";

        await DannyTechInc.sendMessage(
            m.chat,
            {
                image: { url: fids.data.Poster },
                caption: imdbt,
                contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
    } catch (error) {
        console.error('Error in IMDB command:', error);
        replyglobal(m, `*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
    }
    break;
}




//=======================================[define]======================================\\
case 'define': {
    let term = text || (m.quoted && m.quoted.text?.trim());

    if (!term) {
        return replyglobal(m, `🔤 *Usage:* ${prefix}define BMW\nOr reply to a message containing the word.`);
    }

    try {
        replyglobal(m, `🔎 Searching definition for *${term}*...`);

        let res = await axios.get(`https://api.giftedtech.web.id/api/tools/define?apikey=gifted&term=${encodeURIComponent(term)}`);

        if (!res.data || !res.data.success || !res.data.result || res.data.result.length === 0) {
            return replyglobal(m, `❌ *No definition found for:* _${term}_`);
        }

        let definitions = res.data.result;

        let replyText = `╭───〔 📚 𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽 〕───⬣\n`;
        replyText += `│ 📌 *Term:* ${term}\n│\n`;

        definitions.slice(0, 3).forEach((def, i) => {
            replyText += `│ 🧠 *Definition ${i + 1}:*\n│ ${def.definition}\n`;
            if (def.example) replyText += `│ 💡 *Example:*\n│ _${def.example}_\n│\n`;
        });

        replyText += `╰──────⬣`;

        await DannyTechInc.sendMessage(m.chat, {
            text: replyText,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                externalAdReply: {
                    title: "CREEPY TECH DICTIONARY",
                    body: `Meaning of '${term}'`,
                    thumbnailUrl: "https://files.catbox.moe/4y6ynv.jpg",
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500,
                },
            }
        }, { quoted: m });

    } catch (e) {
        console.error('Define Error:', e);
        replyglobal(m, "❌ *Failed to fetch definition. Try again later.*");
    }
    break;
}
//==========================[define ends]=========================\\

        

case 'rate': {
                if (!text) return replyglobal(m, `Example : ${prefix + command} my profile`)
                let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replyglobal(m, jawab)
            }
            break

            case 'soulmate': {
              if (!m.isGroup) return replyglobal(m, `For groups only`);
              let member = participants.map(u => u.id);
              let me = m.sender;
              let jodoh = member[Math.floor(Math.random() * member.length)];
              let randomThumbnail = 'https://files.catbox.moe/454dp6.jpg'; 
              DannyTechInc.sendMessage(m.chat, {
                  text: `👫Your Soulmate Is\n\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
                  contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });
              break;
          }
          case 'coffee':
            case 'cafe': {
                const creepyFacts = [
                    "CREEPY_MD-V2 is the most advanced AI bot you'll ever use! 🤖",
                    "With CREEPY_MD-V2, you can automate your tasks effortlessly. 🚀",
                    "CREEPY_MD-V2 supports over 1000 commands! 🎉",
                    "The bot is powered by cutting-edge AI technology. 💡",
                    "CREEPY_MD-V2 can fetch data from APIs in milliseconds. ⚡",
                    "It has a 99.9% uptime, ensuring you're always connected. 🌐",
                    "CREEPY_MD-V2 is designed to make your life easier. 😎",
                    "The bot can handle thousands of users simultaneously. 👥",
                    "It supports multimedia commands like images, videos, and audio. 🎨",
                    "CREEPY_MD-V2 is constantly updated with new features. 🔄",
                    "The bot is highly customizable to fit your needs. 🛠️",
                    "It has a built-in error handling system for smooth operation. 🛡️",
                    "CREEPY_MD-V2 can generate memes, quotes, and more! 🖼️",
                    "The bot supports multiple languages for global users. 🌍",
                    "It can fetch real-time data like weather, news, and stocks. 📊",
                    "CREEPY_MD-V2 is secure and protects your privacy. 🔒",
                    "The bot has a user-friendly interface for easy navigation. 🖥️",
                    "It can integrate with third-party apps and services. 🔗",
                    "CREEPY_MD-V2 is designed for both personal and professional use. 💼",
                    "The bot can send scheduled messages and reminders. ⏰",
                    "It has a built-in AI chatbot for interactive conversations. 💬",
                    "CREEPY_MD-V2 can generate random facts, jokes, and trivia. 🎲",
                    "The bot supports voice commands for hands-free operation. 🎙️",
                    "It can fetch and display high-quality images and videos. 📸",
                    "CREEPY_MD-V2 is optimized for fast and efficient performance. ⚙️",
                    "The bot has a dedicated support team for assistance. 👨‍💻",
                    "It can fetch and display trending topics and memes. 🔥",
                    "CREEPY_MD-V2 is compatible with all major platforms. 📱",
                    "The bot can generate QR codes and barcodes. 📇",
                    "It has a built-in translator for multilingual support. 🌐",
                    "CREEPY_MD-V2 can fetch and display movie and series details. 🎬",
                    "The bot can generate random quotes and inspirations. ✨",
                    "It has a built-in calculator and unit converter. 🧮",
                    "CREEPY_MD-V2 can fetch and display sports scores and updates. 🏀",
                    "The bot can generate random passwords and secure keys. 🔑",
                    "It has a built-in reminder system for important tasks. 📅",
                    "CREEPY_MD-V2 can fetch and display horoscopes and astrology. 🌌",
                    "The bot can generate random names, addresses, and more. 📝",
                    "It has a built-in AI image generator for creative designs. 🎨",
                    "CREEPY_MD-V2 can fetch and display cryptocurrency prices. 💹",
                    "The bot can generate random facts about science and history. 📚",
                    "It has a built-in AI voice assistant for voice commands. 🗣️",
                    "CREEPY_MD-V2 can fetch and display flight and travel info. ✈️",
                    "The bot can generate random memes and jokes. 😂",
                    "It has a built-in AI music player for entertainment. 🎵",
                    "CREEPY_MD-V2 can fetch and display news and headlines. 📰",
                    "The bot can generate random recipes and cooking tips. 🍳",
                    "It has a built-in AI fitness coach for health tips. 🏋️",
                    "CREEPY_MD-V2 can fetch and display game stats and updates. 🎮",
                    "The bot can generate random motivational quotes. 💪",
                    "It has a built-in AI tutor for educational support. 📖",
                ];
                const randomFact = creepyFacts[Math.floor(Math.random() * creepyFacts.length)];
                await DannyTechInc.sendMessage(
                    m.chat,
                    {
                        caption: `☕ *Here's your coffee!*\n\n*Did you know?*\n${randomFact}`,
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                      contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
        
        }
    }, { quoted: m });

                break;
            }

            case 'dare': {
              const dare = [
                  "Eat a raw chili pepper and record your reaction.",
                  "Call a random number and say, *'I know what you did last summer.'*",
                  "Send a voice note to your crush saying, *'I’ve been dreaming about you every night.'*",
                  "Post a status saying, *'I’m single and ready to mingle. Slide into my DMs if you dare.'* Leave it up for 3 hours.",
                  "Text your ex and say, *'I miss the way you used to make me feel. Can we talk?'*",
                  "Go to a public place and shout, *'I’m the king/queen of the world!'* at the top of your lungs.",
                  "Send a voice note singing the most cringy song you know and tag a random group member.",
                  "Change your profile picture to a meme of yourself for 24 hours.",
                  "Call your best friend and say, *'I’ve been hiding something from you… I’m in love with you.'* Don’t explain it’s a dare for 5 minutes.",
                  "Eat a raw onion like an apple and send a video as proof.",
                  "Send a voice note saying, *'I’m the most annoying person in the world, and I love it!'* to the last person you texted.",
                  "Post a status with the caption, *'I’m pregnant, and I don’t know who the father is.'* Leave it up for 1 hour.",
                  "Text your boss or teacher and say, *'I think I’m in love with you. Let’s run away together.'*",
                  "Send a voice note saying, *'I’m the dumbest person alive, and I’m proud of it!'* to a random group member.",
                  "Call a random contact and say, *'I’ve been watching you. Meet me at midnight if you dare.'*",
                  "Post a status with the caption, *'I’m quitting social media forever. Goodbye, everyone.'* Delete it after 30 minutes.",
                  "Send a voice note saying, *'I’m the most attractive person in this group, and you all know it.'* to the group chat.",
                  "Text your crush and say, *'I can’t stop thinking about you. What’s your favorite color? I need to know for… reasons.'*",
                  "Eat a spoonful of salt and record your reaction.",
                  "Send a voice note saying, *'I’m the best dancer in the world. Watch me!'* and then send a video of you dancing badly.",
                  "Call a random number and say, *'I’m your biggest fan. Can I have your autograph?'*",
                  "Post a status with the caption, *'I’m in love with my best friend. What should I do?'* Leave it up for 2 hours.",
                  "Send a voice note saying, *'I’m the most annoying person you’ll ever meet, and I’m proud of it!'* to the last person you called.",
                  "Text your ex and say, *'I still have your hoodie. Do you want it back, or should I keep it as a memory?'*",
                  "Call a random contact and say, *'I’m your secret admirer. Meet me at the park at midnight.'*",
                  "Post a status with the caption, *'I’m moving to Mars. Who’s coming with me?'* Leave it up for 1 hour.",
                  "Send a voice note saying, *'I’m the most talented person in this group, and I’m not afraid to show it!'* to the group chat.",
                  "Text your crush and say, *'I had a dream about you last night. It was… interesting.'*",
                  "Eat a spoonful of sugar and record your reaction.",
                  "Send a voice note saying, *'I’m the best singer in the world. Listen to this!'* and then sing the worst song you know.",
                  "Call a random number and say, *'I’m your biggest fan. Can I have your autograph?'*",
                  "Post a status with the caption, *'I’m in love with my best friend. What should I do?'* Leave it up for 2 hours.",
                  "Send a voice note saying, *'I’m the most annoying person you’ll ever meet, and I’m proud of it!'* to the last person you called.",
                  "Text your ex and say, *'I still have your hoodie. Do you want it back, or should I keep it as a memory?'*",
                  "Call a random contact and say, *'I’m your secret admirer. Meet me at the park at midnight.'*",
                  "Post a status with the caption, *'I’m moving to Mars. Who’s coming with me?'* Leave it up for 1 hour.",
                  "Send a voice note saying, *'I’m the most talented person in this group, and I’m not afraid to show it!'* to the group chat.",
                  "Text your crush and say, *'I had a dream about you last night. It was… interesting.'*",
                  "Eat a spoonful of sugar and record your reaction.",
                  "Send a voice note saying, *'I’m the best singer in the world. Listen to this!'* and then sing the worst song you know.",
                  "Call a random number and say, *'I’m your biggest fan. Can I have your autograph?'*",
                  "Post a status with the caption, *'I’m in love with my best friend. What should I do?'* Leave it up for 2 hours.",
                  "Send a voice note saying, *'I’m the most annoying person you’ll ever meet, and I’m proud of it!'* to the last person you called.",
                  "Text your ex and say, *'I still have your hoodie. Do you want it back, or should I keep it as a memory?'*",
                  "Call a random contact and say, *'I’m your secret admirer. Meet me at the park at midnight.'*",
                  "Post a status with the caption, *'I’m moving to Mars. Who’s coming with me?'* Leave it up for 1 hour.",
                  "Send a voice note saying, *'I’m the most talented person in this group, and I’m not afraid to show it!'* to the group chat.",
                  "Text your crush and say, *'I had a dream about you last night. It was… interesting.'*",
                  "Eat a spoonful of sugar and record your reaction.",
                  "Send a voice note saying, *'I’m the best singer in the world. Listen to this!'* and then sing the worst song you know.",
                  "Call a random number and say, *'I’m your biggest fan. Can I have your autograph?'*",
                  "Post a status with the caption, *'I’m in love with my best friend. What should I do?'* Leave it up for 2 hours.",
                  "Send a voice note saying, *'I’m the most annoying person you’ll ever meet, and I’m proud of it!'* to the last person you called.",
                  "Text your ex and say, *'I still have your hoodie. Do you want it back, or should I keep it as a memory?'*",
                  "Call a random contact and say, *'I’m your secret admirer. Meet me at the park at midnight.'*",
                  "Post a status with the caption, *'I’m moving to Mars. Who’s coming with me?'* Leave it up for 1 hour.",
                  "Send a voice note saying, *'I’m the most talented person in this group, and I’m not afraid to show it!'* to the group chat.",
                  "Text your crush and say, *'I had a dream about you last night. It was… interesting.'*",
                  "Eat a spoonful of sugar and record your reaction.",
                  "Send a voice note saying, *'I’m the best singer in the world. Listen to this!'* and then sing the worst song you know.",
                  "Call a random number and say, *'I’m your biggest fan. Can I have your autograph?'*",
                  "Post a status with the caption, *'I’m in love with my best friend. What should I do?'* Leave it up for 2 hours.",
                  "Send a voice note saying, *'I’m the most annoying person you’ll ever meet, and I’m proud of it!'* to the last person you called.",
                  "Text your ex and say, *'I still have your hoodie. Do you want it back, or should I keep it as a memory?'*",
                  "Call a random contact and say, *'I’m your secret admirer. Meet me at the park at midnight.'*",
                  "Post a status with the caption, *'I’m moving to Mars. Who’s coming with me?'* Leave it up for 1 hour.",
                  "Send a voice note saying, *'I’m the most talented person in this group, and I’m not afraid to show it!'* to the group chat.",
                  "Text your crush and say, *'I had a dream about you last night. It was… interesting.'*",
                  "Eat a spoonful of sugar and record your reaction.",
                  "Send a voice note saying, *'I’m the best singer in the world. Listen to this!'* and then sing the worst song you know."
              ];
          
              const Dannydare = dare[Math.floor(Math.random() * dare.length)];
              bufferdare = await getBuffer(`https://i.ibb.co/gLNc5SGK/ce5871f200bb421678c982f5af52d7fd.jpg`);
          
              await DannyTechInc.sendMessage(
                  from,
                  {
                      image: bufferdare,
                      caption: '_You choose DARE_\n' + Dannydare,
                      contextInfo: {
                          forwardingScore: 5,
                          isForwarded: true,
                          forwardedNewsletterMessageInfo: {
                              newsletterName: "CREEPY TECH",
                              newsletterJid: "120363307517794567@newsletter",
                          },
                      },
                  },
                  { quoted: m }
              );
              break;
          }




          case 'truth':
  const truth = [
    "Have you ever liked anyone? How long?",
    "If you could be friends with anyone in this group, who would it be?",
    "What is your biggest fear?",
    "Have you ever liked someone and felt they liked you back?",
    "What’s the name of your friend’s ex that you secretly had a crush on?",
    "Have you ever stolen money from your parents? Why?",
    "What makes you happy when you’re sad?",
    "Have you ever had a one-sided love? Who was it, and how did it feel?",
    "Have you ever been someone’s mistress?",
    "What’s the scariest thing you’ve ever experienced?",
    "Who is the most influential person in your life?",
    "What’s the proudest moment of your life this year?",
    "Who is the one person who can always cheer you up?",
    "Who has made you the happiest in your life?",
    "Who in this group is closest to your ideal type?",
    "Who do you enjoy spending the most time with?",
    "Have you ever rejected someone? Why?",
    "What’s the most painful memory you still remember?",
    "What’s the biggest achievement you’ve had this year?",
    "What’s your worst habit at school or work?",
    "What song do you sing the most in the shower?",
    "Have you ever had a near-death experience?",
    "When was the last time you were really angry, and why?",
    "Who was the last person to call you?",
    "Do you have any hidden talents? What are they?",
    "What word do you hate the most?",
    "What’s the last YouTube video you watched?",
    "What’s the last thing you Googled?",
    "Who in this group would you swap lives with for a week?",
    "What’s the scariest thing that’s ever happened to you?",
    "Have you ever farted and blamed it on someone else?",
    "When was the last time you made someone cry?",
    "Have you ever ghosted a friend?",
    "Have you ever seen a dead body?",
    "Which family member annoys you the most, and why?",
    "If you had to delete one app from your phone, which one would it be?",
    "What app do you waste the most time on?",
    "Have you ever faked being sick to get out of something?",
    "What’s the most embarrassing thing in your room?",
    "What five items would you bring to a deserted island?",
    "Have you ever laughed so hard you peed your pants?",
    "Do you smell your own farts?",
    "Have you ever peed in your bed while sleeping?",
    "What’s the biggest mistake you’ve ever made?",
    "Have you ever cheated on a test?",
    "What’s the worst thing you’ve ever done?",
    "When was the last time you cried?",
    "Who do you love more: your mom or your dad?",
    "Do you sometimes pick your nose?",
    "Who was your childhood crush?",
    "Do you like anyone in this group? If yes, who?",
    "Do you have a boyfriend or girlfriend?",
    "What’s your biggest fear?",
    "Have you ever liked someone and felt they liked you back?",
    "What’s the name of your friend’s ex that you secretly liked?",
    "Have you ever stolen money from your parents? Why?",
    "What makes you happy when you’re sad?",
    "Do you like someone in this group? If yes, who?",
    "Have you ever been cheated on?",
    "Who is the most important person in your life?",
    "What’s the proudest moment of your life this year?",
    "Who is the one person who can always cheer you up?",
    "Who has made you feel uncomfortable in your life?",
    "Have you ever lied to your parents?",
    "Do you still have feelings for your ex?",
    "Who do you enjoy spending the most time with?",
    "Have you ever stolen something big? Why?",
    "What’s the most painful memory you still remember?",
    "What’s the biggest achievement you’ve had this year?",
    "What’s your worst habit at school or work?",
    "Do you love the bot creator, Danny? 😏",
    "Have you ever thought about getting revenge on a teacher?",
    "Do you like the current prime minister of your country?",
    "Are you a vegetarian or non-vegetarian?",
    "If you could be invisible, what’s the first thing you’d do?",
    "What’s a secret you’ve kept from your parents?",
    "Who is your secret crush?",
    "Who was the last person you stalked on social media?",
    "If a genie granted you three wishes, what would you ask for?",
    "What’s your biggest regret?",
    "What animal do you think you look like the most?",
    "How many selfies do you take in a day?",
    "What was your favorite childhood show?",
    "If you could be a fictional character for a day, who would you choose?",
    "Who do you text the most?",
    "What’s the biggest lie you’ve told your parents?",
    "Who is your celebrity crush?",
    "What’s the strangest dream you’ve ever had?",
    "Do you play PUBG? If yes, share your ID.",
    "What’s the most embarrassing thing you’ve done in public?",
    "Have you ever lied to your best friend?",
    "What’s the most expensive thing you’ve stolen?",
    "Have you ever had a crush on a teacher?",
    "What’s the weirdest thing you’ve ever eaten?",
    "Have you ever been in love with two people at the same time?",
    "What’s the most childish thing you still do?",
    "Have you ever been caught doing something you shouldn’t?",
    "What’s the most embarrassing text you’ve sent?",
    "Have you ever pretended to like a gift?",
    "What’s the most ridiculous rumor you’ve heard about yourself?",
    "Have you ever had a crush on a friend’s partner?",
    "What’s the most embarrassing thing your parents have caught you doing?",
    "Have you ever lied about your age?",
    "What’s the most embarrassing thing you’ve posted online?",
    "Have you ever cheated in a relationship?",
    "What’s the most embarrassing thing you’ve done to impress someone?",
    "Have you ever had a crush on a celebrity?",
    "What’s the most embarrassing thing you’ve done at work or school?",
    "Have you ever lied to get out of trouble?",
    "What’s the most embarrassing thing you’ve done in front of your crush?",
    "Have you ever had a crush on someone much older or younger than you?",
    "What’s the most embarrassing thing you’ve done while drunk?",
    "Have you ever lied about your relationship status?",
    "What’s the most embarrassing thing you’ve done to get someone’s attention?"
  ];

  const dannytruth = truth[Math.floor(Math.random() * truth.length)];
  buffertruth = await getBuffer(`https://i.ibb.co/gLNc5SGK/ce5871f200bb421678c982f5af52d7fd.jpg`);
  
  await DannyTechInc.sendMessage(
      from,
      {
          image: buffertruth,
          caption: '_You choose TRUTH_\n' + dannytruth,
          contextInfo: {
              forwardingScore: 5,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                  newsletterName: "CREEPY TECH",
                  newsletterJid: "120363307517794567@newsletter",
              },
          },
      },
      { quoted: m }
  );
  break;


  case 'checkme':
  case 'whoami':
  neme = args.join(" ");
  bet = `${sender}`;
  var sifat = ['Fine', 'Unfriendly', 'Chapri', 'Nibba/nibbi', 'Annoying', 'Dilapidated', 'Angry person', 'Polite', 'Burden', 'Great', 'Cringe', 'Liar'];
  var hoby = ['Cooking', 'Dancing', 'Playing', 'Gaming', 'Painting', 'Helping Others', 'Watching anime', 'Reading', 'Riding Bike', 'Singing', 'Chatting', 'Sharing Memes', 'Drawing', 'Eating Parents Money', 'Playing Truth or Dare', 'Staying Alone'];
  var bukcin = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var arp = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var cakep = ['Yes', 'No', 'Very Ugly', 'Very Handsome'];
  var wetak = ['Caring', 'Generous', 'Angry person', 'Sorry', 'Submissive', 'Fine', 'Im sorry', 'Kind Hearted', 'Patient', 'UwU', 'Top', 'Helpful'];
  var baikk = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var bhuruk = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var cerdhas = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var berhani = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var mengheikan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  var sipat = sifat[Math.floor(Math.random() * sifat.length)];
  var biho = hoby[Math.floor(Math.random() * hoby.length)];
  var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)];
  var senga = arp[Math.floor(Math.random() * arp.length)];
  var chakep = cakep[Math.floor(Math.random() * cakep.length)];
  var watak = wetak[Math.floor(Math.random() * wetak.length)];
  var baik = baikk[Math.floor(Math.random() * baikk.length)];
  var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)];
  var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)];
  var berani = berhani[Math.floor(Math.random() * berhani.length)];
  var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)];

  profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`;

try {
  ppuser = await DannyTechInc.profilePictureUrl(m.sender, 'image');
} catch (err) {
  ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
}

ppDanny = await getBuffer(ppuser);

await DannyTechInc.sendMessage(
  from,
  {
      image: ppDanny,
      caption: profile,
      mentions: [bet],
      contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterName: "CREEPY TECH",
              newsletterJid: "120363307517794567@newsletter",
          },
      },
  },
  { quoted: m }
);
break;

case 'handsomecheck':
case 'handsome': {
  if (!text) return replyglobal(m, `just Tag Someone,\n Example : ${prefix + command} @Danny Tech`);
  const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  const teng = gan[Math.floor(Math.random() * gan.length)];
  await DannyTechInc.sendMessage(
      from,
      {
          text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`,
          contextInfo: {
              forwardingScore: 5,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                  newsletterName: "CREEPY TECH",
                  newsletterJid: "120363307517794567@newsletter",
              },
          },
      },
      { quoted: m }
  );
  break;
}

case 'beautifulcheck':
case 'beautiful':
case 'beauty':{
  if (!text) return replyglobal(m, `just Tag Someone, Example : ${prefix + command} @Kaylah`);
  const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'];
  const tik = can[Math.floor(Math.random() * can.length)];
  await DannyTechInc.sendMessage(
      from,
      {
          text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*`,
          contextInfo: {
              forwardingScore: 5,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                  newsletterName: "CREEPY TECH",
                  newsletterJid: "120363307517794567@newsletter",
              },
          },
      },
      { quoted: m }
  );
  break;
}

case 'charactercheck':
case 'character': {
  if (!text) return replyglobal(m, `just Tag Someone, Example : ${prefix + command} @Danny Tech`);
  const Dannytech = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'Patient', 'UwU', 'Top', 'Helpful'];
  const taky = Dannytech[Math.floor(Math.random() * Dannytech.length)];
  await DannyTechInc.sendMessage(
      from,
      {
          text: `Character Check : ${q}\nAnswer : *${taky}*`,
          contextInfo: {
              forwardingScore: 5,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                  newsletterName: "CREEPY TECH",
                  newsletterJid: "120363307517794567@newsletter",
              },
          },
      },
      { quoted: m }
  );
  break;
}

case 'imgsearch':
case 'img': {
    if (!text) {
        return replyglobal(m, `*Provide ammount of images you need*\nExample: ${prefix + command} 2 ferrari`);
    }

    const [num, ...queryParts] = text.split(" ");
    const query = queryParts.join(" ");

    const numImages = parseInt(num);
    if (isNaN(numImages) || numImages < 1 || numImages > 10) {
        return replyglobal(m, `Please choose a number between 1 and 10.\nExample: ${prefix + command} 2 ferrari`);
    }

    try {
        await DannyTechInc.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

        const apiResponse = await axios.get(`https://apis.davidcyriltech.my.id/googleimage`, {
            params: { query: query }
        });

        const { success, results } = apiResponse.data;

        if (!success || !results || results.length === 0) {
            return replyglobal(m, `❌ No images found for "${query}". Try another search.`);
        }

        const maxImages = Math.min(results.length, numImages);
        for (let i = 0; i < maxImages; i++) {
            await DannyTechInc.sendMessage(
                m.chat,
                {
                    image: { url: results[i] },
                    caption: `📡 *Creepy Image Search*\n🔎 *Query:* "${query}"\n📠 *Result:* ${i + 1}/${maxImages}`,
                    contextInfo: {
                        forwardingScore: 5,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "CREEPY TECH",
                            newsletterJid: "120363307517794567@newsletter",
                        },
                    },
                },
                { quoted: m }
            );
        }

        await DannyTechInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error("Error in Image Search:", error);
        replyglobal(m, `❌ *Error fetching images. Try again later.*`);
    }
    break;
}


case 'removebg':
case 'nobg': {
    if (!quoted) return replyglobal(m, `Send/Reply Image With Caption ${prefix + command}`);
    if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`);
    let q = m.quoted ? m.quoted : m;
    let media = await q.download();
    let url = await uploadImage(media);
    let anu = await fetch(`https://aemt.me/removebg?url=${url}`);
    let data = await anu.json();
    await DannyTechInc.sendMessage(m.chat, { image: { url: data.url.result }, caption: `Here u go!` }, { quoted: m });
    break;
}

case 'tozombie': {
    if (!quoted) return replyglobal(m, `Send/Reply Image With Caption ${prefix + command}`);
    if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`);
    let q = m.quoted ? m.quoted : m;
    let media = await q.download();
    let url = await uploadImage(media);
    let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`);
    let data = await anu.json();
    await DannyTechInc.sendMessage(m.chat, { image: { url: data.url }, caption: `Here u go!` }, { quoted: m });
    break;
}

case 'capcut': {
    if (!text) return replyglobal(m, `Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`);
    await DannyTechInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
    try {
        let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`);
        DannyTechInc.sendMessage(m.chat, { video: { url: anu.result.video_ori }, caption: `Here u go!` }, { quoted: m });
        await DannyTechInc.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
    } catch (error) {
        await DannyTechInc.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
    }
    break;
}


case 'spam': {
  if (!isCreator) return replyglobal(m, `You are not my owner`); 
  if (!text) return replyglobal(m, `Use ${prefix + command} text|amount`); 
  let Dannyarg = text.split("|"); 
  if (!Dannyarg[1]) return replyglobal(m, `Use ${prefix + command} text|amount`); 
  if (Number(Dannyarg[1]) >= 50) return replyglobal(m, 'Max 50!'); 
  if (isNaN(Dannyarg[1])) return replyglobal(m, `Amount must be a number`); 
  for (let i = 0; i < Dannyarg[1]; i++) {
      DannyTechInc.sendMessage(from, { text: Dannyarg[0] });
  }
  break;
}


case 'question':
case 'ask': {
    if (!text) return replyglobal(m, 'What do u want to ask?'); 
    let simi = await fetchJson(`https://aemt.me/simi?text=${text}`);
    const simi2 = simi.result; 
    DannyTechInc.sendMessage(m.chat, { text: simi2 }, { quoted: m }); 
    break;
}

case 'clearall':
 case 'clearemessages':    {
    if (!isCreator) return replyglobal(m, `You are not my owner`); 
    DannyTechInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat); 
    break;
}

case 'pinchat': {
    if (!isCreator) return replyglobal(m, `you are not my owner`); 
    if (m.isGroup) return replyglobal(m, `use this in my dm`); 
    DannyTechInc.chatModify({ pin: true }, m.chat); 
    break;
}

case 'unpinchat': {
    if (!isCreator) return replyglobal(m, `You are not my owner`); 
    if (m.isGroup) return replyglobal(m, `use this in my dm`); 
    DannyTechInc.chatModify({ pin: false }, m.chat); 
    break;
}

case 'pin': {
    if (!isCreator) return replyglobal(m, `you are not my owner`);
    if (!m.quoted) return replyglobal(m, 'Reply to a message to pin it!'); 
    if (!text) return replyglobal(m, 'Specify the duration: 24, 7, or 30'); 

    let duration = text.trim(); 
    let durationMs;
    switch (duration) {
        case '24':
            durationMs = 24 * 60 * 60 * 1000; 
            break;
        case '7':
            durationMs = 7 * 24 * 60 * 60 * 1000; 
            break;
        case '30':
            durationMs = 30 * 24 * 60 * 60 * 1000; 
            break;
        default:
            return replyglobal(m, 'Invalid duration! Use 24, 7, or 30.'); 
    }
    DannyTechInc.chatModify(
        {
            pin: true,
            messageKeys: [m.quoted.key], 
            duration: durationMs 
        },
        m.chat
    );

    replyglobal(m, `Message pinned for ${duration} ${duration === '24' ? 'hour' : 'days'}!`); // Confirm the pin
    break;
}

case 'getjoinrequest':
case 'join-request': 
case 'requets':   {
  if (!isGroup) return replyglobal(m, 'This command can only be used in groups!');
  if (!isBotAdmins) return replyglobal(m, 'I am not an admin in this group!');
  if (!isAdmins && !isCreator) return replyglobal(m, 'You are not an admin!');

  const response = await DannyTechInc.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
      replyglobal(m, 'No pending join requests. ✅');
      return;
  }

  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
      const { jid, request_method, request_time } = request;
      const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
      replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
      replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
      replyMessage += `\n🧪 *Method:* ${request_method}`;
      replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  replyglobal(m, replyMessage);
  break;
}



case 'approveall': 
case 'approve': 
case 'approve-requests':
 case 'approverequests':    {
    if (!isGroup) return replyglobal(m, 'This command can only be used in groups!');
    if (!isBotAdmins) return replyglobal(m, 'I need to be an admin to approve requests!');
    if (!isAdmins && !isCreator) return replyglobal(m, 'Only group admins can use this command!');
    const response = await DannyTechInc.groupRequestParticipantsList(m.chat);
    if (!response || !response.length) {
        return replyglobal(m, 'No pending join requests to approve. ✅');
    }
    for (let request of response) {
        await DannyTechInc.groupRequestParticipantsUpdate(m.chat, [request.jid], 'approve');
        await sleep(1500); 
    }

    replyglobal(m, `✅ Approved all ${response.length} pending join requests successfully.`);
}
break;



  case 'stickersearch':
    case 'stsearch': {
    if (!text) return replyglobal(m, `Example : ${prefix + command} tommy shelby`);
    let js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${text}`);
    let json = await js.json();
    if (!json || !json.length) return replyglobal(m, 'No results found!');
    replyglobal(m, `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
    break;
}

case 'apksearch': {
  if (!text) return replyglobal(m, `Example : ${prefix + command} whatsapp`);
  let js = await fetch(`https://dikaardnt.com/api/search/apk?q=${text}`);
  let json = await js.json();
  if (!json || !json.length) return replyglobal(m, 'No results found!');
  let capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Developer : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
  await DannyTechInc.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m });
  break;
}



case 'readmore': {
  let [l, r] = text.split`|`;
  if (!l) l = '';
  if (!r) r = '';
  DannyTechInc.sendMessage(m.chat, { text: l + readmore + r }, { quoted: m });
  break;
}



//================[shortlink cmd]=================\\


case 'shortener':
case 'shortlink':
case 'shortenlink':
case 'cutlink':
case 'tinyurl':
case 'shorturl': {
  if (!text) return replyglobal(m, `❌ Please provide a URL to shorten.\nExample: ${prefix + command} https://danny.creepytech.org`);

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    if (!response.data || !response.data.success) {
      return replyglobal(m, '❌ Failed to shorten the URL. Please try again later.');
    }

    const shortUrl = response.data.result;

    await DannyTechInc.sendMessage(
      m.chat,
      {
        text: `🔗 *Shortened URL:*\n${shortUrl}`,
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "CREEPY TECH",
            newsletterJid: "120363307517794567@newsletter",
          }
        }
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error in URL shortener command:', error);
    replyglobal(m, '❌ An error occurred while shortening the URL. Please try again later.');
  }
}
break;



//=============================[short link ends]==================\\

////vcf////
case 'vcf': {
    if (!m.isGroup) return replyglobal(m, "❌ This command only works in groups!");

    const groupMetadata = await DannyTechInc.groupMetadata(m.chat);
    const participants = groupMetadata.participants;
    const groupName = groupMetadata.subject;
    const memberCount = participants.length;

    if (!participants.length) return replyglobal(m, "❌ No members found in this group.");

    await replyglobal(m, `📌 Saving ${memberCount} contacts for group *${groupName}*...\n\nPlease wait...`);

    let vcfContent = "";

    for (let participant of participants) {
        const number = participant.id.split('@')[0];
        const pushname = (await DannyTechInc.getName(participant.id)) || number; 

        vcfContent += `BEGIN:VCARD\nVERSION:3.0\nFN:${pushname}\nTEL;TYPE=CELL:+${number}\nEND:VCARD\n\n`;
    }
    const vcfFilePath = './group_contacts.vcf';
    fs.writeFileSync(vcfFilePath, vcfContent);
    const vcfBuffer = fs.readFileSync(vcfFilePath);
    const captionText = `📂 *${groupName}* \n\n Saved ${memberCount} contacts with names\n\n> CREEPY_MD-V2`;
    await DannyTechInc.sendMessage(m.chat, {
        document: vcfBuffer,
        mimetype: 'text/vcard',
        fileName: `${groupName} Contacts.vcf`,
        caption: captionText,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });

    break;
}



/////// GAMES BY DANNY///////

let guessGameState = {};
let triviaState = {};
let hangmanState = {};
let wordScrambleState = {};
let mathQuizState = {};
let riddleState = {};

let triviaQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "william shakespeare" }
];

let riddles = [
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" }
];

let hangmanWords = ["elephant", "computer", "javascript", "giraffe"];
let scrambleWords = ["planet", "ocean", "castle", "banana"];
let mathQuestions = [
    { question: "5 + 3", answer: "8" },
    { question: "12 - 7", answer: "5" },
    { question: "6 × 6", answer: "36" }
];

switch (command) {

    // 1️⃣ Guess the Number
    case 'guess': {
        if (!text) return replyglobal(m, `Usage: ${prefix + command} <number>`);
        if (!guessGameState[m.sender]) {
            guessGameState[m.sender] = { target: Math.floor(Math.random() * 100) + 1, attempts: 0 };
        }

        let guess = parseInt(text);
        if (isNaN(guess)) return replyglobal(m, "Enter a valid number.");

        guessGameState[m.sender].attempts++;
        if (guess < guessGameState[m.sender].target) return replyglobal(m, "Too low! Try again.");
        if (guess > guessGameState[m.sender].target) return replyglobal(m, "Too high! Try again.");

        replyglobal(m, `🎉 Correct! You guessed it in ${guessGameState[m.sender].attempts} tries.`);
        delete guessGameState[m.sender];
        break;
    }

    // 2️⃣ Rock-Paper-Scissors
    case 'rps': {
        if (!text) return replyglobal(m, `Usage: ${prefix + command} <rock|paper|scissors>`);
        let choices = ['rock', 'paper', 'scissors'];
        let userChoice = text.toLowerCase();
        if (!choices.includes(userChoice)) return replyglobal(m, "Choose rock, paper, or scissors.");

        let botChoice = choices[Math.floor(Math.random() * 3)];
        let result = (userChoice === botChoice) ? "It's a tie!" :
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper') ? "You win! 🎉" : "You lose! 😢";

        replyglobal(m, `You: ${userChoice} | Bot: ${botChoice} | ${result}`);
        break;
    }

    // 3️⃣ Trivia Quiz
    case 'trivia': {
        if (!triviaState[m.sender]) {
            let q = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
            triviaState[m.sender] = q;
            return replyglobal(m, `🤔 Trivia: ${q.question}`);
        }

        let answer = text.toLowerCase().trim();
        if (answer === triviaState[m.sender].answer.toLowerCase()) {
            replyglobal(m, "🎉 Correct answer!");
            delete triviaState[m.sender];
        } else {
            replyglobal(m, "❌ Incorrect! Try again.");
        }
        break;
    }

    // 4️⃣ Word Scramble
    case 'scramble': {
        if (!wordScrambleState[m.sender]) {
            let word = scrambleWords[Math.floor(Math.random() * scrambleWords.length)];
            wordScrambleState[m.sender] = word;
            let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
            return replyglobal(m, `🔡 Unscramble this: ${scrambled}`);
        }

        if (text.toLowerCase() === wordScrambleState[m.sender]) {
            replyglobal(m, "🎉 Correct! You got it.");
            delete wordScrambleState[m.sender];
        } else {
            replyglobal(m, "❌ Incorrect! Try again.");
        }
        break;
    }

    // 5️⃣ Hangman
    case 'hangman': {
        if (!hangmanState[m.sender]) {
            let word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
            hangmanState[m.sender] = { word, guessed: '_'.repeat(word.length), attempts: 6 };
            return replyglobal(m, `🎭 Hangman: ${hangmanState[m.sender].guessed} | Attempts left: 6`);
        }

        let game = hangmanState[m.sender];
        if (text.length !== 1) return replyglobal(m, "Guess one letter at a time.");
        if (game.word.includes(text)) {
            game.word.split('').forEach((char, i) => {
                if (char === text) game.guessed = game.guessed.substring(0, i) + text + game.guessed.substring(i + 1);
            });
        } else {
            game.attempts--;
        }

        if (game.guessed === game.word) {
            replyglobal(m, "🎉 You guessed the word!");
            delete hangmanState[m.sender];
        } else if (game.attempts === 0) {
            replyglobal(m, `💀 You lost! The word was ${game.word}`);
            delete hangmanState[m.sender];
        } else {
            replyglobal(m, `🎭 Hangman: ${game.guessed} | Attempts left: ${game.attempts}`);
        }
        break;
    }



    // 7️⃣ Coin Flip
    case 'flip': {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";
        replyglobal(m, `🪙 The coin landed on: ${result}`);
        break;
    }

    // 8️⃣ Dice Roll
    case 'dice': {
        let result = Math.floor(Math.random() * 6) + 1;
        replyglobal(m, `🎲 You rolled a ${result}!`);
        break;
    }

    // 9️⃣ Riddle Game
    case 'riddle': {
        if (!riddleState[m.sender]) {
            let r = riddles[Math.floor(Math.random() * riddles.length)];
            riddleState[m.sender] = r;
            return replyglobal(m, `🧩 Riddle: ${r.question}`);
        }

        if (text.toLowerCase() === riddleState[m.sender].answer.toLowerCase()) {
            replyglobal(m, "🎉 Correct answer!");
            delete riddleState[m.sender];
        } else {
            replyglobal(m, "❌ Wrong! Try again.");
        }
        break;
    }

    // 🔟 Random Number Generator
    case 'random': {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        replyglobal(m, `🎲 Your random number: ${randomNum}`);
        break;
    }
}






// Tic Tac Toe Game
case 'ttc':
case 'ttt':
case 'tictactoe': {
    let TicTacToe = require("./lib/tictactoe.js");
    this.game = this.game ? this.game : {};
    if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) {
        return replyglobal(m, "You are still in a game. Finish it first!");
    }
    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
    if (room) {
        replyglobal(m, "Partner found! Starting the game...");
        room.o = m.chat;
        room.game.playerO = m.sender;
        room.state = 'PLAYING';
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v];
        });
        let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`;
        if (room.x !== room.o) {
            await DannyTechInc.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m });
        }
        await DannyTechInc.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m });
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        };
        if (text) room.name = text;
        replyglobal(m, "Waiting for a partner..." + (text ? ` Type the command below: ${prefix}${command} ${text}` : ''));
        this.game[room.id] = room;
    }
}
break;

// Delete Tic Tac Toe Session
case 'delttc':
case 'delttt': {
    this.game = this.game ? this.game : {};
    try {
        if (this.game) {
            delete this.game;
            replyglobal(m, "Successfully deleted the Tic Tac Toe session.");
        } else {
            replyglobal(m, "No active Tic Tac Toe session found.");
        }
    } catch (e) {
        console.error("Error deleting Tic Tac Toe session:", e);
        replyglobal(m, "An error occurred while deleting the session.");
    }
}
break;

// Suit PvP Game
case 'suitpvp':
case 'suit': {
    this.suit = this.suit ? this.suit : {};
    let poin = 10;
    let poin_lose = 10;
    let timeout = 60000;
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) {
        return replyglobal(m, "Finish your previous Suit game first!");
    }
    if (m.mentionedJid[0] === m.sender) return replyglobal(m, "You can't play with yourself!");
    if (!m.mentionedJid[0]) return replyglobal(m, `_Who do you want to challenge?_\nTag the person..\n\nExample: ${prefix}suit @${owner[1]}`, { mentions: [owner[1] + '@s.whatsapp.net'] });
    if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) {
        return replyglobal(m, "The person you are challenging is already in a Suit game.");
    }
    let id = 'suit_' + new Date() * 1;
    let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play Suit.

@${m.mentionedJid[0].split`@`[0]}, please type *accept* or *reject* to respond.`;
    this.suit[id] = {
        chat: await DannyTechInc.sendMessage(m.chat, { text: caption, mentions: parseMention(caption) }, { quoted: m }),
        id: id,
        p: m.sender,
        p2: m.mentionedJid[0],
        status: 'wait',
        waktu: setTimeout(() => {
            if (this.suit[id]) DannyTechInc.sendMessage(m.chat, { text: "Suit time is up." }, { quoted: m });
            delete this.suit[id];
        }, timeout),
        poin,
        poin_lose,
        timeout
    };
}
break;

// Math Quiz Game
case 'mathquiz':
case 'math': {
    if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
        return replyglobal(m, "You still have an unfinished math quiz session!");
    }
    let { genMath, modes } = require('./lib/math.js');
    if (!text) return replyglobal(m, `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`);
    let result = await genMath(text.toLowerCase());
    await DannyTechInc.sendMessage(m.chat, { text: `*What is the result of: ${result.soal.toLowerCase()}?*\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds` }, { quoted: m });
    kuismath[m.sender.split('@')[0]] = result.jawaban;
    await sleep(result.waktu);
    if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
        replyglobal(m, `Time's up!\nAnswer: ${kuismath[m.sender.split('@')[0]]}`);
        delete kuismath[m.sender.split('@')[0]];
    }
}
break;




case 'openai': {
    if (!q) return replyglobal(m, `Example: ${prefix + command} Who is Ronaldo?`);
    let isiai = await fetchJson(`https://aemt.me/openai?text=${q}`);
    let isi = isiai.result;
    await replyglobal(m, isi);
}
break;

// XXQC Command
case 'xxqc': {
    if (!q) return replyglobal(m, `📌 Example: ${prefix + command} pink Hello\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeepink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`);
    if (text.length > 100) return replyglobal(m, "Maximum 100 characters allowed.");
    let [color, ...message] = text.split(' ');
    message = message.join(' ');
    let backgroundColor;
    switch (color) {
        case 'pink': backgroundColor = '#f68ac9'; break;
        case 'blue': backgroundColor = '#6cace4'; break;
        case 'red': backgroundColor = '#f44336'; break;
        case 'green': backgroundColor = '#4caf50'; break;
        case 'yellow': backgroundColor = '#ffeb3b'; break;
        case 'purple': backgroundColor = '#9c27b0'; break;
        case 'darkblue': backgroundColor = '#0d47a1'; break;
        case 'lightblue': backgroundColor = '#03a9f4'; break;
        case 'ash': backgroundColor = '#9e9e9e'; break;
        case 'orange': backgroundColor = '#ff9800'; break;
        case 'black': backgroundColor = '#000000'; break;
        case 'white': backgroundColor = '#ffffff'; break;
        case 'teal': backgroundColor = '#008080'; break;
        case 'lightpink': backgroundColor = '#FFC0CB'; break;
        case 'chocolate': backgroundColor = '#A52A2A'; break;
        case 'salmon': backgroundColor = '#FFA07A'; break;
        case 'magenta': backgroundColor = '#FF00FF'; break;
        case 'tan': backgroundColor = '#D2B48C'; break;
        case 'wheat': backgroundColor = '#F5DEB3'; break;
        case 'deeppink': backgroundColor = '#FF1493'; break;
        case 'fire': backgroundColor = '#B22222'; break;
        case 'skyblue': backgroundColor = '#00BFFF'; break;
        case 'safron': backgroundColor = '#FF7F50'; break;
        case 'brightskyblue': backgroundColor = '#1E90FF'; break;
        case 'hotpink': backgroundColor = '#FF69B4'; break;
        case 'lightskyblue': backgroundColor = '#87CEEB'; break;
        case 'seagreen': backgroundColor = '#20B2AA'; break;
        case 'darkred': backgroundColor = '#8B0000'; break;
        case 'orangered': backgroundColor = '#FF4500'; break;
        case 'cyan': backgroundColor = '#48D1CC'; break;
        case 'violet': backgroundColor = '#BA55D3'; break;
        case 'mossgreen': backgroundColor = '#00FF7F'; break;
        case 'darkgreen': backgroundColor = '#008000'; break;
        case 'navyblue': backgroundColor = '#191970'; break;
        case 'darkorange': backgroundColor = '#FF8C00'; break;
        case 'darkpurple': backgroundColor = '#9400D3'; break;
        case 'fuchsia': backgroundColor = '#FF00FF'; break;
        case 'darkmagenta': backgroundColor = '#8B008B'; break;
        case 'darkgray': backgroundColor = '#2F4F4F'; break;
        case 'peachpuff': backgroundColor = '#FFDAB9'; break;
        case 'darkishgreen': backgroundColor = '#BDB76B'; break;
        case 'darkishred': backgroundColor = '#DC143C'; break;
        case 'goldenrod': backgroundColor = '#DAA520'; break;
        case 'darkishgray': backgroundColor = '#696969'; break;
        case 'darkishpurple': backgroundColor = '#483D8B'; break;
        case 'gold': backgroundColor = '#FFD700'; break;
        case 'silver': backgroundColor = '#C0C0C0'; break;
        default: return replyglobal(m, "The selected color is not available.");
    }
    let obj = {
        type: 'quote',
        format: 'png',
        backgroundColor,
        width: 512,
        height: 768,
        scale: 2,
        messages: [{
            entities: [],
            avatar: true,
            from: {
                id: 1,
                name: pushname,
                photo: {
                    url: await DannyTechInc.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
                }
            },
            text: message,
            replyMessage: {},
        }],
    };
    let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let buffer = Buffer.from(response.data.result.image, 'base64');
    await DannyTechInc.sendMessage(m.chat, { sticker: buffer }, { quoted: m });
}
break;

// Ephemeral Messages
case 'ephemeral': {
    if (!m.isGroup) return replyglobal(m, "This command can only be used in groups.");
    if (!isBotAdmins) return replyglobal(m, "The bot must be an admin to use this command.");
    if (!isAdmins) return replyglobal(m, "You must be an admin to use this command.");
    if (!text) return replyglobal(m, "Enter the value: on/off");
    if (args[0] === 'on') {
        await DannyTechInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL });
        replyglobal(m, "Ephemeral messages enabled.");
    } else if (args[0] === 'off') {
        await DannyTechInc.sendMessage(m.chat, { disappearingMessagesInChat: false });
        replyglobal(m, "Ephemeral messages disabled.");
    }
}
break;


///////GAMES WILL END HERE//////





////// Anime second /////



case 'shinobu':{
    axios.get(`https://api.waifu.pics/sfw/shinobu`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickhandhold': {
    axios.get(`https://api.waifu.pics/sfw/handhold`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickshinobu': {
    axios.get(`https://api.waifu.pics/sfw/shinobu`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickhighfive': {
    axios.get(`https://api.waifu.pics/sfw/highfive`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickcuddle': {
    axios.get(`https://api.waifu.pics/sfw/cuddle`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickcringe': {
    axios.get(`https://api.waifu.pics/sfw/cringe`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickdance': {
    axios.get(`https://api.waifu.pics/sfw/dance`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickhappy': {
    axios.get(`https://api.waifu.pics/sfw/happy`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickglomp': {
    axios.get(`https://api.waifu.pics/sfw/glomp`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'sticksmug': {
    axios.get(`https://api.waifu.pics/sfw/smug`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickblush': {
    axios.get(`https://api.waifu.pics/sfw/blush`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickawoo': {
    axios.get(`https://api.waifu.pics/sfw/awoo`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickwave': {
    axios.get(`https://api.waifu.pics/sfw/wave`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'sticksmile': {
    axios.get(`https://api.waifu.pics/sfw/smile`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickslap': {
    axios.get(`https://api.waifu.pics/sfw/slap`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'sticknom': {
    axios.get(`https://api.waifu.pics/sfw/nom`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickpoke': {
    axios.get(`https://api.waifu.pics/sfw/poke`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickwink': {
    axios.get(`https://api.waifu.pics/sfw/wink`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickbonk': {
    axios.get(`https://api.waifu.pics/sfw/bonk`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickbully': {
    axios.get(`https://api.waifu.pics/sfw/bully`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickyeet': {
    axios.get(`https://api.waifu.pics/sfw/yeet`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickbite': {
    axios.get(`https://api.waifu.pics/sfw/bite`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickkiss': {
    axios.get(`https://api.waifu.pics/sfw/kiss`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'sticklick': {
    axios.get(`https://api.waifu.pics/sfw/lick`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickpat': {
    axios.get(`https://api.waifu.pics/sfw/pat`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickhug': {
    axios.get(`https://api.waifu.pics/sfw/hug`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickkill': {
    axios.get(`https://api.waifu.pics/sfw/kill`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickcry': {
    axios.get(`https://api.waifu.pics/sfw/cry`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'stickspank':{
                    axios.get(`https://nekos.life/api/v2/img/spank`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'sticktickle':{
                    axios.get(`https://nekos.life/api/v2/img/tickle`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'woof':
    case '8ball':
    case 'goose':
    case 'gecg':
    case 'feed':
    case 'avatar':
    case 'fox_girl':
    case 'lizard':
    case 'meow':{
                    axios.get(`https://nekos.life/api/v2/img/${command}`)
    .then(({data}) => {
   DannyTechInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
    })
    }
    break
    case 'animeawoo':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animemegumin':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeshinobu':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animehandhold':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animehighfive':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animecringe':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animedance':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animehappy':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeglomp':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animesmug':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeblush':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animewave':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animesmile':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animepoke':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animewink':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animebonk':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animebully':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeyeet':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animebite':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animelick':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animekill':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animecry':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animewlp':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animekiss':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animehug':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeneko':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animepat':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeslap':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animecuddle':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animewaifu':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animenom':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animefoxgirl':{
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
                await DannyTechInc.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animetickle': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animegecg': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'dogwoof': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case '8ballpool': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'goosebird': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animefeed': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'animeavatar': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'lizardpic': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break
    case 'catmeow': {
    await replyglobal(m, `please wait`)
     waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
                await DannyTechInc.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                        return('Error!')
                    })
                    }
    break


    //============================================[NSWF]===================================================\\


   case 'trap':
case 'hentai-neko':
case 'hneko':
case 'hentai-waifu':
case 'nwaifu':
case 'gasm':
case 'milf':
case 'animespank':
case 'blowjob':
case 'cuckold':
case 'eba':
case 'pussy':
case 'yuri':
case 'zettai':
case 'gifblowjob':
case 'gifpussy': {
    if (!isCreator) return replyglobal(m, "❌ This command only works for owners!");

    await replyglobal(m, "Please wait...");

    try {
        let imageUrl;
        let isGif = false;
        let apiBase = 'https://api.giftedtech.web.id/api/anime';
        switch (command) {
            case 'trap':
                imageUrl = (await axios.get(`${apiBase}/trap?apikey=gifted`)).data.result;
                break;
            case 'hneko':
            case 'hentai-neko':
                imageUrl = (await axios.get(`${apiBase}/hneko?apikey=gifted`)).data.result;
                break;
            case 'hentai-waifu':
            case 'nwaifu':
                imageUrl = (await axios.get(`${apiBase}/hwaifu?apikey=gifted`)).data.result;
                break;
            case 'gasm':
                // No giftedtech api for gasm, fallback to old if needed or error
                return replyglobal(m, "❌ 'gasm' command is currently unsupported.");
            case 'milf':
                imageUrl = (await axios.get(`${apiBase}/milf?apikey=gifted`)).data.result;
                break;
            case 'animespank':
                // No giftedtech api for spank, fallback or error
                return replyglobal(m, "❌ 'animespank' command is currently unsupported.");
            case 'blowjob':
                // No giftedtech api for blowjob, fallback or error
                return replyglobal(m, "❌ 'blowjob' command is currently unsupported.");
            case 'cuckold':
                // No giftedtech api for cuckold, fallback or error
                return replyglobal(m, "❌ 'cuckold' command is currently unsupported.");
            case 'eba':
                // No giftedtech api for eba, fallback or error
                return replyglobal(m, "❌ 'eba' command is currently unsupported.");
            case 'pussy':
                imageUrl = (await axios.get(`${apiBase}/ass?apikey=gifted`)).data.result; // 'ass' endpoint used for pussy
                break;
            case 'yuri':
                // No giftedtech api for yuri, fallback or error
                return replyglobal(m, "❌ 'yuri' command is currently unsupported.");
            case 'zettai':
                // No giftedtech api for zettai, fallback or error
                return replyglobal(m, "❌ 'zettai' command is currently unsupported.");
            case 'gifblowjob':
                // No giftedtech gif api, fallback to waifu.pics or error
                imageUrl = (await axios.get("https://api.waifu.pics/nsfw/blowjob")).data.url;
                isGif = true;
                break;
            case 'gifpussy':
                imageUrl = (await axios.get("https://api.waifu.pics/nsfw/pussy")).data.url;
                isGif = true;
                break;
            default:
                return replyglobal(m, "❌ Invalid command!");
        }

        if (isGif) {
            const gifBuffer = await fetchBuffer(imageUrl);
            const gif = await buffergif(gifBuffer);
            await DannyTechInc.sendMessage(
                m.chat,
                { video: gif, gifPlayback: true },
                { quoted: m }
            );
            return;
        }

        await DannyTechInc.sendMessage(
            m.chat,
            { image: { url: imageUrl }, caption: "✅ Here is your NSFW image." },
            { quoted: m }
        );

    } catch (error) {
        console.error('Error in NSFW command:', error);
        replyglobal(m, "❌ An error occurred. Please try again later.");
    }
}
break;


        ///=======================================[nsfw ends]===================================\\






        /// url///
        case 'url': {
            await DannyTechInc.sendMessage(m.chat, { react: { text: "🖇️",key: m.key,}})
    try {
        const FormData = require('form-data');


        async function uploadToCatbox(filePath) {
            if (!fs.existsSync(filePath)) throw new Error("File does not exist");
            try {
                const data = new FormData();
                data.append('reqtype', 'fileupload');
                data.append('userhash', '');
                data.append('fileToUpload', fs.createReadStream(filePath));

                const config = {
                    method: 'POST',
                    url: 'https://catbox.moe/user/api.php',
                    headers: {
                        ...data.getHeaders(),
                    },
                    data: data,
                };

                const api = await axios.request(config);
                return api.data.trim();
            } catch (error) {
                console.error('Error uploading to Catbox:', error.message);
                throw new Error('Failed to upload to Catbox');
            }
        }
        if (!m.quoted) return replyglobal(m, "Please reply to an image, video, or audio file.");

        let mediaPath;
        try {
            mediaPath = await DannyTechInc.downloadAndSaveMediaMessage(m.quoted);
        } catch (err) {
            console.error("Error while downloading media:", err);
            return replyglobal(m, "❌ Unable to download the media file. Please try again.");
        }

        if (!mediaPath) {
            return replyglobal(m, "❌ No media file detected. Please reply to an image, video, or audio message.");
        }
        const fileUrl = await uploadToCatbox(mediaPath);
        fs.unlinkSync(mediaPath);
        replyglobal(m, `✅ Successfully uploaded!\n Here is your URL:\n${fileUrl}`);
    } catch (error) {
        console.error("Error while uploading to Catbox:", error);
        replyglobal(m, "❌ Oops, something went wrong while creating your URL.");
    }
    break;
}

        ////url////



//// nsfw ////



//-------- [HD] --------//






// ---------[HD END] --------//




///// UPDATE //////



case 'update': {
    if (!isCreator && !m.quoted) return reply('😡 You are not my owner dude 🚫.');

    replyglobal(m, '*Updating bot* \nJust a moment..');

    setTimeout(() => {
        process.exit(1);  
    }, 2000); 
}
break;




///// UPDATE END /////


//====================================[remini]===============================\\

case 'enhance':
case 'tohd':
case 'hd':
case 'qualify': {
    if (!m.quoted) {
        return replyglobal(m, `📸 *Please send or reply to an image to enhance.*`);
    }

    let quoted = m.quoted ? m.quoted : m;
    let mime = quoted.mtype || quoted.message?.mimetype || '';
    if (!/image/.test(mime)) return replyglobal(m, `📸 *Please send or reply to a valid image.*`);

    try {
        replyglobal(m, "⏳ Uploading image to Creepyfy ai...");

        let media = await quoted.download();
        let form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', media, 'image.jpg');

        let catboxRes = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: form.getHeaders(),
        });

        if (!catboxRes.data || !catboxRes.data.includes('https://')) {
            return replyglobal(m, '❌ *Failed to upload image to creepyfy ai.*');
        }

        let catboxUrl = catboxRes.data.trim();
        replyglobal(m, "🧠 *Enhancing image quality...*");

        let res = await axios.get(`https://api.giftedtech.web.id/api/tools/remini?apikey=gifted&url=${encodeURIComponent(catboxUrl)}`);
        if (!res.data || !res.data.success || !res.data.result?.image_url) {
            return replyglobal(m, "❌ *Enhancement failed. Try again later.*");
        }

        const enhancedUrl = res.data.result.image_url;

        await DannyTechInc.sendMessage(m.chat, {
            image: { url: enhancedUrl },
            caption: `✅ *Image enhanced successfully!*\n📦 *Size:* ${res.data.result.size || 'Unknown'}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY TECH ENHANCER",
                    body: "𝐷𝛥𝛮𝛮𝑌 - Image Enhanced",
                    thumbnailUrl: catboxUrl,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    sourceUrl: global.link || "https://creepytech.org"
                },
            }
        }, { quoted: m });

    } catch (err) {
        console.error("Enhance Error:", err);
        replyglobal(m, "❌ *An error occurred while enhancing the image.*");
    }
    break;
}


//========================================[[remini ends]]===================================\\




//====================================[removebg]==============================================\\


case 'removebg':
case 'bgremove':
case 'removebackground':
case 'backgroundremove': {
    if (!m.quoted) {
        return replyglobal(m, `📸 *Please send or reply to an image to remove background*`);
    }

    let quoted = m.quoted ? m.quoted : m;
    let mime = quoted.mtype || quoted.message?.mimetype || '';
    if (!/image/.test(mime)) return replyglobal(m, `📸 *Please send or reply to a valid image.*`);

    try {
        replyglobal(m, "⏳ Uploading image to Creepyfy ai...");

        let media = await quoted.download();
        let form = new FormData();
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', media, 'image.jpg');

        let catboxRes = await axios.post('https://catbox.moe/user/api.php', form, {
            headers: form.getHeaders(),
        });

        if (!catboxRes.data || !catboxRes.data.includes('https://')) {
            return replyglobal(m, '❌ *Failed to upload image to creepyfy ai.*');
        }

        let catboxUrl = catboxRes.data.trim();
        replyglobal(m, "🧠 *Removing background...*");

        let res = await axios.get(`https://api.giftedtech.web.id/api/tools/removebg?apikey=gifted&url=${encodeURIComponent(catboxUrl)}`);
        if (!res.data || !res.data.success || !res.data.result?.image_url) {
            return replyglobal(m, "❌ *bg removal failed. Try again later.*");
        }

        const removedcedUrl = res.data.result.image_url;

        await DannyTechInc.sendMessage(m.chat, {
            image: { url: removedcedUrl },
            caption: `✅ *background removed successfully!*\n📦 *Size:* ${res.data.result.size || 'Unknown'}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "CREEPY TECH BG REMOVER",
                    body: "𝐷𝛥𝛮𝛮𝑌 - Image bg removal",
                    thumbnailUrl: catboxUrl,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    sourceUrl: global.link || "https://creepytech.org"
                },
            }
        }, { quoted: m });

    } catch (err) {
        console.error("Enhance Error:", err);
        replyglobal(m, "❌ *An error occurred while enhancing the image.*");
    }
    break;
}

//=========================================[removebg ends]===================================//



//================================[define]----------------------------\\



//====================================[stalkers]==============================================\\


case 'githubstalker':
case 'gitstalk': {
  if (!text) return replyglobal(m, `❌ Please provide a GitHub username.\nExample: ${prefix + command} DannyTech20`);

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/stalk/gitstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    if (!response.data || !response.data.success) {
      return replyglobal(m, '❌ User not found or failed to fetch GitHub data.');
    }

    const d = response.data.result;

    const thumbnail = d.avatar_url || 'https://files.catbox.moe/a7ckn2.jpeg';

    let replyText = `
╔═══════════════════════╗
║     🐙 GITHUB STALKER     ║
╚═══════════════════════╝

👤  Name       : ${d.name || 'N/A'}
🔗  Username   : ${d.login || 'N/A'}
🌐  Profile    : ${d.html_url || 'N/A'}

📦  Public Repos : ${d.public_repos ?? 'N/A'}
👥  Followers    : ${d.followers ?? 'N/A'}
👣  Following    : ${d.following ?? 'N/A'}

📝  Bio        : ${d.bio || 'N/A'}
🏢  Company    : ${d.company || 'N/A'}
📍  Location   : ${d.location || 'N/A'}

📅  Joined GitHub : ${d.created_at ? new Date(d.created_at).toDateString() : 'N/A'}

═════════════════════════
Powered by *CREEPY_MD-V2*
`;

    await DannyTechInc.sendMessage(
      m.chat,
      {
        image: { url: thumbnail },
        caption: replyText.trim(),
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "CREEPY TECH",
            newsletterJid: "120363307517794567@newsletter",
          },
          externalAdReply: {
            showAdAttribution: true,
            title: d.login || 'GitHub User',
            body: d.name || 'GitHub Profile',
            thumbnailUrl: thumbnail,
            sourceUrl: d.html_url || 'https://github.com',
            mediaType: 1,
            renderLargerThumbnail: false,
            thumbnailHeight: 500,
            thumbnailWidth: 500,
          },
        },
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error in githubstalker command:', error);
    replyglobal(m, '❌ An error occurred while fetching GitHub user data. Please try again later.');
  }
}
break;


case 'whatsappchannelstalker':
case 'wastalker':
case 'whatsappstalker': {
  if (!text) return replyglobal(m, `❌ Please provide a WhatsApp Channel URL.\nExample: ${prefix + command} https://whatsapp.com/channel/0029VacQFw65Ui2gGv0Kwk1r`);

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/stalk/wachannel?apikey=gifted&url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    if (!response.data || !response.data.success) {
      return replyglobal(m, '❌ Channel not found or failed to fetch WhatsApp channel data.');
    }

    const d = response.data.result;
    const thumbnail = d.img || 'https://files.catbox.moe/a7ckn2.jpeg';

    const replyText = `
╔════════════════════════════════╗
║   📡 WHATSAPP CHANNEL STALKER   ║
╚════════════════════════════════╝

👥 Followers   : ${d.followers || 'N/A'}
📝 Description : ${d.description || 'N/A'}
🔗 Channel URL : ${text}

════════════════════════════════
Powered by *CREEPY_MD-V2*
    `;

    await DannyTechInc.sendMessage(
      m.chat,
      {
        image: { url: thumbnail },
        caption: replyText.trim(),
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "CREEPY TECH",
            newsletterJid: "120363307517794567@newsletter",
          },
          externalAdReply: {
            showAdAttribution: true,
            title: 'WhatsApp Channel',
            body: d.followers || 'Followers info',
            thumbnailUrl: thumbnail,
            sourceUrl: text,
            mediaType: 1,
            renderLargerThumbnail: false,
            thumbnailHeight: 500,
            thumbnailWidth: 500,
          },
        },
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error in whatsappchannelstalker command:', error);
    replyglobal(m, '❌ An error occurred while fetching WhatsApp channel data. Please try again later.');
  }
}
break;




case 'instagramstalker':
case 'igstalker':
case 'igstalk':
case 'instagramstalk': {
  if (!text) return replyglobal(m, `❌ Please provide an Instagram username.\nExample: ${prefix + command} dannytech20`);

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/stalk/igstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    if (!response.data || !response.data.success) {
      return replyglobal(m, '❌ Instagram user not found or failed to fetch data.');
    }

    const d = response.data.result;
    const thumbnail = d.profile_pic || 'https://files.catbox.moe/a7ckn2.jpeg';

    const verified = d.verified ? "✅ Verified" : "❌ Not Verified";

    const replyText = `
╔══════════════════════════════╗
║      📸 INSTAGRAM STALKER      ║
╚══════════════════════════════╝

👤 Username     : ${d.username}
👤 Name         : ${d.name}
🔖 Bio          : ${d.bio || 'N/A'}
📊 Followers    : ${d.followers.toLocaleString()}
📊 Following    : ${d.following.toLocaleString()}
📌 Posts        : ${d.posts.toLocaleString()}
⭐ Engagement   : ${d.engagement_rate ? d.engagement_rate + '%' : 'N/A'}
${verified}

══════════════════════════════
Powered by *CREEPY_MD-V2*
    `;

    await DannyTechInc.sendMessage(
      m.chat,
      {
        image: { url: thumbnail },
        caption: replyText.trim(),
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "CREEPY TECH",
            newsletterJid: "120363307517794567@newsletter",
          },
          externalAdReply: {
            showAdAttribution: true,
            title: `${d.name} (@${d.username})`,
            body: `Followers: ${d.followers.toLocaleString()}`,
            thumbnailUrl: thumbnail,
            sourceUrl: `https://instagram.com/${d.username}`,
            mediaType: 1,
            renderLargerThumbnail: false,
            thumbnailHeight: 500,
            thumbnailWidth: 500,
          },
        },
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error in instagramstalker command:', error);
    replyglobal(m, '❌ An error occurred while fetching Instagram data. Please try again later.');
  }
}
break;




case 'tiktokstalk':
case 'tiktokstalker': {
  if (!text) return replyglobal(m, `❌ Please provide a TikTok username.\nExample: ${prefix + command} dannytech20`);

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/stalk/tiktokstalk?apikey=gifted&username=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    if (!response.data || !response.data.success) {
      return replyglobal(m, '❌ TikTok user not found or failed to fetch data.');
    }

    const d = response.data.result;
    const avatar = d.avatar || 'https://files.catbox.moe/a7ckn2.jpeg';

    const verified = d.verified ? "✅ Verified" : "❌ Not Verified";
    const privacy = d.private ? "🔒 Private Account" : "🌐 Public Account";

    const replyText = `
╔══════════════════════════════╗
║       🎵 TIKTOK STALKER       ║
╚══════════════════════════════╝

👤 Name       : ${d.name || 'N/A'}
👤 Username   : @${d.username}
🔖 Bio        : ${d.bio || 'No bio available'}
📊 Followers  : ${d.followers.toLocaleString()}
👥 Following  : ${d.following.toLocaleString()}
❤️ Likes      : ${d.likes.toLocaleString()}
${verified} | ${privacy}

══════════════════════════════
Powered by *CREEPY_MD-V2*
    `;

    await DannyTechInc.sendMessage(
      m.chat,
      {
        image: { url: avatar },
        caption: replyText.trim(),
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "CREEPY TECH",
            newsletterJid: "120363307517794567@newsletter",
          },
          externalAdReply: {
            showAdAttribution: true,
            title: `${d.name || d.username} (@${d.username})`,
            body: `Followers: ${d.followers.toLocaleString()}`,
            thumbnailUrl: avatar,
            sourceUrl: `https://www.tiktok.com/@${d.username}`,
            mediaType: 1,
            renderLargerThumbnail: false,
            thumbnailHeight: 500,
            thumbnailWidth: 500,
          },
        },
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error in tiktokstalk command:', error);
    replyglobal(m, '❌ An error occurred while fetching TikTok data. Please try again later.');
  }
}
break;



//=====================================================[stalkers ends]======================================\\

//==================================[wether]=========================\\

case 'weather':
case 'forecast':
case 'whether': {
  if (!text) return replyglobal(m, `❌ Please provide a location.\nExample: ${prefix + command} Arusha`);

  try {
    const apiUrl = `https://api.giftedtech.web.id/api/search/weather?apikey=gifted&location=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    if (!response.data || !response.data.success) {
      return replyglobal(m, '❌ Location not found or failed to fetch weather data.');
    }

    const w = response.data.result;

    const iconUrl = `https://openweathermap.org/img/wn/${w.weather.icon}@2x.png`;
    const sunrise = new Date(w.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(w.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const replyText = `
╔════════ WEATHER REPORT ════════╗
║ Location: ${w.location}, ${w.sys.country}
║ Weather: ${w.weather.main} (${w.weather.description})
║ Temperature: ${w.main.temp}°C (Feels like: ${w.main.feels_like}°C)
║ Min/Max Temp: ${w.main.temp_min}°C / ${w.main.temp_max}°C
║ Humidity: ${w.main.humidity}%
║ Pressure: ${w.main.pressure} hPa
║ Wind: ${w.wind.speed} m/s, Direction: ${w.wind.deg}°
║ Clouds: ${w.clouds}%
║ Visibility: ${w.visibility} meters
║ Sunrise: ${sunrise}
║ Sunset: ${sunset}
╚════════════════════════════════╝
Powered by CREEPY_MD-V2
    `;

    await DannyTechInc.sendMessage(
      m.chat,
      {
        image: { url: iconUrl },
        caption: replyText.trim(),
        contextInfo: {
          forwardingScore: 5,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "CREEPY TECH",
            newsletterJid: "120363307517794567@newsletter",
          },
          externalAdReply: {
            showAdAttribution: true,
            title: `Weather in ${w.location}`,
            body: `${w.weather.main} - ${w.weather.description}`,
            thumbnailUrl: iconUrl,
            sourceUrl: `https://openweathermap.org/city/${w.id}`, // link to city weather on OpenWeatherMap
            mediaType: 1,
            renderLargerThumbnail: false,
            thumbnailHeight: 400,
            thumbnailWidth: 400,
          }
        },
      },
      { quoted: m }
    );

  } catch (error) {
    console.error('Error in weather command:', error);
    replyglobal(m, '❌ An error occurred while fetching weather data. Please try again later.');
  }
}
break;


//=====================================[wherether]=====================\\



case 'poetry':
case 'poet':    
case 'shairi':
case 'shayeri': {
    try {
        // Fetch random poetry from the API
        let _0x45fa91 = await fetch("https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo");
        let { result: _0x1aa994 } = await _0x45fa91.json();

        // If the response is valid, send the poetry; otherwise, send an error message
        await DannyTechInc.sendMessage(from, {
            text: _0x45fa91 && _0x1aa994 ? _0x1aa994 : "_Request Denied from Server!_",
            mentions: [sender],
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "DANNY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: `CREEPY_MD-V2`,
                    body: `Poetry from Danny`,
                    thumbnailUrl: 'https://files.catbox.moe/azia2c.jpg', 
                    sourceUrl: global.link || "https://creepytech.org",
                    mediaType: 1,
                    renderLargerThumbnail: false, // Small thumbnail
                    thumbnailHeight: 500,
                thumbnailWidth: 500
                }
            }
        }, { quoted: m });
    } catch (error) {
        // Handle errors if the fetch request fails
        await DannyTechInc.sendMessage(from, {
            text: `Something went wrong! Please try again later. Error: ${error}`,
            mentions: [sender]
        });
    }
    break;
}


case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let Dannyresources = await Telesticker(args[0])
		await replyglobal(m, `Sending ${Dannyresources.length} stickers...`)
		if (m.isGroup && Dannyresources.length > 30) {
			await replyglobal(m, 'Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < Dannyresources.length; i++) {
				DannyTechInc.sendMessage(m.sender, { sticker: { url: Dannyresources[i].url }})
			}
		} else {
			for (let i = 0; i < Dannyresources.length; i++) {
				DannyTechInc.sendMessage(m.chat, { sticker: { url: Dannyresources[i].url }})
			}
		}
	} else replyglobal(m, `Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break


case 'alexa':
case 'simtalk':
case 'simsimi': {
    try {
        // Extract the user's message
        const userMessage = m.text || '';  // Assuming 'm.text' contains the user's message

        // If no message was provided, prompt the user
        if (!text) return replyglobal(m, `Hi ${pushname} do you wann talk?`)

        // Set up the POST request to the SimSimi API
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `text=${encodeURIComponent(userMessage)}&lc=en&key=`  // Include your API key if needed in the 'key=' field
        };

        // Send the request to SimSimi API
        let response = await fetch("https://api.simsimi.vn/v2/simtalk", options);
        let data = await response.json();

        // Check if the API returned a valid response
        if (data.status === "200" && data.message) {
            // If the message is valid, send the reply
            await DannyTechInc.sendMessage(from, { text: data.message || "Sorry, I couldn't understand that.", mentions: [sender] });
        } else {
            // If no valid response, inform the user
            await DannyTechInc.sendMessage(from, { text: "*No Response!*", mentions: [sender] });
        }
    } catch (error) {
        // Handle errors if the API request fails
        await DannyTechInc.sendMessage(from, { text: `Something went wrong! Please try again later. Error: ${error}`, mentions: [sender] });
    }
    break;
}




case 'friend':
case 'searchfriend': {
    if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*");
    
    let teman = pickRandom(Dannyverifieduser);  // Selects a random verified user
    let message = `Managed to Get One Person\nHere @${teman.split("@")[0]}`;  // Prepare the message
    
    replyglobal(m, `Finding a friend...`);
    
    // Delay to simulate a search
    setTimeout(() => {
        // Send message to the group (or wherever) with the selected friend mentioned
        DannyTechInc.sendMessage(from, {
            text: message,
            mentions: [teman]
        }, { quoted: m });
    }, 5000);  // Delay before sending the message
}
break;

case 'q':
case 'quoted': {
    if (!m.quoted) return reply('Please reply to a message!');  
    
    let Dannyquotx = await DannyTechInc.serializeM(await m.getQuotedObj());  
    
    if (!Dannyquotx.quoted) return reply('The message you are replying to is not sent by the bot');  
    
    await Dannyquotx.quoted.copyNForward(m.chat, true);  
}
break;



case 'obfus':
case 'encrypt':    
case 'obfuscate': {
    if (!q) return reply(`Example: ${prefix + command} const DannyTechInc.sendMessage`);  
    
    let meg = await obfus(q);  
    reply(`Success\n${meg.result}`);  
}
break;






case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'squirrel': {
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        if (/earrape/.test(command)) set = '-af volume=12';
        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';

        if (/audio/.test(mime)) {
            await replyglobal(m, "Processing your audio..."); 
            let media = await DannyTechInc.downloadAndSaveMediaMessage(quoted); 
            let ran = getRandom('.mp3'); 
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media); 
                if (err) return replyglobal(m, `❌ Error processing audio: ${err}`);

                let buff = fs.readFileSync(ran);
                DannyTechInc.sendMessage(
                    m.chat,
                    {
                        audio: buff,
                        mimetype: 'audio/mp4',
                        ptt: true, 
                             contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
          }
                    },
                    { quoted: m }
                );
                fs.unlinkSync(ran); 
            });
        } else {
            replyglobal(m, `❌ Reply to the audio you want to modify with the caption *${prefix + command}*`);
        }
    } catch (e) {
        console.error('Error in audio processing:', e); 
        replyglobal(m, `❌ An error occurred while processing your request. Please try again.`);
    }
}
break;



/// TEDY ////


let teddyM = {};

case 'teddy': {
    let teddyEmojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🔮'];

    if (!teddyM[m.sender]) {
        teddyM[m.sender] = true; 

        let sentMessage = await DannyTechInc.sendMessage(m.chat, { text: `(\\_/)\n( •.•)\n/>🤍` }, { quoted: m });

        for (let i = 0; i < teddyEmojis.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 500)); 
            await DannyTechInc.sendMessage(m.chat, {
                text: `(\\_/)\n( •.•)\n/>${teddyEmojis[i]}`
            }, { quoted: sentMessage }); 
        }
    }
    break;
}


//=======================[fancy]=======================//


case 'fancylist':
    case 'listfancy': {
    try {
        const [v1, v2] = await Promise.all([
            axios.get(`https://api.giftedtech.web.id/api/tools/fancy?apikey=gifted&text=Danny Tech`),
            axios.get(`https://api.giftedtech.web.id/api/tools/fancyv2?apikey=gifted&text=Danny Tech`)
        ]);

        const styles = [...v1.data.results, ...v2.data.results];

        let list = `🧾 *Fancy Style List (${styles.length})*\n\n`;
        styles.forEach((item, i) => {
            list += `${i + 1}. ${item.name || 'Unnamed'}\n`;
        });

        await DannyTechInc.sendMessage(m.chat, {
            text: list,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: "All Fancy Styles",
                    body: "Use with: fancy [number] text",
                    mediaType: 1,
                    sourceUrl: "https://creepytech.org",
                    thumbnailUrl: "https://files.catbox.moe/154078.jpeg",
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: m });

    } catch (err) {
        console.error("Fancy list error:", err);
        replyglobal(m, "❌ Failed to load fancy style list.");
    }
}
break;






case 'fancy': {
    if (!text) {
        return replyglobal(m, `🎨 *Usage:*\n${prefix + command} 25 Danny Tech\n\nUse *${prefix}fancylist* to see available styles.`);
    }

    const args = text.trim().split(' ');
    const styleIndex = parseInt(args[0]) - 1;
    const inputText = args.slice(1).join(' ');

    if (isNaN(styleIndex) || !inputText) {
        return replyglobal(m, `❌ Invalid input. Use like:\n${prefix + command} 13 Danny Tech`);
    }

    try {
        const [v1, v2] = await Promise.all([
            axios.get(`https://api.giftedtech.web.id/api/tools/fancy?apikey=gifted&text=${encodeURIComponent(inputText)}`),
            axios.get(`https://api.giftedtech.web.id/api/tools/fancyv2?apikey=gifted&text=${encodeURIComponent(inputText)}`)
        ]);

        const styles = [...v1.data.results, ...v2.data.results];

        if (!styles[styleIndex] || !styles[styleIndex].result) {
            return replyglobal(m, `⚠️ Style number invalid. Found only *${styles.length}* styles.`);
        }

        const selected = styles[styleIndex];

        await DannyTechInc.sendMessage(m.chat, {
            text: `✨ *Fancy Style ${styleIndex + 1}:* ${selected.name || 'Unknown'}\n\n${selected.result}`,
            contextInfo: {
                forwardingScore: 777,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CREEPY TECH",
                    newsletterJid: "120363307517794567@newsletter",
                },
                externalAdReply: {
                    title: `Fancy Style: ${selected.name || 'Style'}`,
                    body: "Created by CREEPY_MD",
                    thumbnailUrl: "https://files.catbox.moe/154078.jpeg",
                    mediaType: 1,
                    sourceUrl: "https://creepytech.org",
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.error("Fancy command error:", e);
        replyglobal(m, "❌ Error generating fancy text. Please try again.");
    }
}
break;




//======================[fancy ends]===================//






//// aNIME SECOND END////
case 'clearchat':
Dannyimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
/// new cmd end///



case 'panel':
case 'panelmenu': {
    let reaction = sendReaction('📦');

    let uptime = process.uptime();
    let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;

    let start = speed();
    let end = speed();
    let botSpeed = (end - start).toFixed(3);

    let botPlatform = os.platform();
    let botArch = os.arch();
    let botCpu = os.cpus().length;
    let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    let botVersion = '2.0.1';

    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    let panelMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  📦 *PANEL MENU*  🚀
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *PANELS LIST:*  
${[
    'https://account.solarhosting.cc/',
    'https://my.blare.host/',
    'https://dash.witchly.host/',
    'https://optiklink.com/',
    'https://panel.sillydev.co.uk',
    'https://cloves.mypi.co/',
    'https://client.botwa.net/login',
    'https://netherite.io/',
    'https://bot-hosting.net/',
    'https://panel.hardy.host/auth/login',
    'https://dashboard.katabump.com/auth/login',
    'https://daki.cc',
    'https://pella.app',
    'https://katabump.com'
].map(link => `> ${link}`).join('\n')}
──────────────────────
📌 *TOP WEBHOSTING SERVERS 2025:*  
${[
    'https://Freehostia.com',
    'https://ZettaHost.com',
    'https://110MB.com',
    'https://Jimdo.com',
    'https://Byethost.com',
    'https://HostFakeNow.com',
    'https://Zymic.com',
    'https://FreeHosting.com',
    'https://PhantomHost.io',
    'https://xtreemhost.com',
    'https://Reliefhost.com',
    'https://AwardSpace.com',
    'https://FreeHostingEU.com',
    'https://InstantHostX.com',
    'https://Uhostfull.com',
    'https://1ClickWebHost.com',
    'https://SuperFreeHost.com',
    'https://FreeWorldHosting.net',
    'https://000webhost.com',
    'https://x10hosting.com',
    'https://UptimeUnlimited.io',
    'https://1FreeHosting.com',
    'https://50Webs.com',
    'https://MythicHosting.com',
    'https://vercell.com',
    'https://netify.com'
].map(link => `> ${link}`).join('\n')}
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 creepytech.org
──────────────────────
`.trim();

    await DannyTechInc.sendMessage(m.chat, {
        text: panelMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Panel details",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });

 let audioFiles = ['https://files.catbox.moe/3dbotw.mp3'];
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;



/// main menu ////

case 'mainmenu': {
    let reaction = sendReaction('🤖');

    let uptime = process.uptime();
    let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;

    let start = speed();
    let end = speed();
    let botSpeed = (end - start).toFixed(3);

    let botPlatform = os.platform();
    let botArch = os.arch();
    let botCpu = os.cpus().length;
    let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    let botVersion = '2.0.1';

    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3'
    ];
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let mainmenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *MAIN MENU*  🚀
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *MAIN MENU COMMANDS:*  

> *creepy*                                      
> *menu*
> *mainmenu*
> *ownermenu*
> *Groupmenu* 
> *Toolsmenu*
> *stickermenu*
> *Animemenu*  
> *gamemenu* 
> *nsfwmenu* 
> *texteffectmenu*                                       
> *p*                                         
> *buypremium*                                
> *runtime*                                     
> *file*                                       
> *repo*                                      
> *support*   
> *donate*                                  
> *owner*      
> *panel*                                              
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

   await DannyTechInc.sendMessage(m.chat, {
        text: mainmenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Menu details",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;




///main menu end /////


///text efects////


case 'texteffectmenu': 
case 'photoox':
case 'texteffect':     {
    let reaction = sendReaction('🎨');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let texteffectmenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *TEXT EFFECT MENU*  🎨
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *TEXT EFFECT COMMANDS:*  

> *shadow* 
> *write* 
> *romantic* 
> *burnpaper* 
> *smoke* 
> *narutobanner* 
> *love* 
> *undergrass* 
> *doublelove* 
> *coffecup* 
> *underwaterocean* 
> *smokyneon* 
> *starstext* 
> *rainboweffect* 
> *balloontext*
> *metalliceffect* 
> *embroiderytext*
> *flamingtext* 
> *stonetext* 
> *writeart*
> *summertext* 
> *wolfmetaltext* 
> *nature3dtext*
> *rosestext* 
> *naturetypography* 
> *quotesunder* 
> *shinetext* 

──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

   await DannyTechInc.sendMessage(m.chat, {
        text: texteffectmenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Text Effects",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;


///text effects///




//// nswf ///


case 'nsfwmenu': 
case 'nsfw': {
    let reaction = sendReaction('🔞');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    // List of random thumbnails
    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    // List of random audio files
    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    // Select a random thumbnail
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    // Select a random audio file
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let nsfwmenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *NSFW MENU*  🔞
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *NSFW COMMANDS:*  

> *trap*  
> *hentai-neko*  
> *hentai-waifu*  
> *gasm*  
> *milf*  
> *animespank*  
> *blowjob*  
> *cuckold*  
> *eba*  
> *pussy*  
> *yuri*  
> *zettai*  
> *gifblowjob*  

──────────────────────
⚠️ *This commands are not user friendly😂😂*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

   await DannyTechInc.sendMessage(m.chat, {
        text: nsfwmenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Nsfw commands",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;






///anime//
case 'animemenu':
case 'anime':
case 'anim':         {
    let reaction = sendReaction('🎨');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    // List of random thumbnails
    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    // Select a random thumbnail
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let animemenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *ANIME MENU*  🎨
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *ANIME COMMANDS:* 
> *animeawoo*
> *animemegumin*
> *animeshinobu*
> *animehandhold*
> *animehighfive*
> *animecringe*
> *animedance*
> *animehappy*
> *animeglomp*
> *animesmug*
> *animeblush*
> *animewave*
> *animesmile*
> *animepoke*
> *animewink*
> *animebonk*
> *animebully*
> *animeyeet*
> *animebite*
> *animelick*
> *animekill*
> *animecry*
> *animewlp*
> *animekiss*
> *animehug*
> *animeneko*
> *animepat*
> *animeslap*
> *animecuddle*
> *animewaifu*
> *animenom*
> *animefoxgirl*
> *animetickle*
> *animegecg*
> *dogwoof*
> *8ballpool*
> *goosebird*
> *animefeed*
> *animeavatar*
> *lizardpic*
> *catmeow*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

 await DannyTechInc.sendMessage(m.chat, {
        text: animemenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Anime Commands",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;
/// anime end//




/// owner menu ////



case 'ownermenu':
case 'mymenu': {
    let reaction = sendReaction('⚙️');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    // List of random thumbnails
    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    // Select a random thumbnail
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let ownermenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *OWNER MENU* 👥 
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *OWNER COMMANDS:*  
> *getsession*                                
> *deletesession*                            
> *join*                                    
> *shutdown*                                 
> *restart*                                     
> *autoread [on/off]*                        
> *autotyping [on/off]*                       
> *autorecording [on/off]*                     
> *autorecordtyp [on/off]*                  
> *autoswview [on/off]*                 
> *autobio [on/off]*                         
> *mode [self/public]*                       
> *block*                                   
> *update*                                    
> *backup*                                  
> *getcase*                                  
> *newowner*                                
> *delowner*                                    
> *creepy-open [viewonce]*                   
> *unblock*                 
> *pinchat*
> *unpinchat*
> *pin*
> *update*
> *autoreact [on/off]*  
> *chatbot [on/off]*
> *antidelete [on/off]*        
> *setexif*
> *setpp*     
> *report*
> *poll*
> *del*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

  await DannyTechInc.sendMessage(m.chat, {
        text: ownermenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Owner commands",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;

//// owner menu end ////





/// menu ////
case 'groupmenu':
case 'gcmenu': {
    let reaction = sendReaction('👥');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    // List of random thumbnails
    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    // Select a random thumbnail
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let groupmenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *GROUP MENU* 👥 
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *GROUP COMMANDS:*  
> *closetime*                                 
> *opentime*                               
> *kick*                                 
> *add*                                   
> *promote*                                  
> *demote*                                      
> *setdesc*                                   
> *tagall*                                     
> *hidetag*                                    
> *totag*                                     
> *group [option]*                           
> *editinfo*                                    
> *linkgc*                                   
> *revoke*                                     
> *listonline* 
> *kickall*
> *alladmins*
> *demoteall*
> *toall*
> *ban*    
> *unban*                            
> *antilink*   
> *delspam*
> *handsomecheck*
> *beautifulcheck*
> *charactercheck*               
> *join-request*  
> *approveall*   
> *welcome [on/off]* 
> *tagadmins*
> *setppgroup*        
> *vcf*
> *mute*
> *unmute*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

 await DannyTechInc.sendMessage(m.chat, {
        text: groupmenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Group commands",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;

//group menu end///
////sticker menu/////

case 'stickermenu':
case 'stick': {
    let reaction = sendReaction('🎴');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    // List of random thumbnails
    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    // Select a random thumbnail
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let stickermenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *STICKER MENU*  🎴
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *STICKER COMMANDS:* 

> *stickcry*
> *stickkill*
> *stickpat*
> *sticklick*
> *stickkiss*
> *stickbite*
> *stickyeet*
> *stickbully*
> *stickbonk*
> *stickwink*
> *stickpoke*
> *sticknom*
> *stickslap*
> *sticksmile*
> *stickwave*
> *stickawoo*
> *stickblush*
> *sticksmug*
> *stickglomp*
> *stickhappy*
> *stickdance*
> *stickcringe*
> *stickcuddle*
> *stickhighfive*
> *stickhandhold*
> *stickshinobu*
> *stickspank*
> *sticktickle*

──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

await DannyTechInc.sendMessage(m.chat, {
        text: stickermenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "sticker commands",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;


////------------------ menu ---------------/////
case 'menu':
case 'help': {
    let reaction = sendReaction('🤖');

    let uptime = process.uptime();
    let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;

    let start = speed();
    let end = speed();
    let botSpeed = (end - start).toFixed(3);

    let botPlatform = os.platform();
    let botArch = os.arch();
    let botCpu = os.cpus().length;
    let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    let botVersion = '2.0.1';

    let teksnya = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *CREEPY_MD-V2*  🚀
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *MENU LIST:* 
> *creepy*
> *mainmenu*
> *ownermenu*
> *groupmenu*
> *toolsmenu*
> *stickermenu*
> *animemenu*  
> *gamemenu* 
> *nsfwmenu* 
> *texteffectmenu*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 creepytech.org  
──────────────────────
`;

    // Send menu text with newsletter and large external ad reply thumbnail
    await DannyTechInc.sendMessage(m.chat, {
        text: teksnya,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "𝐷𝛥𝛮𝛮𝑌",
                thumbnailUrl: 'https://files.catbox.moe/a7ckn2.jpeg',
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            },
        }
    }, { quoted: m });

    // Optionally send your audio separately (same newsletter but no thumbnail)
    let audioFiles = ['https://files.catbox.moe/3dbotw.mp3'];
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;







//------- menu end ---------//







////tools/download menu///



case 'toolsmenu':
case 'downloadmenu':  {
    let reaction = sendReaction('🛠️');

     // Bot Uptime
     let uptime = process.uptime();
     let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
 
     // Bot Speed Test
     let start = speed();
     let end = speed();
     let botSpeed = (end - start).toFixed(3);
 
     // System Info
     let botPlatform = os.platform();
     let botArch = os.arch();
     let botCpu = os.cpus().length;
     let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
     let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
     let botVersion = '2.0.1';

    // List of random thumbnails
    let thumbnails = [
        'https://files.catbox.moe/154078.jpeg',
        'https://files.catbox.moe/a7ckn2.jpeg'
    ];

    // List of random audio files
    let audioFiles = [
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3',
        'https://files.catbox.moe/3dbotw.mp3'
    ];

    // Select a random thumbnail
    let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

    // Select a random audio file
    let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

    let toolsmenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *TOOLS MENU*  🛠️
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *TOOLS COMMANDS:*  

> *ytmp3 <link>*                              
> *ytmp4 <link>*                               
> *play <song name>*    
> *video <video name>*  
> *Facebook <link>*
> *Instagram <link> *
> *tiktok <link>*
> *ai <query>*
> *gpt <query>*       
> *creepyfy <query>*    
> *imdb*
> *img*         
> *mediafire*
> *apk*
> *screenshot*
> *sticker* 
> *telestick <link>*
> *smeme*
> *swm*
> *toimage*
> *tomp4*
> *toaud*
> *tomp3*
> *tovn*
> *togif*
> *tourl*
> *emojimix*
> *tonce*
> *toqr*
> *fliptext*
> *listvn*
> *liststicker*
> *listimage*
> *listvideo*
> *listzip*
> *listapk*
> *listpdf*
> *openai*
> *ephemeral*
> *analyze*

 *AUDIO ENHANCER*
> *bass*
> *blown* 
> *deep* 
> *earrape*
> *fast*
> *fat*
> *nightcore*
> *reverse*
> *robot*
> *slow*
> *smooth*
> *squirrel*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

 await DannyTechInc.sendMessage(m.chat, {
        text: toolsmenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Tools commands",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;



//// tools menu end//////





///game menu///
case 'gamemenu': 
case 'games': {
  let reaction = sendReaction('🎮');

   // Bot Uptime
   let uptime = process.uptime();
   let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;

   // Bot Speed Test
   let start = speed();
   let end = speed();
   let botSpeed = (end - start).toFixed(3);

   // System Info
   let botPlatform = os.platform();
   let botArch = os.arch();
   let botCpu = os.cpus().length;
   let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
   let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
   let botVersion = '2.0.1';

  // List of random thumbnails
  let thumbnails = [
      'https://files.catbox.moe/154078.jpeg',
      'https://files.catbox.moe/a7ckn2.jpeg'
  ];

  // List of random audio files
  let audioFiles = [
      'https://files.catbox.moe/p6hpzw.MP3',
      'https://files.catbox.moe/p6hpzw.MP3',
      'https://files.catbox.moe/p6hpzw.MP3',
      'https://files.catbox.moe/p6hpzw.MP3',
      'https://files.catbox.moe/p6hpzw.MP3'
  ];

  // Select a random thumbnail
  let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];

  // Select a random audio file
  let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];

  let gameMenuMessage = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🎮 *GAME MENU*  🕹️
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *GAME COMMANDS:*  
> *guess <number>*  
> *rps <rock|paper|scissors>*  
> *trivia*  
> *hangman*  
> *scramble*  
> *math*  
> *memory*  
> *riddle*  
> *dice <bet>*
> *dare*
> *truth*
> *quotes*
> *coffee*
> *ttt* 
> *suit*
> *xxqc*
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────
`.trim();

await DannyTechInc.sendMessage(m.chat, {
        text: gameMenuMessage,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Danny",
                thumbnailUrl: randomThumbnail, // ✅ Make sure it's a valid image URL
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;
///game menu end///

case 'creepy':
  case 'creepy-md':
    case 'fullmenu': {
      let reaction = sendReaction('👽');

       // Bot Uptime
    let uptime = process.uptime();
    let uptimeText = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;

    // Bot Speed Test
    let start = speed();
    let end = speed();
    let botSpeed = (end - start).toFixed(3);

    // System Info
    let botPlatform = os.platform();
    let botArch = os.arch();
    let botCpu = os.cpus().length;
    let botTotalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    let botFreeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    let botVersion = '2.0.1';
  
      // List of random thumbnails
      let thumbnails = [
          'https://files.catbox.moe/154078.jpeg',
          'https://files.catbox.moe/a7ckn2.jpeg'
      ];
  
      // List of random audio files
      let audioFiles = [
          'https://files.catbox.moe/3dbotw.mp3',
          'https://files.catbox.moe/3dbotw.mp3',
          'https://files.catbox.moe/3dbotw.mp3',
          'https://files.catbox.moe/3dbotw.mp3',
          'https://files.catbox.moe/3dbotw.mp3'
      ];
  
      // Select a random thumbnail
      let randomThumbnail = thumbnails[Math.floor(Math.random() * thumbnails.length)];
  
      // Select a random audio file
      let randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
  
    let Dannymenuoh = `
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *CREEPY_MD-V2*  🚀
╰━━━━━━━━━━━━━━━━━━━╯
║👋 Hello @${m.sender.split("@")[0]},
║${themeemoji} ${DannyTechTimeText} 
║🕒 *Current Time:* ${DannyTechtime}
║📅 *Date:* ${DannyTechdate}
║⚡ *Bot Name:* CREEPY_MD-V2  
║🎭 *Ultimate WhatsApp Bot*
║👨‍💻 *Developer:* Danny
║🔗 *Website:* creepytech.org
──────────────────────
📌 *BOT STATUS*  
> 📡 *Uptime:* ${uptimeText}  
> ⚡ *Speed:* ${botSpeed} ms  
> 🖥️ *System:* ${botPlatform} (${botArch})  
> 💾 *CPU Cores:* ${botCpu}  
> 📂 *Total Memory:* ${botTotalMem} GB  
> 💿 *Free Memory:* ${botFreeMem} GB  
> 🎛️ *Bot Version:* ${botVersion}  
──────────────────────
📌 *MAIN MENU:*  
> *creepy*                                      
> *menu*
> *mainmenu*
> *ownermenu*
> *Groupmenu* 
> *Toolsmenu*
> *stickermenu*
> *Animemenu*  
> *gamemenu* 
> *nsfwmenu* 
> *texteffectmenu*                                       
> *p*                                         
> *buypremium*                                
> *runtime*                                     
> *file*                                       
> *repo*                                      
> *support*   
> *donate*                                  
> *owner*      
> *panel*                                 
──────────────────────${readmore}
📌 *OWNER MENU:*  
> *getsession*                                
> *deletesession*                            
> *join*                                    
> *shutdown*                                 
> *restart*                                     
> *autoread [on/off]*                        
> *autotyping [on/off]*                       
> *autorecording [on/off]*                     
> *autorecordtyp [on/off]*                  
> *autoswview [on/off]*                 
> *autobio [on/off]*                         
> *mode [self/public]*                       
> *block*                                   
> *update*                                    
> *backup*                                  
> *getcase*                                  
> *newowner*                                
> *delowner*                                    
> *creepy-open [viewonce]*                   
> *unblock*                 
> *pinchat*
> *unpinchat*
> *pin*
> *update*
> *autoreact [on/off]*  
> *chatbot [on/off]*
> *antidelete [on/off]*        
> *setexif*
> *setpp*     
> *report*
> *poll*
> *del*
──────────────────────
📌 *GROUP MENU:*  
> *closetime*                                 
> *opentime*                               
> *kick*                                 
> *add*                                   
> *promote*                                  
> *demote*                                      
> *setdesc*                                   
> *tagall*                                     
> *hidetag*                                    
> *totag*                                     
> *group [option]*                           
> *editinfo*                                    
> *linkgc*                                   
> *revoke*                                     
> *listonline* 
> *kickall*
> *alladmins*
> *demoteall*
> *toall*
> *ban*    
> *unban*                            
> *antilink*   
> *delspam*
> *handsomecheck*
> *beautifulcheck*
> *charactercheck*               
> *join-request*  
> *approveall*   
> *welcome [on/off]* 
> *tagadmins*
> *setppgroup*        
> *vcf*
> *mute*
> *unmute*
──────────────────────
📌 *OTHER MENU*
> *getpp* 
> *checkme*
> *capcut*
> *spam*
> *readmore*
> *quoted*
> *encrypt*
> *friend*
──────────────────────
📌 *STICKER MENU:* 
> *stickcry*
> *stickkill*
> *stickpat*
> *sticklick*
> *stickkiss*
> *stickbite*
> *stickyeet*
> *stickbully*
> *stickbonk*
> *stickwink*
> *stickpoke*
> *sticknom*
> *stickslap*
> *sticksmile*
> *stickwave*
> *stickawoo*
> *stickblush*
> *sticksmug*
> *stickglomp*
> *stickhappy*
> *stickdance*
> *stickcringe*
> *stickcuddle*
> *stickhighfive*
> *stickhandhold*
> *stickshinobu*
> *stickspank*
> *sticktickle*
──────────────────────
📌 *ANIME MENU:* 
> *animeawoo*
> *animemegumin*
> *animeshinobu*
> *animehandhold*
> *animehighfive*
> *animecringe*
> *animedance*
> *animehappy*
> *animeglomp*
> *animesmug*
> *animeblush*
> *animewave*
> *animesmile*
> *animepoke*
> *animewink*
> *animebonk*
> *animebully*
> *animeyeet*
> *animebite*
> *animelick*
> *animekill*
> *animecry*
> *animewlp*
> *animekiss*
> *animehug*
> *animeneko*
> *animepat*
> *animeslap*
> *animecuddle*
> *animewaifu*
> *animenom*
> *animefoxgirl*
> *animetickle*
> *animegecg*
> *dogwoof*
> *8ballpool*
> *goosebird*
> *animefeed*
> *animeavatar*
> *lizardpic*
> *catmeow*
──────────────────────
📌 *TOOLS MENU:*  
> *ytmp3 <link>*                              
> *ytmp4 <link>*                               
> *play <song name>*    
> *video <video name>*  
> *Facebook <link>*
> *Instagram <link> *
> *tiktok <link>*
> *ai <query>*
> *gpt <query>*       
> *creepyfy <query>*    
> *imdb*
> *img*         
> *mediafire*
> *apk*
> *screenshot*
> *sticker* 
> *telestick <link>*
> *smeme*
> *swm*
> *toimage*
> *tomp4*
> *toaud*
> *tomp3*
> *tovn*
> *togif*
> *tourl*
> *emojimix*
> *tonce*
> *toqr*
> *fliptext*
> *listvn*
> *liststicker*
> *listimage*
> *listvideo*
> *listzip*
> *listapk*
> *listpdf*
> *openai*
> *ephemeral*
> *analyze*

 *AUDIO ENHANCER*
> *bass*
> *blown* 
> *deep* 
> *earrape*
> *fast*
> *fat*
> *nightcore*
> *reverse*
> *robot*
> *slow*
> *smooth*
> *squirrel*
──────────────────────
📌 *GAME MENU:*  
> *guess <number>*  
> *rps <rock|paper|scissors>*  
> *trivia*  
> *hangman*  
> *scramble*  
> *math*  
> *memory*  
> *riddle*  
> *dice <bet>*
> *dare*
> *truth*
> *quotes*
> *coffee*
> *ttt* 
> *suit*
> *xxqc*
──────────────────────
📌 *NSFW MENU:*  

> *trap*  
> *hentai-neko*  
> *hentai-waifu*  
> *gasm*  
> *milf*  
> *animespank*  
> *blowjob*  
> *cuckold*  
> *eba*  
> *pussy*  
> *yuri*  
> *zettai*  
> *gifblowjob*  
_______________________

📌 *TEXT EFFECT MENU:*  
> *shadow* 
> *write* 
> *romantic* 
> *burnpaper* 
> *smoke* 
> *narutobanner* 
> *love* 
> *undergrass* 
> *doublelove* 
> *coffecup* 
> *underwaterocean* 
> *smokyneon* 
> *starstext* 
> *rainboweffect* 
> *balloontext*
> *metalliceffect* 
> *embroiderytext*
> *flamingtext* 
> *stonetext* 
> *writeart*
> *summertext* 
> *wolfmetaltext* 
> *nature3dtext*
> *rosestext* 
> *naturetypography* 
> *quotesunder* 
> *shinetext* 
──────────────────────
╭━━━━━━━━━━━━━━━━━━━╮
┃  🤖 *CREEPY_MD-V2*  🚀
╰━━━━━━━━━━━━━━━━━━━╯
──────────────────────
🌐 *Creepy Tech Updates*  
🔗 *creepytech.org*  
──────────────────────                       
  `.trim();

  
await DannyTechInc.sendMessage(m.chat, {
        text: Dannymenuoh,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: "CREEPY_MD-V2",
                body: "Danny",
                thumbnailUrl: randomThumbnail, 
                sourceUrl: global.link || "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
            }
        }
    }, { quoted: m });


    await DannyTechInc.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            }
        }
    }, { quoted: m });
}
break;



//-------------------------------[MENUS ENDS]--------------------------------//


                
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(m, bang)
                    }
                    try {
                        replyglobal(m, util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(m, String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(m, evaled)
                    } catch (err) {
                        await replyglobal(m, String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal(m, "*Who Are You to command me huh??*")
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(m, err)
                        if (stdout) return replyglobal(m, stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
