import { getCity, getWeather } from './forecast.js';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const welcomeMssg = document.querySelector('.welcome.mssg');
const resultName = document.querySelector('.result.name');
const resultIcon = document.querySelector('.result.icon');
const resultCond = document.querySelector('.result.cond');
const resultTemp = document.querySelector('.result.temp');

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = input.value.trim();

  getCity(city)
    .then(data => {
      welcomeMssg.style.display = 'none';
      resultName.textContent = data.EnglishName;
      return getWeather(data.Key);
    })
    .then(data => {
      resultCond.textContent = data.WeatherText;
      resultTemp.innerHTML = `${data.Temperature.Metric.Value}<span>&deg;C</span>`;

      const num = data.WeatherIcon;
      console.log(num);
      const path = '<img src="./img/weather/icons8-';

      if (num <= 2) {
        resultIcon.innerHTML = `${path}sun-100.png" />`;
      } else if (num === 3 || num === 4) {
        resultIcon.innerHTML = `${path}partly-cloudy-day-100.png" />`;
      } else if (num === 5) {
        resultIcon.innerHTML = `${path}haze-100.png" />`;
      } else if (num >= 6 && num <= 11) {
        resultIcon.innerHTML = `${path}clouds-100.png" />`;
      } else if (num === 12 || num === 13) {
        resultIcon.innerHTML = `${path}rain-cloud-100-2.png" />`;
      } else if (num === 14) {
        resultIcon.innerHTML = `${path}rain-cloud-100.png" />`;
      } else if (num >= 15 && num <= 18) {
        resultIcon.innerHTML = `${path}cloud-lightning-100.png" />`;
      } else if (num >= 19 && num <= 23) {
        resultIcon.innerHTML = `${path}snow-100.png" />`;
      } else if (num === 24) {
        resultIcon.innerHTML = `${path}icy-100.png" />`;
      } else if (num >= 25 && num <= 29) {
        resultIcon.innerHTML = `${path}sleet-100.png" />`;
      } else if (num === 30) {
        resultIcon.innerHTML = `${path}thermometer-up-100.png" />`;
      } else if (num === 31) {
        resultIcon.innerHTML = `${path}thermometer-down-100.png" />`;
      } else if (num === 32) {
        resultIcon.innerHTML = `${path}wind-100.png" />`;
      } else if (num === 33 || num === 34) {
        resultIcon.innerHTML = `${path}moon-and-stars-100.png" />`;
      } else if (num === 35 || num === 36) {
        resultIcon.innerHTML = `${path}night-100.png" />`;
      } else if (num === 37) {
        resultIcon.innerHTML = `${path}fog-100.png" />`;
      } else if (num === 38 || num === 39) {
        resultIcon.innerHTML = `${path}clouds-100.png" />`;
      } else if (num === 39 || num === 40) {
        resultIcon.innerHTML = `${path}rain-cloud-100-2.png" />`;
      } else if (num === 41 || num === 42) {
        resultIcon.innerHTML = `${path}cloud-lightning-100.png" />`;
      } else if (num >= 43) {
        resultIcon.innerHTML = `${path}snow-100.png" />`;
      } else {
        resultIcon.innerHTML = '';
      }
    })
    .catch(err => console.log(err));

  form.reset();
});
