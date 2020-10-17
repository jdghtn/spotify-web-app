import axios from "axios";

const BASE_URL = 'http://localhost:3333';

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

export {getTopTracks};
export {getTopArtists};
export {getRecentlyPlayed};

function getTopTracks() {
  const url = `${BASE_URL}/tracks`;
  return axios.get(url).then(response => response.data);
}

function getTopArtists() {
  const url = `${BASE_URL}/artists`;
  return axios.get(url).then(response => response.data);
}

function getRecentlyPlayed() {
  const url = `${BASE_URL}/recently-played`;
  return axios.get(url).then(response => response.data);
}
// }
