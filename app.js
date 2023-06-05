import { getCity, getWeather } from './forecast.js';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const result1 = document.querySelector('#result1');

form.addEventListener('submit', e => {
  e.preventDefault();

  const city = input.value.trim();

  getCity(city)
    .then(data => {
      result.textContent = data.EnglishName;
      return getWeather(data.Key);
    })
    .then(data => {
      result1.textContent = data.WeatherText;
    });

  // getCity(city)
  //   .then(data => {
  //     result.textContent = data.EnglishName;
  //     return getWeather(data.Key);
  //   })
  //   .then(data => {
  //     result1.textContent = data.WeatherText;
  //   });
  form.reset();
});
