/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { getItems } = require('./user.controller')
const { getRedis } = require('./user.controller')

/* APIS */
/*router.post('/insert',DataInserted)*/
router.post('/items',getItems)

router.get('/search', getRedis)


module.exports = router