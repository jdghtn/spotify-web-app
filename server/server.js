'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-7xyy3hfo.us.auth0.com",
  audience: "https://spotify-web-api.com"
};

// Create middleware to validate the JWT using express-jwt
const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"]
});

var SpotifyWebApi = require('spotify-web-api-node');

var scopes = ['user-top-read', 'user-read-recently-played'],
  redirectUri = 'http://localhost:8888/callback',
  clientId = 'af4f4a03083c41f0a25aa2c233fb1e42';
  // state = 'some-state-of-my-choice'; // I have no idea what this is.

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes); // (scopes, state)

console.log(authorizeURL);

// You can generate one by going to https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/?type=artists
spotifyApi.setAccessToken('BQAqszloOywgtuYb3pEJPddU1cGuc39x1UZKb06r-auKyxDtBof3Q2omt4umOXBA6NG_jdvt3jgMTSB5lejcbohvmSDJOlRW1CyGtLm_RWZDKohezmJN4WfnxpxyD4aQi5N_ilAuS02-2DRHwR_Mf-opzJ_EOl30sqUaf5Dygwf00PYy8fs');

app.get('/tracks', (req, res) => {
  spotifyApi.getMyTopTracks()
  .then(function(data) {
    let tracks = data.body.items;
    res.json(tracks);
  }, function(err) {
    res.json('Something went wrong with tracks!', err);
  });
})

app.get('/artists', (req, res) => {
  spotifyApi.getMyTopArtists()
  .then(function(data) {
    let artists = data.body.items;
    res.json(artists);
  }, function(err) {
    res.json('Something went wrong with artists!', err);
  });
})

app.get('/recently-played', (req, res) => {
  spotifyApi.getMyRecentlyPlayedTracks({
    limit : 20
  }).then(function(data) {
    let played = data.body.items;
      played.forEach(item => res.json(item.track));
    }, function(err) {
      res.json('Something went wrong!', err);
  });
})

app.get('/recommendations', (req, res) => {
  spotifyApi.getRecommendations({
    min_energy: 0.4,
    seed_artists: ['6fcTRFpz0yH79qSKfof7lp', '23fqKkggKUBHNkbKtXEls4'],
    min_popularity: 20
  }).then(function(data) {
      let recommendations = data.body;
      res.json(recommendations);
    }, function(err) {
      res.json("Something went wrong with recommendations!", err);
  });
})

// listen on the port
app.listen(3333);
console.log('listening on localhost:3333');
