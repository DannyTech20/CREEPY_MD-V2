//=================================[CREATED BY DANNY]===============================\\
//========================[wa.me/dannytech]==================\\

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
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');
const Danny = require('Danny');

 //reply
        const replyglobal = (teks) => {
            DannyTechInc.sendMessage(m.chat,
                {
                    text: teks,
                    contextInfo: {
                        mentionedJid: [sender],
                        forwardingScore: 9999999,
                        isForwarded: false,
                        "externalAdReply": {
                            "showAdAttribution": true,
                            "containsAutoReply": true,
                            "title": ` ${global.botname}`,
                            "body": `${ownername}`,
                            "previewType": "PHOTO",
                            "thumbnailUrl": ``,
                            "thumbnail": fs.readFileSync(`./DannyMedia/thumb.jpg`),
                            "sourceUrl": `${link}`
                        }
                    }
                },
                { quoted: m })
        }

//=====================[commands]==================\\

switch (command) {


   case 'addprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 2)
                    return replyglobal(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal("Success")
                }
                break
                //antilink detection by Danny
                //Credits danny
                //wa.me/255697608274
                const antilink = require('./antilink');
                const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json')); // Load anti-link configuration

                // Regex to detect links
                const linkRegex = /(https?:\/\/[^\s]+)/g;

                // Anti-Link Detection
                if (m.isGroup && !m.key.fromMe && antilink.isAntiLinkEnabled(m.chat, _antilink)) {
                    if (linkRegex.test(m.text)) {
                        // Delete the message
                        DannyTechInc.sendText(m.chat, `Link detected and deleted!`);
                        DannyTechInc.deleteMessage(m.chat, m.key);

                        // Increment warnings
                        antilink.incrementWarnCount(m.chat, _antilink);
                        const warnings = antilink.getWarnCount(m.chat, _antilink);

                        if (warnings >= 3) {
                            // Kick the user after 3 warnings
                            DannyTechInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                            antilink.resetWarnCount(m.chat, _antilink); // Reset warnings after kick
                        } else {
                            // Warn the user
                            DannyTechInc.sendTextWithMentions(
                                m.chat,
                                `@${m.sender.split('@')[0]}, links are not allowed in this group. You have been warned (${warnings}/3).`
                            );
                        }
                    }
                } 8
                break

            // Command to toggle anti-link
            case 'antilink':
            case 'detect':
                {
                    if (!isGroupAdmin) return replyglobal('This command is for group admins only.');
                    if (args.length < 1) return replyglobal('Usage: *antilink on/off*');

                    if (args[0] === 'on') {
                        antilink = true
                        replyglobal('Bot creepy Anti-link has been enabled for this group.');
                    } else if (args[0] === 'off') {
                        antilink = false
                        replyglobal('Bot creepy Anti-link has been disabled for this group.');
                    } else {
                        replyglobal('Usage: *antilink on/off*');
                    }
                }
                break

            //Autostatus like and react by Danny
            case 'autostatusreact': {
                if (!isCreator) return replyglobal(mess.owner);
                if (args.length < 1) return replyglobal('Usage: autostatusreact on/off [emoji]');

                if (args[0] === 'on') {
                    if (!args[1]) return replyglobal('Please provide an emoji for the reaction. Example: autostatusreact on 👍');
                    autostatusReact = true;
                    reactEmoji = args[1]; // Store the emoji
                    replyglobal(`Bot Autostatus React is enabled. Bot will react to statuses with "${reactEmoji}".`);
                } else if (args[0] === 'off') {
                    autostatusReact = false;
                    replyglobal('Bot Autostatus React is disabled.');
                } else {
                    replyglobal('Invalid option. Use: autostatusreact on/off [emoji]');
                }
            }
                if (autostatusReact) {
                    try {
                        const statusList = await DannyTechInc.fetchStatusUpdates(); // Fetch all status updates
                        for (const status of statusList) {
                            await DannyTechInc.sendMessage(status.sender, {
                                react: {
                                    text: reactEmoji || '😂', // Use the configured emoji or default to 😂
                                    key: status.key,
                                },
                            });
                            console.log(`Reacted to status from ${status.sender} with "${reactEmoji}"`);
                        }
                    } catch (err) {
                        console.error('Error reacting to status:', err);
                        replyglobal('Failed to react to statuses.');
                    }
                }
                break;

            case 'delprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyglobal("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyglobal("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyglobal(mess.owner)
                let data = require("./database/premium.json")
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
                if (!isCreator) return replyglobal(mess.owner)
                fs.readdir("./session", async function (err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyglobal('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyglobal(teks)
                    filteredArray.map(function (e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyglobal(teks)
                    await sleep(2000)
                    replyglobal("Delete junk files...")
                    await filteredArray.forEach(function (file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyglobal("Successfully deleted all the trash in the session folder")
                });
            }
                break
            case 'join':
            case 'enter':
                try {
                    if (!isCreator) return replyglobal(mess.owner)
                    if (!text) return replyglobal('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyglobal('Link Invalid!')
                    replyglobal(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await DannyTechInc.groupAcceptInvite(result).then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                } catch {
                    replyglobal('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                DannyTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('Bot Creepy in Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyglobal(`Bot Creepy changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyglobal(`Bot Creepy changed autoread to ${q}`)
                }
                break
            case 'autotyping':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyglobal(`Bot Creepy changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyglobal(`Bot Creepy changed auto-typing to ${q}`)
                }
                break
            case 'autorecording':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyglobal(`Bot Creepy changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyglobal(`Bot Creepy changed auto-recording to ${q}`)
                }
                break
            case 'autorecordtyp':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyglobal(`Bot Creepy changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyglobal(`Bot Creepy changed auto recording and typing to ${q}`)
                }
                break
            case 'autoswview':
            case 'autostatusview': {
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal('on/off?')
                if (args[0] === 'on') {
                    autoswview = true
                    replyglobal(`${command} is enabled`)
                } else if (args[0] === 'off') {
                    autoswview = false
                    replyglobal(`${command} is disabled`)
                }
            }
                break
            case 'autobio':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyglobal(`Bot Creepy Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyglobal(`Bot Creepy Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    DannyTechInc.public = true
                    replyglobal(mess.done)
                } else if (q == 'self') {
                    DannyTechInc.public = false
                    replyglobal(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyglobal(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyglobal(mess.owner)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
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
                    replyglobal(mess.done)
                } else {
                    var memeg = await DannyTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break


                      case 'block':
                if (!isCreator) return replyglobal(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.updateBlockStatus(blockw, 'block').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyglobal(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'left':
                if (!isCreator) return replyglobal(mess.owner)
                if (!m.isGroup) return replyglobal(mess.group)
                replyglobal('Bye Everyone 🥺')
                await DannyTechInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyglobal(mess.owner)
                if (m.isGroup) return replyglobal(mess.private)
                replyglobal(mess.wait)
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
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await DannyTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyglobal(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    DannyTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Danny',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyglobal(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
                break
            case 'getcase':
                if (!isCreator) return replyglobal(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("creepymd1.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyglobal(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replyglobal(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyglobal('I\'m not the one who send that text!')
                DannyTechInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
                break

            case 'closetime':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    DannyTechInc.groupSettingUpdate(m.chat, 'announcement')
                    replyglobal(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    DannyTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyglobal(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await DannyTechInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await DannyTechInc.groupUpdateSubject(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await DannyTechInc.groupUpdateDescription(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
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
                    replyglobal(mess.done)
                } else {
                    var memeg = await DannyTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                let teks = `*\`CREEPY_MD-V2👥ALL MEMBERS TAGGED\`*
 
                 📄 *Message : \`${q ? q : 'blank'}\`*\n 🎉 Happy new year all tagged members 🎉\n> *Don\'t mimd my owner for tagging you😏😁*\n ${readmore}`

                for (let mem of participants) {
                    teks += `🚔 @${mem.id.split('@')[0]}\n`
                }
                DannyTechInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
            case 'dtag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                DannyTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
            case 'tag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!m.quoted) return replyglobal(`Reply messages with captions ${prefix + command}`)
                DannyTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'gc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'close') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyglobal(`*Group closed 🔐*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'open') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyglobal(`*Group opened 🔓*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'open') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyglobal(`*Group edit info opened*`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'close') {
                    await DannyTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyglobal(`*Group edit info closed*`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'glink':
            case 'linkgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let response = await DannyTechInc.groupInviteCode(m.chat)
                DannyTechInc.sendText(m.chat, `👥 *\`CREEPY_MD-V2 GROUP INFO\`*\n🤖 *Group Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🏷 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Members :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                await DannyTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyglobal(`Bot Creepy Reset, Group Invite Link Successfully ${groupMetadata.subject}`)
                    }).catch((err) => replyglobal(json(err)))
                break
            case 'p':
            case 'ping':
            case 'speed':
            case 'taste': {
                const used = process.memoryUsage();
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
                    return cpu;
                });
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total;
                    last.speed += cpu.speed / length;
                    last.times.user += cpu.times.user;
                    last.times.nice += cpu.times.nice;
                    last.times.sys += cpu.times.sys;
                    last.times.idle += cpu.times.idle;
                    last.times.irq += cpu.times.irq;
                    return last;
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                });
                let timestamp = speed();
                let latensi = speed() - timestamp;
                neww = performance.now();
                oldd = performance.now();
                respon = `
𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

> 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 created by Danny
    `.trim();

                await DannyTechInc.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second of creepy time`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });


                await DannyTechInc.react(m.chat, "🍻", m.key.id);
            }
                break

            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nDo you want to Buy Premium? Just type owner and chat with the owner😉`;

                // React with a thumbs up emoji before sending the message
                await DannyTechInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });

                await DannyTechInc.react(m.chat, "🫵", m.key.id);
            }
                break

            case 'runtime':
            case 'uptime':
                let runtimetext = `*\`𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\` \n\`Have Been Running For ${runtime(process.uptime())}\`*`;

                // React with a thumbs up emoji before sending the message
                await DannyTechInc.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `CREEPY_MD-V2 created by Danny`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                });

                await DannyTechInc.react(m.chat, "🏃", m.key.id);
                break

            case 'sc':
            case 'repo':
            case 'script':
            case 'scriptbot':
            case 'file':
                DannyTechInc.sendMessage(m.chat, {
                    text: `\`Hello ${pushname}\`\nTo get the file of CREEPY_MD-V2 \n*Check out github*\n> https://github.com/DannyTech20/CREEPY_MD-V2.git\n*Or check it on Telegram*\n> https://t.me/creepytechnology`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `This is ${botname} Created by Danny`,
                            thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'support':
            case 'pay':
                let textnate = `> Hello ${pushname}\nNo matter how much you send it is very valuable to 𝐷𝛥𝛮𝛮𝑌`
                DannyTechInc.sendMessage(m.chat, {
                    text: '*You can pay via visa*\n*4403530021231999*\n*Also if you are from east Africa you can use pohone number*\nAirtel number\n*255697608274*\n*Name:Abraham laizer*\n`Airtel moey`\n*Vodacom number*\n*255768788833*\n*Name:Janeth Ibrahim*\n`M-pesa`\n*Thank you and keep using 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏*\n' + textnate
                }, {
                    quoted: m
                })
                break
            case 'owner':
            case 'Danny': {
                const repf = await DannyTechInc.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, mentions: [sender]
                }, { quoted: m })
                DannyTechInc.sendMessage(from, { text: `𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏\n> Hello @${sender.split("@")[0]}, 🙄That is 𝓒𝓡𝓔𝓔𝓟𝓨_𝓜𝓓-𝓥𝟏 owner`, mentions: [sender] }, { quoted: repf })
            }
                break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
                break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyglobal(respond)
                if (!text) return replyglobal(respond)
                replyglobal(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await DannyTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
                break
            case 'swm': case 'steal': case 'stickerwm': case 'take': {
                if (!args.join(" ")) return replyglobal(`Where is the text?`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (m.quoted.isAnimated === true) {
                    DannyTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
                    DannyTechInc.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
                } else if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 Seconds!')
                    let media = await quoted.download()
                    let encmedia = await DannyTechInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                } else {
                    replyglobal(`Photo/Video?`)
                }
            }
                break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
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
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
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
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
                break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyglobal(mess.wait)
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
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                DannyTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
                break
            case 'togif': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
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
                replyglobal(mess.wait)
                let media = await DannyTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyglobal(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyglobal(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
                break
            case 'emojimix':
            case 'mix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyglobal(`Example : ${prefix + command} 😀+😂`)
                if (!emoji2) return replyglobal(`Example : ${prefix + command} 😀+😂`)
                replyglobal(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await DannyTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
                break
            case 'tovv':
            case 'toviewonce': {
                if (!quoted) return replyglobal(`Reply Image/Video`)
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
                if (!q) return replyglobal(' Plelinkgive me link or text!')
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
                if (args.length < 1) return replyglobal(`Example:\n${prefix}fliptext Creepy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyglobal(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
                break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNotecreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNotecreep.length}*`
                replyglobal(teks)
            }
                break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickercreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickercreep.length}*`
                replyglobal(teks)
            }
                break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imagecreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imagecreep.length}*`
                replyglobal(teks)
            }
                break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videocreep) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videocreep.length}*`
                replyglobal(teks)
            }
                break
            case 'addowner':
            case 'newowner':
                if (!isCreator) return replyglobal(mess.owner)
                if (!args[0]) return replyglobal(`Use ${prefix + command} number\nExample ${prefix + command} ${ownernumber}`)
                bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
                let ceknye = await DannyTechInc.onWhatsApp(bnnd)
                if (ceknye.length == 0) return replyglobal(`Enter A Valid And Registered Number On WhatsApp!!!`)
                owner.push(bnnd)
                fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
                replyglobal(`Congratulations ${bnnd} ${pushname} Has Become An Owner!!!`)
                break
            case 'delowner':
                if (!isCreator) return replyglobal(mess.owner)
                if (!args[0]) return replyglobal(`Use ${prefix + command} nomor\nExample ${prefix + command} 255697608274`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = owner.indexOf(ya)
                owner.splice(unp, 1)
                fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
                replyglobal(`This user  ${ya} ${pushname} is no longer an owner!!!`)
                break
            case 'addvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Video Name?')
                if (Videocreep.includes(q)) return replyglobal("The name you entered already exists")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                Videocreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videocreep))
                fs.unlinkSync(delb)
                replyglobal(`Success Adding Video \nTo View Type ${prefix}listvideo`)
            }
                break
            case 'delvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Video Name')
                if (!Videocreep.includes(q)) return replyglobal("Name Does Not Exist in Database")
                let wanu = Videocreep.indexOf(q)
                Videocreep.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videocreep))
                fs.unlinkSync(`./GlobalMedia/video/${q}.mp4`)
                replyglobal(`Successfully Deleted Video ${q}`)
            }
                break
            case 'addimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('The name of the image?')
                if (Imagecreep.includes(q)) return replyglobal("The name you entered is already registered in the database")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                Imagecreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imagecreep))
                fs.unlinkSync(delb)
                replyglobal(`Bot Creepy added Image\nTo Check Type ${prefix}listimage`)
            }
                break
            case 'delimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Image Name')
                if (!Imagecreep.includes(q)) return replyglobal("The image name you entered is not registered")
                let wanu = Imagecreep.indexOf(q)
                Imagecreep.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imagecreep))
                fs.unlinkSync(`./GlobalMedia/image/${q}.jpg`)
                replyglobal(`Bot Creepy Deleted Image ${q}`)
            }
                break
            case 'addsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker?')
                if (Stickercreep.includes(q)) return replyglobal("Name Already In Use")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                Stickercreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickercreep))
                fs.unlinkSync(delb)
                replyglobal(`Successfully Adding Sticker\nTo Check Type ${prefix}liststicker`)
            }
                break
            case 'delsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker')
                if (!Stickercreep.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = Stickercreep.indexOf(q)
                StickerDannyTechInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickercreep))
                fs.unlinkSync(`./GlobalMedia/sticker/${q}.webp`)
                replyglobal(`Bot Creepy Removed Sticker ${q}`)
            }
                break
            case 'addvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name?')
                if (VoiceNotecreep.includes(q)) return replyglobal("Name Already In Use")
                let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNotecreep.push(q)
                await fsx.copy(delb, `./GlobalMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNotecreep))
                fs.unlinkSync(delb)
                replyglobal(`Bot Creepy Added Audio\nTo Check Type ${prefix}listvn`)
            }
                break
            case 'delvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name')
                if (!VoiceNotecreep.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = VoiceNotecreep.indexOf(q)
                VoiceNotecreep.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNotecreep))
                fs.unlinkSync(`./GlobalMedia/audio/${q}.mp3`)
                replyglobal(`Bot Creepy Deleted Audio ${q}`)
            }
                break
            case 'addzip': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal(`What's the zip name?`)
                let teks = `${text}`
                {
                    if (Zipcreep.includes(teks)) return replyglobal("This name is already in use")
                    let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    Zipcreep.push(teks)
                    await fsx.copy(delb, `./GlobalMedia/zip/${teks}.zip`)
                    fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipcreep))
                    fs.unlinkSync(delb)
                    replyglobal(`Bot Creepy Added zip\nTo check type ${prefix}listzip`)
                }
            }
                break
            case 'delzip': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('Enter the text in the zip list')
                let teks = `${text}`
                {
                    if (!Zipcreep.includes(teks)) return replyglobal("This name does not exist in the database")
                    let wanu = Zipcreep.indexOf(teks)
                    Zipcreep.splice(wanu, 1)
                    fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipcreep))
                    fs.unlinkSync(`./GlobalMedia/zip/${teks}.zip`)
                    replyglobal(`Successfully deleted zip ${teks}`)
                }
            }
                break
            case 'listzip': {
                await loading()
                let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
                for (let x of Zipcreep) {
                    teksooooo += `│⭔ ${x}\n`
                }
                teksooooo += `│\n└────────────⭓\n\n*Total : ${Zipcreep.length}*`
                replyglobal(teksooooo)
            }
                break
            case 'addapk': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('What is the name of the apk?')
                let teks = `${text}`
                {
                    if (Apkcreep.includes(teks)) return replyglobal("This name is already in use")
                    let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    apknye.push(teks)
                    await fsx.copy(delb, `./GlobalMedia/apk/${teks}.apk`)
                    fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkcreep))
                    fs.unlinkSync(delb)
                    replyglobal(`Bot Creepy Added the apk\nTo Check type ${prefix}listapk`)
                }
            }
                break
            case 'delapk': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('Name of the apk?')
                let teks = `${text}`
                {
                    if (!Apkcreep.includes(teks)) return replyglobal("This name does not exist in the database")
                    let wanu = Apkcreep.indexOf(teks)
                    Apkcreep.splice(wanu, 1)
                    fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkcreep))
                    fs.unlinkSync(`./GlobalMedia/apk/${teks}.apk`)
                    replyglobal(`Bot Creepy deleted Apk ${teks}`)
                }
            }
                break
            case 'listapk': {
                await loading()
                let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
                for (let x of Apkcreep) {
                    teksoooooo += `│⭔ ${x}\n`
                }
                teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apkcreep.length}`
                replyglobal(teksoooooo)
            }
                break
            case 'addpdf': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('What is the name of the pdf')
                let teks = `${text}`
                {
                    if (Doccreep.includes(teks)) return replyglobal("This name is already in use")
                    let delb = await DannyTechInc.downloadAndSaveMediaMessage(quoted)
                    docunye.push(teks)
                    await fsx.copy(delb, `./GlobalMedia/doc/${teks}.pdf`)
                    fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Doccreep))
                    fs.unlinkSync(delb)
                    replyglobal(`Bot Creepy Added Pdf\nTo check type ${prefix}listpdf`)
                }
            }
                break
            case 'delpdf': {
                if (!isPremium) return replyglobal(mess.prem)
                await loading()
                if (args.length < 1) return replyglobal('Enter the name')
                let teks = `${text}`
                {
                    if (!Doccreep.includes(teks)) return replyglobal("This name does not exist in the database")
                    let wanu = DocApk.indexOf(teks)
                    docunye.splice(wanu, 1)
                    fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Doccreep))
                    fs.unlinkSync(`./GlobalMedia/doc/${teks}.pdf`)
                    replyglobal(`Bot Creepy deleted pdf ${teks}`)
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
                replyglobal(teksoooo)
            }
                break
            case 'afk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (isAfkOn) return replyglobal("Already notag")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyglobal(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
            case 'play': case 'song': {
                if (!text) return replyglobal(`Example : ${prefix + command} anime whatsapp status`)
                const creepplaymp3 = require('./lib/ytdl2')
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anup3k = search.videos[0]
                const pl = await creepplaymp3.mp3(anup3k.url)
                await DannyTechInc.sendMessage(m.chat, {
                    audio: fs.readFileSync(pl.path),
                    fileName: anup3k.title + '.mp3',
                    mimetype: 'audio/mp4', ptt: true,
                    contextInfo: {
                        externalAdReply: {
                            title: anup3k.title,
                            body: botname,
                            thumbnail: await fetchBuffer(pl.meta.image),
                            mediaType: 2,
                            mediaUrl: anup3k.url,
                        }

                    },
                }, { quoted: m })
                await fs.unlinkSync(pl.path)
            }
                break
            case "ytmp3": case "ytaudio":
                const creepaudp3 = require('./lib/ytdl2')
                if (args.length < 1 || !isUrl(text) || !creepaudp3.isYTUrl(text)) return replyglobal(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
                const audio = await creepaudp3.mp3(text)
                await DannyTechInc.sendMessage(m.chat, {
                    audio: fs.readFileSync(audio.path),
                    mimetype: 'audio/mp4', ptt: true,
                    contextInfo: {
                        externalAdReply: {
                            title: audio.meta.title,
                            body: botname,
                            thumbnail: await fetchBuffer(audio.meta.image),
                            mediaType: 2,
                            mediaUrl: text,
                        }
                    },
                }, { quoted: m })
                await fs.unlinkSync(audio.path)
                break
            case 'ytmp4': case 'ytvideo': {
                const creepvidoh = require('./lib/ytdl2')
                if (args.length < 1 || !isUrl(text) || !creepvidoh.isYTUrl(text)) replyglobal(`Where is the link??\n\nExample : ${prefix + command} https://youtu.be/HBUWUVVRzf4?si=4CvKunyL6Wm0Qwm1`)
                const vid = await creepvidoh.mp4(text)
                const ytc = `
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
                await DannyTechInc.sendMessage(m.chat, {
                    video: { url: vid.videoUrl },
                    caption: ytc
                }, { quoted: m })
            }
                break

            
  case 'telestick': {
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                    let creepresources = await Telesticker(args[0])
                    await replyglobal(`Sending ${creepresources.length} stickers...`)
                    if (m.isGroup && creepresources.length > 30) {
                        await replyglobal('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < creepresources.length; i++) {
                            DannyTechInc.sendMessage(m.sender, { sticker: { url: creepresources[i].url } })
                        }
                    } else {
                        for (let i = 0; i < creepresources.length; i++) {
                            DannyTechInc.sendMessage(m.chat, { sticker: { url: creepresources[i].url } })
                        }
                    }
                } else replyglobal(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
            }
                break


}