const Bot = require('node-telegram-bot-api');
const request = require('request');
const token = '697036602:AAHwtJbcP7mp-nNzepGJibUUruUOksLOqXY';
const trigger = 'loddo';
const trigger2 = 'Loddo';
const trigger3 = 'buongiorno prof';
const trigger4 = 'Buongiorno prof';
const trigger5 = 'non ho lo scotch';
const trigger6 = 'Non ho lo scotch';
const trigger7 = 'popopopo';
const trigger8 = 'Popopopo';
const trigger9 = 'Businfo';
const trigger10 = 'businfo';
const trigger11 = 'BusiTrigger';
const trigger12 = 'Merjaaa';
const trigger13 = 'merjaaa';
const trigger14 = 'tigre';
const trigger15 = 'Tigre';
const trigger16 = 'Buongiorno';
const trigger17 = 'buongiorno';
const trigger18 = 'chi sei?';
const trigger19 = 'Chi sei?';
const trigger20 = 'chi sei tu?';
const trigger21 = 'Chi sei tu?';
const trigger22 = 'Salute';
const trigger23 = 'salute';
const trigger24 = 'Punto z';
const trigger25 = 'punto z';
const trigger26 = 'Punto Z';
const trigger27 = 'punto z';
const trigger28 = 'Paesaggio veneto';
const trigger29 = 'paesaggio veneto';
const trigger30 = 'Dispensa';
const trigger31 = 'dispensa';
const trigger32 = 'Farfalle';
const trigger33 = 'farfalle';
const bot = new Bot(token, {polling: true});
bot.on('message', (msg) => {
  if (msg.text.toString() === trigger)
    bot.sendMessage(msg.chat.id, 'LODDOOOOOOOOOO!');
  if (msg.text.toString() === trigger2)
    bot.sendMessage(msg.chat.id, 'LODDOOOOOOOOOO!');
  if (msg.text.toString() === trigger3)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger4)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger5)
    bot.sendMessage(msg.chat.id, 'AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!');
  if (msg.text.toString() === trigger6)
    bot.sendMessage(msg.chat.id, 'AAAH NON HA LO SCOTCH! E IO METTO DUE E NOTA SUL REGISTROOOOOOH!');
  if (msg.text.toString() === trigger7)
    bot.sendMessage(msg.chat.id, 'MERJAAA VAI FUORI DALLA PORTAAAAAH!');
  if (msg.text.toString() === trigger8)
    bot.sendMessage(msg.chat.id, 'MERJAAA VAI FUORI DALLA PORTAAAAAH!');
  if (msg.text.toString() === trigger9)
    bot.sendMessage(msg.chat.id, 'Il Busi 1.1.2 by @LeddaZ - Digita BusiTrigger per la lista dei comandi - Codice del bot: https://github.com/LeddaZ/NastroAdesivoBot');
  if (msg.text.toString() === trigger10)
    bot.sendMessage(msg.chat.id, 'Il Busi 1.1.2 by @LeddaZ - Digita BusiTrigger per la lista dei comandi - Codice del bot: https://github.com/LeddaZ/NastroAdesivoBot');
  if (msg.text.toString() === trigger11)
    bot.sendMessage(msg.chat.id, 'Comandi del Busi - Loddo; Non ho lo scotch; Buongiorno prof; Buongiorno; Businfo; Popopopo; Tigre; Merjaaa; Chi sei?; Chi sei tu?; Salute; Punto Z; Paesaggio veneto; Dispensa; Farfalle');
  if (msg.text.toString() === trigger12)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString() === trigger13)
    bot.sendMessage(msg.chat.id, 'CHI È QUESTO? AH È GUERAAAAAAH!');
  if (msg.text.toString() === trigger14)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg LE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString() === trigger15)
    bot.sendMessage(msg.chat.id, 'https://i.ytimg.com/vi/q2l06PW6Uts/maxresdefault.jpg LE TIGRI SOFFRONOOOOH!');
  if (msg.text.toString() === trigger16)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger17)
    bot.sendMessage(msg.chat.id, 'BUONGIORNO SEDUTI! SI VA IN LABORATORIOH!');
  if (msg.text.toString() === trigger18)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger19)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger20)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger21)
    bot.sendMessage(msg.chat.id, 'SEI BELLABONA?');
  if (msg.text.toString() === trigger22)
    bot.sendMessage(msg.chat.id, "Dire 'salute' quando si StErNutA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
  if (msg.text.toString() === trigger23)
    bot.sendMessage(msg.chat.id, "Dire 'salute' quando si StErNutA è buona educazione, ma in alcuni casi, come nella 2IE, disturba la lezione, quindi non si dice, PENA... L'INFERNOOOOOOH! CI SIAMO CAPITIIIIH?");
  if (msg.text.toString() === trigger24)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger25)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger26)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger27)
    bot.sendMessage(msg.chat.id, "IL PUNTO Z È ALL'INFINITOOOH!");
  if (msg.text.toString() === trigger28)
    bot.sendMessage(msg.chat.id, "http://www.paesaggioveneto.it/");
  if (msg.text.toString() === trigger29)
    bot.sendMessage(msg.chat.id, "http://www.paesaggioveneto.it/");
  if (msg.text.toString() === trigger30)
    bot.sendMessage(msg.chat.id, "http://pdfitalia.link/arte-cinema-e-fotografia/dispensa-di-disegno-tecnico.pdf");
  if (msg.text.toString() === trigger31)
    bot.sendMessage(msg.chat.id, "http://pdfitalia.link/arte-cinema-e-fotografia/dispensa-di-disegno-tecnico.pdf");
  if (msg.text.toString() === trigger32)
    bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
  if (msg.text.toString() === trigger33)
    bot.sendMessage(msg.chat.id, "Le farfalle fanno AAAAAHHHHHH!");
})
