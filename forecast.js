const API =
  location.protocol === 'http:'
    ? 'http://dataservice.accuweather.com'
    : 'https://dataservice.accuweather.com';

const key = '7mrOGHxhz3eBJLYvg2hngLwMsBGxyg4T';

export const getCity = async city => {
  const response = await fetch(
    `${API}/locations/v1/cities/search?apikey=${key}&q=${city}`
  );
  const data = await response.json();
  return data[0];
};

export const getWeather = async id => {
  const response = await fetch(
    `${API}/currentconditions/v1/${id}?apikey=${key}`
  );
  const data = await response.json();
  return data[0];
};
