const moment = require('moment-timezone');
const dotenv = require('dotenv');
const sholat = require('./sholat');
const { resolve } = require('path');

dotenv.config();
moment.locale(process.env.LOCALE);

// console.log(moment(sholat.subuh).format('h:mm a LL'));
let target = 10;

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function checkCurrentTime() {
  while (true) {
    let jam = new Date();
    let detik = jam.getSeconds();
    console.log(detik);
    if (detik == target) {
      console.log('target achieved');
    }
    await sleep(1000);
  }
}

checkCurrentTime();
