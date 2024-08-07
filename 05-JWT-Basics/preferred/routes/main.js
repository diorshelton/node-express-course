const express = require('express')
const router = express.Router()

const {greeting, logOn} = require('../controllers/main')

router.route('/logon').post(logOn)
router.route('/hello').get(greeting)

module.exports = router