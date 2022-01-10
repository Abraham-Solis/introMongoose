const router = require('express').Router()

router.use('/api', require('./birdRoutes.js'))
router.use('/api', require('./catRoutes.js'))

module.exports = router