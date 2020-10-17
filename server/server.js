const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// // Set up Auth0 configuration
// const authConfig = {
//   domain: "dev-7xyy3hfo.us.auth0.com",
//   audience: "https://spotify-web-api.com"
// };
//
// // Create middleware to validate the JWT using express-jwt
// const checkJwt = jwt({
//   // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//   }),
//
//   // Validate the audience (Identifier) and the issuer (Domain).
//   audience: authConfig.audience,
//   issuer: `https://${authConfig.domain}/`,
//   algorithms: ["RS256"]
// });

var SpotifyWebApi = require('spotify-web-api-node');

var scopes = ['user-top-read', 'user-read-recently-played'],
  redirectUri = 'http://localhost:8888/callback',
  clientId = 'af4f4a03083c41f0a25aa2c233fb1e42';
  state = 'some-state-of-my-choice'; // I have no idea what this is.

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

console.log(authorizeURL);

// You can generate one by going to https://developer.spotify.com/console/get-current-user-top-artists-and-tracks/?type=artists
spotifyApi.setAccessToken('');

/* Get a User’s Top Tracks*/
spotifyApi.getMyTopTracks()
  .then(function(data) {
    let topTracks = data.body.items;
    console.log(topTracks);
  }, function(err) {
    console.log('Something went wrong!', err);
});

app.get('/top-tracks', (req, res) => {
    res.send();
 });

// listen on the port
app.listen(port);
