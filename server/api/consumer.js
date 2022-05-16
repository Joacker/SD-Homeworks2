/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { getItems } = require('../controllers/consumer.controller')
const { getRedis } = require('../controllers/consumer.controller')

/* APIS */
/*router.post('/insert',DataInserted)*/
router.post('/items',getItems)

router.get('/search', getRedis)


module.exports = router