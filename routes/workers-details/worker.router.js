const express = require('express');
const router = express.Router();
const controller = require('./worker.controller');

router.post('/send', controller.getAllWorkers);



module.exports = router;
