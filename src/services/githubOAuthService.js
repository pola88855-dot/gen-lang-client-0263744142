const { env } = require('../config/env');

function getGithubAuthorizeUrl() {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', env.githubClientId);
  url.searchParams.set('redirect_uri', env.githubRedirectUri);
  url.searchParams.set('scope', 'read:user user:email');
  return url.toString();
}

async function exchangeCodeForToken(code) {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: env.githubClientId,
      client_secret: env.githubClientSecret,
      code,
      redirect_uri: env.githubRedirectUri
    })
  });

  const payload = await response.json();

  if (!response.ok || payload.error) {
    const description = payload.error_description || 'Unknown OAuth token exchange error';
    const error = new Error(`GitHub OAuth token exchange failed: ${description}`);
    error.details = payload;
    error.status = 401;
    throw error;
  }

  return payload.access_token;
}

async function fetchGithubUser(accessToken) {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'al-wali-fleet-app'
    }
  });

  const payload = await response.json();
  if (!response.ok) {
    const error = new Error('Failed to fetch GitHub user profile');
    error.details = payload;
    error.status = 401;
    throw error;
  }

  return payload;
}

module.exports = {
  getGithubAuthorizeUrl,
  exchangeCodeForToken,
  fetchGithubUser
};
