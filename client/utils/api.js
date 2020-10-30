
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getTopTracks};
export {getTopArtists};
export {getRecentlyPlayed};
export {getRecommendations};

function getTopTracks() {
  const url = `${BASE_URL}/api/tracks`;
  return axios.get(url).then(response => response.data);
}

function getTopArtists() {
  const url = `${BASE_URL}/api/artists`;
  return axios.get(url).then(response => response.data);
}

function getRecentlyPlayed() {
  const url = `${BASE_URL}/api/recently-played`;
  return axios.get(url).then(response => response.data);
}

function getRecommendations() {
  const url = `${BASE_URL}/api/recommendations`;
  return axios.get(url).then(response => response.data);
}
