const adhan = require('adhan');
const dotenv = require('dotenv');

dotenv.config();

const latitude = process.env.LATITUDE;
const longitude = process.env.LONGITUDE;

const coordinates = new adhan.Coordinates(Number(latitude), Number(longitude));
const params = adhan.CalculationMethod.Singapore();
params.madhab = adhan.Madhab.Shafi;
params.fajrAngle = 20;
params.ishaAngle = 18;

const prayerTimes = new adhan.PrayerTimes(coordinates, new Date(), params);

const subuh = prayerTimes.fajr;
const dzuhur = prayerTimes.dhuhr;
const azhar = prayerTimes.asr;
const maghrib = prayerTimes.maghrib;
const isya = prayerTimes.isha;

const sholat = { subuh, dzuhur, azhar, maghrib, isya };

module.exports = sholat;
