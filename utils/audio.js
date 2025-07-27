const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

async function getAudioBuffer(m, client) {
    const type = Object.keys(m.message)[0];
    const stream = await downloadContentFromMessage(m.message[type], type.includes('audio') ? 'audio' : 'image');
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
}

module.exports = { getAudioBuffer };
