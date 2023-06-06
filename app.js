import { getCity, getWeather } from './forecast.js';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const welcomeMssg = document.querySelector('.welcome.mssg');
const resultName = document.querySelector('.result.name');
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
      resultTemp.innerHTML = `${data.Temperature.Metric.Value}&deg;C`;
    });

  form.reset();
});
