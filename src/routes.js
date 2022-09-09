const { Router } = require('express')

const contactController = require('./controllers/contactController')

const router = Router()

router.get('/contacts', contactController.index)

module.exports = router
