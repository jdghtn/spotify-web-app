// A browser-based HTTP client.
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

// Allows the functions to be referenced in other files.
export {getTopTracks};
export {getTopArtists};
export {getRecentlyPlayed};
export {getRecommendations};

// Gets the user's top tracks from localhost:3333.
async function getTopTracks() {
  const url = `${BASE_URL}/api/tracks`;
  const response = await axios.get(url);
  return response.data;
}

// Gets the user's top artists from localhost:3333.
async function getTopArtists() {
  const url = `${BASE_URL}/api/artists`;
  const response = await axios.get(url);
  return response.data;
}

// Gets the user's recently played songs from localhost:3333.
async function getRecentlyPlayed() {
  const url = `${BASE_URL}/api/recently-played`;
  const response = await axios.get(url);
  return response.data;
}

// Gets recommendations from localhost:3333.
async function getRecommendations() {
  const url = `${BASE_URL}/api/recommendations`;
  const response = await axios.get(url);
  return response.data;
}
