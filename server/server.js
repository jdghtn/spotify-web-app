const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

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

let events =
[
  {
    id: 1,
    name: 'Top Tracks',
    category: 'Music',
    description: "-ify uses Spotify's APIs to access your Top Tracks.",
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500',
    ],
    // location: '1234 Fancy Ave',
    // date: '12-25-2019',
    // time: '11:30'
  },
  {
    id: 2,
    name: 'Top Artists',
    category: 'Music',
    description: "-ify uses Spotify's APIs to access your Top Artists.",
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    // location: '1234 Dog Alley',
    // date: '11-21-2019',
    // time: '12:00'
  },
  {
    id: 3,
    name: 'Recently Played Tracks',
    category: 'Music',
    description: "-ify uses Spotify's APIs to access your Recently Played Tracks.",
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    // location: '1234 Dog Alley',
    // date: '11-21-2019',
    // time: '12:00'
  },
  {
    id: 4,
    name: 'Recommendations',
    category: 'Music',
    description: "-ify uses Spotify's APIs to generate Music Suggestions.",
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    // location: '1234 Dog Alley',
    // date: '11-21-2019',
    // time: '12:00'
  }
]

app.get('/events', /*checkJwt,*/ (req, res) => {
    // const id = Number(req.params.id);
    // const event = events.find(event);
  res.send(events);
});

// For this app, we only want to protect the route that returns the details of an event
app.get('/events/:id', checkJwt, (req, res) => {
  const id = Number(req.params.id);
  const event = events.find(event => event.id === id);
  res.send(event);
});

app.get('/top-tracks', (req, res) => {
    var settings = {
      "url": "curl -X \"GET\" \"https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=10&offset=5\" -H \"Accept: application/json\" -H \"Content-Type: application/json\" -H \"Authorization: Bearer BQA1kXf0EI1Z7L8JsFhVm3JlCvqEV9J6uJeCIa-Ls6bO-et8L31ALAD7RXd0PxyluykjxzfsLrWAz2KRfN6hqxWKyZZ_PB0Q2-JGn3cDnbgQwrD6oXLXpIusPsbyCXR5d4o4usSd9ivyYlIZVHJ-CTpz2VSD-qgLbGfRzaSly-ZXnYc\"",
      "method": "GET",
      "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
 });

// app.get('/top-artists', (req, res) => {
//
//   res.send(...);
// });

// listen on the port
app.listen(port);
