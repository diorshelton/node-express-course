const express = require('express')
const router = express.Router()

const {greeting, logOn} = require('../controllers/main')

const authMiddleWare = require('../middleware/auth')

router.route('/logon').post(logOn)
router.route('/hello').get(authMiddleWare, greeting)
module.exports = router