const express = require('express')
const router = express.Router()
const {login, register, data} = require('../controllers/usersControllers')
const protect = require('../middleware/authMiddleware')

router.post('/', register)
router.post('/login', login)
router.get('/datos', protect, data)

module.exports = router