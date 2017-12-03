import axios from 'axios';

const API_KEY = '8b765b15d723ad23b66017a6625dc26a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url); // returns a promise - doesn't contain any data, just a request

  return {
    type: FETCH_WEATHER,
    payload: request  // returning promise as payload
  };
}

// redux-promise is a middleware
// sees the incoming action, looks at the payload property
// if payload is a promise, redux-promse stops the action
// once request finishes, dispatches a new action of the same type
// but: with a payload of the resolved request (response)
// so: reducers get the data (and they can stay pure functions)
// so: code seems synchronous!
