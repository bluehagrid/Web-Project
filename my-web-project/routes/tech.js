const express = require('express');
const router = express.Router();





router.get('/tech', (req, res) => {
  res.send('tech')
});


module.exports = router;