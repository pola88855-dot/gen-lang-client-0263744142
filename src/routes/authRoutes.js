const express = require('express');
const { redirectToGithub, githubCallback } = require('../controllers/authController');

const router = express.Router();

router.get('/github', redirectToGithub);
router.get('/github/callback', githubCallback);

module.exports = router;
