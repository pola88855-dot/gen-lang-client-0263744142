const {
  getGithubAuthorizeUrl,
  exchangeCodeForToken,
  fetchGithubUser
} = require('../services/githubOAuthService');

function redirectToGithub(req, res) {
  return res.redirect(getGithubAuthorizeUrl());
}

async function githubCallback(req, res, next) {
  try {
    const code = req.query.code;

    if (!code) {
      const error = new Error('Missing authorization code in callback query params.');
      error.status = 400;
      throw error;
    }

    const accessToken = await exchangeCodeForToken(code);
    const user = await fetchGithubUser(accessToken);

    return res.status(200).json({
      message: 'GitHub login successful',
      user: {
        id: user.id,
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url
      }
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  redirectToGithub,
  githubCallback
};
