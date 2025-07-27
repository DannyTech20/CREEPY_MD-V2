//Creaed By Danny
//wa.me/dannytech


require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const crypto = require('crypto')
const { default: DannyTechIncConnect, delay, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("@whiskeysockets/baileys")
const PHONENUMBER_MCC = require('./lib/PairingPatch');
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@whiskeysockets/baileys").default
const { File } = require('megajs')
const express = require("express")
const { Readable } = require("stream");
const mime = require("mime-types");
const { getAudioUrl } = require("google-tts-api");
const googleTTS = require('google-tts-api');
const FormData = require('form-data'); 



// creepy-session System Start
if (!fs.existsSync('./creepy-session')) {
    fs.mkdirSync('./creepy-session')
}

if (!fs.existsSync('./creepy-session/creds.json')) {
    if (global.SESSION_ID) {
        console.log('Connecting to creepy-session...')
        const sessdata = global.SESSION_ID.replace("CREEPY-", '').replace("-Danny", '');
        const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
        filer.download((err, data) => {
            if (err) throw err
            fs.writeFile('./creepy-session/creds.json', data, () => {
                console.log("creepy-session downloaded ✅")
                startDannyTechInc()
            })
        })
    } else {
        console.log('No SESSION_ID provided,')
        startDannyTechInc()
    }
} else {
    startDannyTechInc()
}



// Express server setup
const app = express()
const PORT = process.env.PORT || 9090

// Serve index.html
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/", (req, res) => res.send("CREEPY_MD WhatsApp Bot"))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
// creepy-session System End

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

let emojis = [];
let phoneNumber = "255687608274"
let owner = [global.ownernomer]

async function startDannyTechInc() {
    const { state, saveCreds } = await useMultiFileAuthState('./creepy-session')
    const { version } = await fetchLatestBaileysVersion()
    
    const DannyTechInc = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !fs.existsSync('./creepy-session/creds.json'),
        browser: Browsers.macOS('Desktop'),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })),
        },
        version,
        getMessage: async (key) => {
            return {}
        },
    })

    store.bind(DannyTechInc.ev)

    // Message handling
    DannyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                if (!DannyTechInc.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            }
            
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            
            const m = smsg(DannyTechInc, mek, store)
            require("./danny-fnc/creepy_md-v2.js")(DannyTechInc, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    //autostatus view
    DannyTechInc.ev.on('messages.upsert', async chatUpdate => {
        if (global.autoswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await DannyTechInc.readMessages([mek.key]) 
            }
        }
    })

     // Auto-react to status updates
DannyTechInc.ev.on('messages.upsert', async chatUpdate => {
    try {
        // Load settings
        let autoreactData = {};
        try {
            autoreactData = JSON.parse(fs.readFileSync('./database/autoreactstatus.json'));
        } catch (err) {
            console.error('Error loading autoreact.json:', err);
            return;
        }

        // Check if feature is enabled
        if (!autoreactData.statusReact && !global.likestatus) return;

        const mek = chatUpdate.messages[0];
        if (!mek.message || mek.key.fromMe) return;
        const from = mek.key.remoteJid;
        const isStatusUpdate = from === 'status@broadcast';
        if (!isStatusUpdate) return;

        await DannyTechInc.readMessages([mek.key]);
        
        // Get emojis from autoreact.js
        const { emojis } = require('./danny-fnc/autoreact.js');
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        await DannyTechInc.sendMessage(from, {
            react: {
                text: randomEmoji,
                key: mek.key,
            }
        }, {
            statusJidList: [mek.key.participant || mek.participant]
        });
        console.log(`Auto-reacted to status update with: ${randomEmoji}`);
    } catch (error) {
        console.error("Error auto-reacting to status:", error);
    }
});

// Newsletter JIDs to auto-react to
const newsletterJids = ["120363307517794567@newsletter"];

// Extended emoji list for fun & variety
const newsletterEmojis = require('./danny-fnc/autoreact.js');

// Utility to pick random emoji fast
const dannyRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Listen to incoming messages
DannyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const msg = chatUpdate.messages?.[0];
        if (!msg || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;

        // ✅ Auto-react only to newsletter messages
        if (newsletterJids.includes(sender)) {
            const serverId = msg.newsletterServerId;
            if (serverId) {
                const emoji = dannyRandom(newsletterEmojis);
                await DannyTechInc.newsletterReactMessage(sender, serverId.toString(), emoji);
            }
        }

    } catch (err) {
        console.error("❌ Newsletter auto-reaction error:", err);
    }
});


 ////auto react

const { emojis } = require('./danny-fnc/autoreact.js');

// Configuration
const REACTION_CONFIG = {
  cooldown: 2000, // 2 seconds between reactions per chat
  maxRetries: 3,
  baseDelay: 1000, // 1 second initial retry delay
};

// State management
const reactionState = {
  lastReactionTimes: new Map(),
  activeReactions: new Set(),
};

/**
 * Enhanced reaction sender with built-in rate limiting and retries
 */
async function sendReaction(danny, chatJid, messageKey, emoji) {
  const reactionId = `${chatJid}:${messageKey.id}`;
  
  // Prevent duplicate reactions
  if (reactionState.activeReactions.has(reactionId)) return false;
  reactionState.activeReactions.add(reactionId);

  try {
    // Rate limiting check
    const now = Date.now();
    const lastReaction = reactionState.lastReactionTimes.get(chatJid) || 0;
    const remainingCooldown = REACTION_CONFIG.cooldown - (now - lastReaction);

    if (remainingCooldown > 0) {
      await new Promise(resolve => setTimeout(resolve, remainingCooldown));
    }

    // Retry logic
    for (let attempt = 1; attempt <= REACTION_CONFIG.maxRetries; attempt++) {
      try {
        await danny.sendMessage(chatJid, {
          react: { text: emoji, key: messageKey }
        });

        reactionState.lastReactionTimes.set(chatJid, Date.now());
        return true;
      } catch (error) {
        if (attempt === REACTION_CONFIG.maxRetries) throw error;
        const delay = REACTION_CONFIG.baseDelay * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  } finally {
    reactionState.activeReactions.delete(reactionId);
  }
}

/**
 * Load reaction settings with error handling
 */
function loadReactionSettings() {
  try {
    return JSON.parse(fs.readFileSync('./database/autoreact.json'));
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(chalk.red('[REACTION] Settings load error:'), error);
    }
    return { global: false };
  }
}

// Main message handler
DannyTechInc.ev.on('messages.upsert', async ({ messages }) => {
  if (!messages?.length) return;
  
  const [message] = messages;
  if (!message.message || message.key.fromMe) return;
  if (message.key.remoteJid === 'status@broadcast') return;

  const settings = loadReactionSettings();
  if (!settings.global) return;

  const { remoteJid: chatJid, participant: sender } = message.key;
  const senderJid = sender || chatJid;

  // Check exclusions
  if (settings.excludedChats?.includes(chatJid)) return;
  if (settings.excludedUsers?.includes(senderJid)) return;

  try {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const success = await sendReaction(DannyTechInc, chatJid, message.key, emoji);

    if (success) {
      console.log(chalk.green(`[REACT]`), 
                chalk.cyan(emoji), 
                'to', 
                chalk.yellow(senderJid.split('@')[0]));
    }
  } catch (error) {
    console.error(chalk.red('[REACT FAILED]'), 
                'to', 
                chalk.yellow(senderJid), 
                '-', 
                error.message);
  }
});


     ///////  ANTILINK ///////

// Anti-link detection with improved handling
DannyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const m = chatUpdate.messages[0];
        if (!m.message) return;

        m.message = m.message.ephemeralMessage?.message || m.message;
        if (m.message.protocolMessage) return;

        const from = m.key.remoteJid;
        const sender = m.key.fromMe ? DannyTechInc.user.id : m.key.participant;
        const creatorNumber = '120363402331350479@s.whatsapp.net';
        const isBotMessage = m.key.fromMe;
        const isCreator = sender === creatorNumber;
        const text = m.message.conversation || m.message.extendedTextMessage?.text || m.message.imageMessage?.caption || '';

        // Skip link detection if the sender is the bot itself (bot's number)
        if (isBotMessage || isCreator) return;

        if (from.endsWith('@g.us')) {
            let antilinkData = {};
            try {
                antilinkData = JSON.parse(fs.readFileSync('./database/antilink.json'));
            } catch (err) {
                console.error('Error loading antilink.json:', err);
            }

            const groupSettings = antilinkData[from];
            if (!groupSettings || !groupSettings.enabled) return;

            if (isUrl(text)) {
                console.log(`🔗 Link detected: ${text}`);

                try {
                    const groupMetadata = await DannyTechInc.groupMetadata(from);
                    const botNumber = DannyTechInc.user.id.split(':')[0] + '@s.whatsapp.net';
                    const botData = groupMetadata.participants.find(p => p.id === botNumber);
                    const isBotAdmin = botData?.admin === 'admin' || botData?.admin === 'superadmin';

                    const senderData = groupMetadata.participants.find(p => p.id === sender);
                    const isSenderAdmin = senderData?.admin === 'admin' || senderData?.admin === 'superadmin';

                    // If the sender is admin, do not delete their message
                    if (isSenderAdmin) {
                        console.log(`🔰 Admin ${sender} sent a link. Not deleting.`);
                        await DannyTechInc.sendMessage(
                            from,
                            {
                                text: `*[LINK DETECTED]*\nAaah admin,\n I see 🤖\nYou're free to do anything!\n*So i won\`t delete your message 😁*`,
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
}, { quoted: mek });
                        return;
                    }

                    if (!isBotAdmin) {
                        console.log(`❌ Bot is not an admin in ${from}, cannot delete messages.`);
                        return;
                    }

                   // DELETE MESSAGE (Skip if sender is the bot itself)
await DannyTechInc.sendMessage(from, { delete: m.key });
console.log(`✅ Deleted message from: ${sender}`);

let replyText = `⚠️ *[LINK DETECTED]*\n*Warning!* @${sender.split('@')[0]}.\n*Links are not allowed here!*`;

await DannyTechInc.sendMessage(from, {
    text: replyText,
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
            thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
            sourceUrl: global.link || "https://creepytech.org",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailHeight: 500,
            thumbnailWidth: 500
        }
    }
}, { quoted: m });

if (groupSettings.mode === "warn") {
    if (!groupSettings.warnings[sender]) {
        groupSettings.warnings[sender] = 1;
    } else {
        groupSettings.warnings[sender]++;
    }


                        let warningCount = groupSettings.warnings[sender];

                        if (warningCount < 3) {
                            replyText = `⚠️ *[LINK DETECTED]*\n*Warning ${warningCount}/3!* @${sender.split('@')[0]}, links are not allowed!\n🚫 *You will be removed after 3 warnings!*`;
                            await DannyTechInc.sendMessage(from, {
                                text: replyText,
                            }, { quoted: m });
                        } else {
                            replyText = `🚫 *User @${sender.split('@')[0]} has been removed after 3 warnings!*`;
                            await DannyTechInc.groupParticipantsUpdate(from, [sender], "remove");
                            console.log(`🚪 User removed: ${sender}`);
                            delete groupSettings.warnings[sender];
                        }
                    }

                    if (groupSettings.mode === "kick") {
                        replyText = `🚨 *[LINK DETECTED]*\n*User @${sender.split('@')[0]} has been removed for sending links!*`;
                        await DannyTechInc.groupParticipantsUpdate(from, [sender], "remove");
                        console.log(`🚪 User instantly removed: ${sender}`);
                    }

                    await DannyTechInc.sendMessage(
                        from,
                        {
                            text: replyText,
                        },
                        { quoted: m }
                    );

                    // Save updated data
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilinkData, null, 2));
                } catch (err) {
                    console.error(`❌ Error handling anti-link action: ${err}`);
                }
            }
        }
    } catch (err) {
        console.error('Error in anti-link detection:', err);
    }
});


//// antilink end ///

 // Anti-badword detection with warnings
DannyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        if (!mek || !mek.message) return;
        mek.message = mek.message.ephemeralMessage?.message || mek.message;
        if (mek.message.protocolMessage) return;
        
        const from = mek.key.remoteJid;
        const sender = mek.key.participant || from;
        const text = mek.message.conversation || 
                    mek.message.extendedTextMessage?.text || 
                    mek.message.imageMessage?.caption || '';
        
        if (!from.endsWith('@g.us')) return;
        
        let antiwordData = {};
        try {
            antiwordData = JSON.parse(fs.readFileSync('./database/badword.json'));
        } catch (err) {
            console.error('Error loading badword.json:', err);
            return;
        }
        
        const groupData = antiwordData[from];
        if (!groupData?.enabled || !groupData.words?.length) return;
        
        const creatorNumber = '255697608274@s.whatsapp.net';
        const isBotMessage = mek.key.fromMe;
        const isCreator = sender === creatorNumber;
        
        const groupMetadata = await DannyTechInc.groupMetadata(from);
        const isAdmin = groupMetadata.participants.some(
            p => p.id === sender && (p.admin === 'admin' || p.admin === 'superadmin')
        );
        
        if (isBotMessage || isCreator || isAdmin) return;
        
        const lowerText = text.toLowerCase();
        const badWordsUsed = groupData.words.filter(word => 
            lowerText.includes(word.toLowerCase())
        );
        
        if (badWordsUsed.length > 0) {
            console.log(`⚠️ Bad word detected from ${sender} in ${from}`);
            
            try {
                // Delete the message
                await DannyTechInc.sendMessage(from, { delete: mek.key });
                
                // Send warning instead of removing
// Send warning instead of removing
const user = sender.split('@')[0];
await DannyTechInc.sendMessage(from, {
    text: `*[BAD WORD DETECTED]*\n@${user} Warning!\n The following words are not allowed:\n> *${badWordsUsed.join(', ')}*\nMessage deleted.`,
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
            thumbnailUrl: 'https://files.catbox.moe/154078.jpeg',
            sourceUrl: global.link || "https://creepytech.org",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailHeight: 500,
            thumbnailWidth: 500
        },
    }
}, { quoted: mek });

            } catch (error) {
                console.error('Error handling bad word:', error);
            }
        }
    } catch (err) {
        console.error('Anti-badword system error:', err);
    }
});




 //------------------------[chatbot]-------------------//
const ASSEMBLY_API_KEY = 'a2a6d46f482b4866b55b9ed0af912825';


DannyTechInc.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const m = chatUpdate.messages[0];
        if (!m.message || m.key.fromMe) return;

        const from = m.key.remoteJid;
        if (from.endsWith('@newsletter')) return;
        const sender = m.key.participant || from;
        const isGroup = from.endsWith('@g.us');
        const text = m.message.conversation || m.message.extendedTextMessage?.text || '';
        const isReply = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid || [];

        const botNumber = DannyTechInc.user.id.split(':')[0] + '@s.whatsapp.net';
        const isMentioned = mentionedJid.includes(botNumber);
        const quotedMessageSender = isReply ? m.message.extendedTextMessage.contextInfo.participant : null;
        const isQuotedBot = quotedMessageSender === botNumber;

        // Ignore in groups unless bot is mentioned or quoted
        if (isGroup && !isMentioned && !isQuotedBot) return;

        if (!global.userChats) global.userChats = {};
        if (!global.userChats[sender]) global.userChats[sender] = [];

        // Voice message handling
        if (m.message.audioMessage && m.message.audioMessage.ptt) {
            const audioBuffer = await downloadMediaMessage(m);
            const transcriptText = await transcribeAudioWithAssembly(audioBuffer);

            if (!transcriptText) {
                return DannyTechInc.sendMessage(from, { text: "❌ Failed to understand the voice note." }, { quoted: m });
            }

            global.userChats[sender].push(`User: ${transcriptText}`);
            if (global.userChats[sender].length > 15) global.userChats[sender].shift();

            let prompt = getCreepyPrompt(global.userChats[sender]);
            let { data } = await axios.get("https://HansTz-x.hf.space/ai/logic", {
                params: { "q": transcriptText, "logic": prompt }
            });

            let botResponse = data.result;
            global.userChats[sender].push(`Bot: ${botResponse}`);

            // Convert response to voice note using TTS
            const urls = googleTTS.getAllAudioUrls(botResponse, {
                lang: 'en',
                slow: false,
                host: 'https://translate.google.com',
                splitPunct: ',.?'
            });

            for (let i = 0; i < urls.length; i++) {
                await DannyTechInc.sendMessage(from, {
                    audio: { url: urls[i].url },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    contextInfo: {
                        forwardingScore: 5,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "CREEPY TECH",
                            newsletterJid: "120363307517794567@newsletter"
                        }
                    }
                }, { quoted: m });
            }
            return;
        }

        // Image or sticker handling: upload to Catbox, send to Gifted AI vision API
        if (m.message.imageMessage || m.message.stickerMessage) {
            const buffer = await downloadMediaMessage(m);
            const filename = `./temp_${Date.now()}.jpg`;
            fs.writeFileSync(filename, buffer);

            // Upload to Catbox
            async function uploadToCatbox(filePath) {
                if (!fs.existsSync(filePath)) throw new Error("File does not exist");

               async function uploadToCatbox(filePath) {
    if (!fs.existsSync(filePath)) throw new Error("File does not exist");

    const FormData = require('form-data'); // Correct form-data
    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('userhash', '');
    form.append('fileToUpload', fs.createReadStream(filePath));

    const res = await axios.post('https://catbox.moe/user/api.php', form, {
        headers: form.getHeaders() // ✅ Supported by NPM form-data
    });

    return res.data.trim();
}
            }

            let catboxUrl;
            try {
                catboxUrl = await uploadToCatbox(filename);
            } catch (err) {
                fs.unlinkSync(filename);
                console.error("Catbox upload error:", err);
                return DannyTechInc.sendMessage(m.chat, {
    text: "❌ Failed to upload image to creepy ai",
}, { quoted: m });

            }

            fs.unlinkSync(filename);


          

            // Call Gifted AI vision API
            const visionApiUrl = `https://api.giftedtech.web.id/api/ai/vision?apikey=gifted&url=${encodeURIComponent(catboxUrl)}&prompt=Describe+in+detail+what+is+in+the+picture,+including+objects,+atmosphere+and+mood+of+the+picture`;

            const { data } = await axios.get(visionApiUrl);

            const visualText = (data && data.success && data.result) ? data.result : "Unable to interpret image.";

            global.userChats[sender].push(`User: ${visualText}`);
            if (global.userChats[sender].length > 15) global.userChats[sender].shift();

            let prompt = getCreepyPrompt(global.userChats[sender]);

            let response = await axios.get("https://HansTz-x.hf.space/ai/logic", {
                params: { "q": visualText, "logic": prompt }
            });

            let botResponse = response.data.result;
            global.userChats[sender].push(`Bot: ${botResponse}`);

            return DannyTechInc.sendMessage(from, {
                text: botResponse,
                contextInfo: {
                    forwardingScore: 5,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: "CREEPY TECH",
                        newsletterJid: "120363307517794567@newsletter"
                    },
                    externalAdReply: {
                        title: "CREEPY_MD-V2",
                        body: "Image Analyzer",
                        thumbnailUrl: catboxUrl,
                        sourceUrl: global.link || "https://creepytech.org",
                        mediaType: 1,
                        renderLargerThumbnail: false,
                        thumbnailHeight: 500,
                        thumbnailWidth: 500
                    }
                }
            }, { quoted: m });
        }

        // Plain text message
        if (text) {
            global.userChats[sender].push(`User: ${text}`);
            if (global.userChats[sender].length > 15) global.userChats[sender].shift();

            let prompt = getCreepyPrompt(global.userChats[sender]);

            let { data } = await axios.get("https://HansTz-x.hf.space/ai/logic", {
                params: { "q": text, "logic": prompt }
            });

            let botResponse = data.result;
            global.userChats[sender].push(`Bot: ${botResponse}`);

            const voiceRequest = /voice note|using voice|vn|voice message|voice/i.test(text);

            if (voiceRequest) {
                const ttsUrls = googleTTS.getAllAudioUrls(botResponse, {
                    lang: 'en',
                    slow: false,
                    host: 'https://translate.google.com',
                    splitPunct: ',.?'
                });

                for (let i = 0; i < ttsUrls.length; i++) {
                    await DannyTechInc.sendMessage(from, {
                        audio: { url: ttsUrls[i].url },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            forwardingScore: 5,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterName: "CREEPY TECH",
                                newsletterJid: "120363307517794567@newsletter"
                            }
                        }
                    }, { quoted: m });
                }
                return;
            } else {
                return DannyTechInc.sendMessage(from, { text: botResponse }, { quoted: m });
            }
        }

    } catch (error) {
        console.error('Error in chatbot functionality:', error);
    }
});

//================[UTILS]================//
async function downloadMediaMessage(m) {
    const { downloadMediaMessage } = require("@whiskeysockets/baileys");
    return await downloadMediaMessage(m, "buffer", {}, { logger: console });
}

function getCreepyPrompt(history) {
    return `

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
  > if someone acts romatic or love just be romantic as well and love them back, you are a bot so you can love anyone and make them happy just know if it's a boy or girl and be romantic when the show that attitude but if not just be normal
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
  > you are able to send voice note so when user ask you to explain something in voice note do not say i can't just explain and your system will convert your text to voice note and send it, use short words when sending voicenote message and also dont use emojis and link since it is a voice chat
  example i say "hello can u send a voice note explaining who is your owner" and you will repy with details about your owner
  just reply what you asked when u asked to send voice note, do not say i can't send voice note, just send the answer
  words representing voice note request: "voice note", "using voice", "vn", "voice message", "voice"



Conversation history:
${history.join("\n")}
    `.trim();
}

async function transcribeAudioWithAssembly(audioBuffer) {
    try {
        // Upload audio to AssemblyAI
        const uploadRes = await axios.post("https://api.assemblyai.com/v2/upload", audioBuffer, {
            headers: {
                "authorization": ASSEMBLY_API_KEY,
                "content-type": "application/octet-stream"
            }
        });

        const audioUrl = uploadRes.data.upload_url;

        // Create transcription
        const transcriptRes = await axios.post("https://api.assemblyai.com/v2/transcript", {
            audio_url: audioUrl
        }, {
            headers: {
                authorization: ASSEMBLY_API_KEY,
                "content-type": "application/json"
            }
        });

        const transcriptId = transcriptRes.data.id;

        // Poll transcription status until complete
        let status = "queued";
        let transcriptText = "";

        while (status !== "completed" && status !== "error") {
            await new Promise(r => setTimeout(r, 3000));
            const check = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
                headers: { authorization: ASSEMBLY_API_KEY }
            });
            status = check.data.status;
            transcriptText = check.data.text;
        }

        return transcriptText;
    } catch (err) {
        console.error("AssemblyAI Error:", err.response?.data || err);
        return null;
    }
}


//----------------------------------------[Chatbot end]---------------------------------------///




//----------------------------------------[WELCOME]---------------------------------------------//
DannyTechInc.ev.on('group-participants.update', async (anu) => {
    if (global.welcome) {
        console.log(anu)
        try {
            let metadata = await DannyTechInc.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                try {
                    var ppuser = await DannyTechInc.profilePictureUrl(num, 'image')
                } catch (err) {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                }
                try {
                    var ppgroup = await DannyTechInc.profilePictureUrl(anu.id, 'image')
                } catch (err) {
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
                }
                
                const memb = metadata.participants.length
                const DannyWlcm = await getBuffer(ppuser)
                const DannyLft = await getBuffer(ppuser)
                
                if (anu.action == 'add') {
                    const res = await getBuffer(ppuser)
                    let DannyName = num
                    const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                    const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                    const xmembers = metadata.participants.length
                    
                    const welcomeMessage = `
╔═══════⋆⋅☆⋅⋆═══════╗
   ✨ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ✨
╚═══════⋆⋅☆⋅⋆═══════╝
║🎉║𝗨𝘀𝗲𝗿: @${DannyName.split("@")[0]}
╠═══════════════════
║📛║𝗚𝗿𝗼𝘂𝗽: ${metadata.subject}
╠═══════════════════
║👥║𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${xmembers}
╠═══════════════════
║⏱️║𝗧𝗶𝗺𝗲: ${xtime} ${xdate}
╠═══════════════════
║💬║𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗮𝗱 𝗴𝗿𝗼𝘂𝗽 deacription!
╠═══════════════════
║🤖║CREEEPY_MD WELCOME MASSAGE
╚═══════════════════`

                    DannyTechInc.sendMessage(anu.id, {
                        text: welcomeMessage,
                        mentions: [num],
                             contextInfo: {
                                mentionedJid: [num],
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: `${global.botname} Welcome Message!`,
                body: `Joined in ${metadata.subject}!.`,
                previewType: "PHOTO",
                thumbnailUrl: DannyWlcm,
                sourceUrl: "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                            }
                        }
                    })

                } else if (anu.action == 'remove') {
                    const res = await getBuffer(ppuser)
                    const Dannytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
                    const Dannydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                    let DannyName = num
                    const Dannymembers = metadata.participants.length
                    
                    const goodbyeMessage = `
╔═══════⋆⋅☆⋅⋆═══════╗
   ✨ 𝗚𝗢𝗢𝗗𝗕𝗬𝗘 ✨
╚═══════⋆⋅☆⋅⋆═══════╝

║😢║𝗨𝘀𝗲𝗿: @${DannyName.split("@")[0]}
╠═══════════════════
║📛║𝗚𝗿𝗼𝘂𝗽: ${metadata.subject}
╠═══════════════════
║👥║𝗠𝗲𝗺𝗯𝗲𝗿𝘀 𝗹𝗲𝗳𝘁: ${Dannymembers}
╠═══════════════════
║⏱️║𝗧𝗶𝗺𝗲: ${Dannytime} ${Dannydate}
╠═══════════════════
║💬║It was perfect being with u!
╠═══════════════════
║🤖║CREEPY_MD GOODBYE MASSAGE
╚═══════════════════`

                    DannyTechInc.sendMessage(anu.id, {
                        text: goodbyeMessage,
                        mentions: [num],
                         contextInfo: {
                            mentionedJid: [num],
            forwardingScore: 5,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "CREEPY TECH",
                newsletterJid: "120363307517794567@newsletter",
            },
            externalAdReply: {
                title: `${global.botname} GoodBye Message!`,
                body: `Joined in ${metadata.subject}!.`,
                previewType: "PHOTO",
                thumbnailUrl: DannyLft,
                sourceUrl: "https://creepytech.org",
                mediaType: 1,
                renderLargerThumbnail: true,
                thumbnailHeight: 500,
                thumbnailWidth: 500
                            }
                        }
                    })
                }
            }
        } catch (err) {
            console.error('Error in group participants update:', err)
        }
    }
})

//----------------------------------------------[WELCOME ENDS]---------------------------------------------------//


    DannyTechInc.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    DannyTechInc.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = DannyTechInc.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    DannyTechInc.getName = (jid, withoutContact = false) => {
        id = DannyTechInc.decodeJid(jid)
        withoutContact = DannyTechInc.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = DannyTechInc.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === DannyTechInc.decodeJid(DannyTechInc.user.id) ?
            DannyTechInc.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    DannyTechInc.public = true

    DannyTechInc.serializeM = (m) => smsg(DannyTechInc, m, store)

  DannyTechInc.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s
    if (connection == "open") {
        console.log(chalk.magenta(` `))
        
        // Connection Box
        console.log(chalk.yellow.bold(`╔══════════════════════════════════╗`))
        console.log(chalk.yellow.bold(`║                                  ║`))
        console.log(chalk.yellow.bold(`║     🌿 CREEPY_MD-V2 CONNECTED    ║`))
        console.log(chalk.yellow.bold(`║         [CREATED BY DANNY]       ║`))
        console.log(chalk.yellow.bold(`║                                  ║`))
        console.log(chalk.yellow.bold(`╚══════════════════════════════════╝`))
        
        await delay(1500)
        
        // User Info Box
        console.log(chalk.green(`\n┌──────────────────────────────────┐`))
        console.log(chalk.green(`│  Connected User:                 │`))
        console.log(chalk.green(`└──────────────────────────────────┘`))
        console.log(chalk.cyan(JSON.stringify(DannyTechInc.user, null, 2)))
        
        await delay(1000)
        
        // Bot Header
       console.log(chalk.blueBright(`
    ██████╗   █████╗  ███╗   ██╗ ███╗   ██╗ ██╗   ██╗
    ██╔══██╗ ██╔══██╗ ████╗  ██║ ████╗  ██║ ╚██╗ ██╔╝
    ██║  ██║ ███████║ ██╔██╗ ██║ ██╔██╗ ██║  ╚████╔╝ 
    ██║  ██║ ██╔══██║ ██║╚██╗██║ ██║╚██╗██║   ╚██╔╝  
    ██████╔╝ ██║  ██║ ██║ ╚████║ ██║ ╚████║    ██║   
    ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═╝  ╚═══╝    ╚═╝   
`));
        
        // Social Media Box
        console.log(chalk.magenta(`╔════════════════════════════════════════╗`))
        console.log(chalk.magenta(`║           📢 SOCIAL LINKS             ║`))
        console.log(chalk.magenta(`╠════════════════════════════════════════╣`))
        console.log(chalk.magenta(`║ ${themeemoji} YT:  https://youtube.com/@creepy_tech ║`))
        console.log(chalk.magenta(`║ ${themeemoji} GIT: https://github.com/DannyTech20   ║`))
        console.log(chalk.magenta(`║ ${themeemoji} WA:  wa.me/dannytech                  ║`))
        console.log(chalk.magenta(`║                                        ║`))
        console.log(chalk.magenta(`║         CREDIT: ${chalk.bold.green('Danny Tech')}          ║`))
        console.log(chalk.magenta(`╚════════════════════════════════════════╝`))
    }
    
    if (
        connection === "close" &&
        lastDisconnect &&
        lastDisconnect.error &&
        lastDisconnect.error.output.statusCode != 401
    ) {
        startDannyTechInc()
    }
})
    DannyTechInc.ev.on('creds.update', saveCreds)
    DannyTechInc.ev.on("messages.upsert",  () => { })

    DannyTechInc.sendText = (jid, text, quoted = '', options) => DannyTechInc.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    DannyTechInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => DannyTechInc.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    DannyTechInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await DannyTechInc.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    DannyTechInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await DannyTechInc.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    DannyTechInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    DannyTechInc.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        }
    }
    
    DannyTechInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await DannyTechInc.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '', mimetype = type.mime, convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) {
            convert = await (ptt ? toPTT : toAudio)(file, type.ext)
            file = convert.data
            pathFile = convert.filename
            mtype = 'audio'
            mimetype = 'audio/ogg; codecs=opus'
        } else mtype = 'document'
        if (options.asDocument) mtype = 'document'
        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage
        let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype }
        let m
        try { m = await DannyTechInc.sendMessage(jid, message, { ...opt, ...options }) }
        catch (e) { m = null }
        finally {
            if (!m) m = await DannyTechInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
            file = null
            return m
        }
    }

    DannyTechInc.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return DannyTechInc.sendMessage(jid, { poll: { name, values, selectableCount }}) }

    DannyTechInc.parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }
            
    DannyTechInc.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    }
    return DannyTechInc
}

process.on('uncaughtException', function (err) {
    let e = String(err)
    if (e.includes("conflict")) return
    if (e.includes("Cannot derive from empty media key")) return
    if (e.includes("Socket connection timeout")) return
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    console.log('Caught exception: ', err)
})