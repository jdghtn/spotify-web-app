// A browser-based HTTP client.
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

// Allows the functions to be referenced in other files.
export {getTopTracks};
export {getTopArtists};
export {getRecentlyPlayed};
export {getRecommendations};

// Gets the user's top tracks from localhost:3333.
function getTopTracks() {
  const url = `${BASE_URL}/api/tracks`;
  return axios.get(url).then(response => response.data);
}

// Gets the user's top artists from localhost:3333.
function getTopArtists() {
  const url = `${BASE_URL}/api/artists`;
  return axios.get(url).then(response => response.data);
}

// Gets the user's recently played songs from localhost:3333.
function getRecentlyPlayed() {
  const url = `${BASE_URL}/api/recently-played`;
  return axios.get(url).then(response => response.data);
}

// Gets recommendations from localhost:3333.
function getRecommendations() {
  const url = `${BASE_URL}/api/recommendations`;
  return axios.get(url).then(response => response.data);
}
