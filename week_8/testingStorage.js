'use strict'
const { getAllFromStorage, getFromStorage, addToStorage, updateStorage, removeFromStorage } = require('./storage/storageLayer');
getAllFromStorage().then(console.log).catch(console.log);
getFromStorage(2).then(console.log).catch(console.log);
addToStorage({

  "id": 4,
  "name": "xBigFlop Mark II",
  "type": "xserver",
  "processor": "xMinPower",
  "amount": 30


})