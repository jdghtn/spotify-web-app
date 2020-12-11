/* Used to send and receive HTTP requests to api.js */

// A browser-based HTTP client.
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

// Allows the functions to be referenced in other files.
export { getTopTracks };
export { getTopArtists };
export { getRecentlyPlayed };
export { getRecommendations };

// Axios waits for the response from getMyTopTracks() in api.js.
async function getTopTracks() {
  const url = `${BASE_URL}/api/tracks`;
  const response = await axios.get(url);
  return response.data;
}

// Axios waits for the response from getMyTopArtists() in api.js.
async function getTopArtists() {
  const url = `${BASE_URL}/api/artists`;
  const response = await axios.get(url);
  return response.data;
}

// Axios waits for the response from getMyRecentlyPlayedTracks() in api.js.
async function getRecentlyPlayed() {
  const url = `${BASE_URL}/api/recently-played`;
  const response = await axios.get(url);
  return response.data;
}

// Axios waits for the response from getRecommendations() in api.js.
async function getRecommendations() {
  const url = `${BASE_URL}/api/recommendations`;
  const response = await axios.get(url);
  return response.data;
}
