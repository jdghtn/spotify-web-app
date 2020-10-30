// import axios from "axios";
//
// const BASE_URL = 'http://localhost:3333';
//
// export default {
//   async getEvents() {
//     let res = await axios.get("http://localhost:8000/events");
//     return res.data;
//   },
//   async getSingle(eventId, accessToken) {
//     let res = await axios.get("http://localhost:8000/events/" + eventId, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//     return res.data;
//   },
//
// export default {
//   async getTopTracks() {
//     const url = `${BASE_URL}/tracks`;
//     return axios.get(url).then(response => response.data);
//   },
//
//   async getTopArtists() {
//     const url = `${BASE_URL}/artists`;
//     return axios.get(url).then(response => response.data);
//   },
//
//   async getRecentlyPlayed() {
//     const url = `${BASE_URL}/recently-played`;
//     return axios.get(url).then(response => response.data);
//   },
//
//   async getRecommendations() {
//     const url = `${BASE_URL}/recommendations`;
//     return axios.get(url).then(response => response.data);
//   },
// };
// }


import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getTopTracks};
export {getTopArtists};
export {getRecentlyPlayed};
export {getRecommendations};

function getTopTracks() {
  const url = `${BASE_URL}/api/songs/tracks`;
  return axios.get(url).then(response => response.data);
}

function getTopArtists() {
  const url = `${BASE_URL}/api/songs/artists`;
  return axios.get(url).then(response => response.data);
}

function getRecentlyPlayed() {
  const url = `${BASE_URL}/api/songs/recently-played`;
  return axios.get(url).then(response => response.data);
}

function getRecommendations() {
  const url = `${BASE_URL}/api/songs/recommendations`;
  return axios.get(url).then(response => response.data);
}
