const express = require('express');
const { generateText } = require('../controllers/openaicontrollers');
const router = express.Router();

router.post('/generatetext', generateText)

module.exports = router;