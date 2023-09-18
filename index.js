const { Client, LocalAuth ,MessageMedia} = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')
const Timer = require('./timer')
const qrTimer = new Timer()
const fs = require('fs');

const whatsapp = new Client({
    puppeteer: process.platform !== 'win32' ? {
        args: ['--no-sandbox']
    } : undefined,
    authStrategy: new LocalAuth({ session: process.env.WA_SESSION }),
});

whatsapp.on('qr', qr => {
    console.log(`\n👇 QR GENERATED NUMBER #${qrTimer.num()} - Time: ${qrTimer.newTime()} - AVG: ${qrTimer.avgTime()}`)
    qrcode.generate(qr, { small: true });
    console.log(`👆 QR GENERATED NUMBER #${qrTimer.lastNum()} - Time: ${qrTimer.lastTime()}\n\n`)
});

whatsapp.on('ready', async () => {
    console.log('Client is ready!');
})

//whatsapp.on('message_create', async message => {})

whatsapp.on('message', async message => {

})
whatsapp.initialize();
