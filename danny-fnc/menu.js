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


switch (command) {

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
`;trim();

                    await DannyTechInc.sendMessage(m.chat, {
                        text: menuMessage,
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
                }
                break





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
                if (typemenu === 'V2') {
                    DannyTechInc.sendMessage(m.chat, {
                        text: Dannymenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    DannyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb.jpg'),
                        gifPlayback: false,
                        caption: Dannymenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/f6j3fl.jpeg',
                                sourceUrl: ``,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    DannyTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb.jpg'),
                        caption: Dannymenuoh,
                        gifPlayback: false
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    DannyTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: Dannymenuoh
                        }
                    }, {})
                }
                break




}

}