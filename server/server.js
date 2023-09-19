const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const clientId = '';
const clientSecret = '';
const redirectUri = 'http://localhost:3000/vibu';

const codeVerifier = crypto.randomBytes(64).toString('hex');

const codeChallenge = crypto
  .createHash('sha256')
  .update(codeVerifier)
  .digest('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=+$/, '');

app.get('/login', (req, res) => {
  const scopes = 'user-read-private user-read-email';
  const state = crypto.randomBytes(16).toString('hex');
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&state=${state}&code_challenge_method=S256&code_challenge=${codeChallenge}`;
  res.redirect(authUrl);
});

app.post('/callback', async (req, res) => {
  const code = req.body.code;

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirectUri);
  params.append('client_id', clientId);
  params.append('code_verifier', codeVerifier);

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = response.data.access_token;
    const refreshToken = response.data.refresh_token;

    // Send the accessToken as a JSON response
    res.json({ accessToken });
  } catch (error) {
    console.error('Error:', error);
    res.redirect('http://localhost:3000/error');
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
