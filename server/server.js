'use strict';

const express = require('express');
const app = express();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up Auth0 configuration.
// const authConfig = {
//   domain: "dev-7xyy3hfo.us.auth0.com",
//   audience: "https://spotify-web-api.com"
// };

// Create middleware to validate the JWT using express-jwt.
// const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  // secret: jwksRsa.expressJwtSecret({
  //   cache: true,
  //   rateLimit: true,
  //   jwksRequestsPerMinute: 5,
  //   jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  // }),

  // Validate the audience (Identifier) and the issuer (Domain).
//   audience: authConfig.audience,
//   issuer: `https://${authConfig.domain}/`,
//   algorithms: ["RS256"]
// });

/* Start Spotify */
var SpotifyWebApi = require('spotify-web-api-node');
const { json } = require('body-parser');
const { response } = require('express');

const scopes = [
  'user-read-recently-played',
  'user-top-read',
];

const spotifyApi = new SpotifyWebApi({
  redirectUri: 'http://localhost:3333/callback',
  clientId: process.argv.slice(2)[0],
  clientSecret: process.argv.slice(2)[1]
});

app.get('/login', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

app.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      res.redirect('http://localhost:8080/')

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      }, expires_in / 2 * 1000);
    })
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});
/* End Spotify */

// Gets the user's top tracks from Spotify.
app.get('/api/tracks', (req, res) => {
  console.log('The call to api/tracks received.');
  spotifyApi.getMyTopTracks({
    limit: 21
  }).then(function(data) {
    let tracks = data.body.items;
    res.json(tracks);
  }, function(err) {
    console.log('Something went wrong with tracks!', err);
  });
})

// Gets the user's top artists from Spotify.
app.get('/api/artists', (req, res) => {
  console.log('The call to api/artists was received.');
  spotifyApi.getMyTopArtists({
    limit: 21
  }).then(function(data) {
    var artists = data.body.items;
    res.json(artists);
  }, function(err) {
    console.log('Something went wrong with artists!', err);
  });
})

// Gets the user's recently played tracks from Spotify.
app.get('/api/recently-played', (req, res) => {
  console.log('The call to api/recently-played was received.');
  spotifyApi.getMyRecentlyPlayedTracks({
    limit : 21
  }).then(function(data) {
      let played = data.body.items;
      played.forEach(item => (item.track));
      res.json(played);
    }, function(err) {
      console.log('Something went wrong with recently played!', err);
    });
})

// Gets Recommendations from Spotify.
app.get('/api/recommendations', (req, res) => {
  // Gets top 5 artists.
  spotifyApi.getMyTopArtists({
      limit: 5
  }).then(function(data) {
    var artists = data.body.items;
    // Builds an array of artist IDs.
    var seed_artists_array = new Array();
    for (var i = 0; i < 4; i++) {
      seed_artists_array.push(artists[i].id)
    }

    console.log('The call to api/recommendations was received.');
    spotifyApi.getRecommendations({
      limit: 21,
      min_energy: 0.4,
      // Use top 5 artist IDs as seeds.
      seed_artists: seed_artists_array,
      min_popularity: 50
    }).then(function(data) {
      let recommendations = data.body;
      res.json(recommendations);
    }, function(err) {
      console.log("Something went wrong with recommendations!", err);
    });

  }, function(err) {
    console.log('Something went wrong with the top 5 artists!', err);
  });
})

app.listen(3333);
console.log('Listening on localhost:3333');
