const express = require('express')

const AboutmeCtrl = require('../controllers/aboutme-ctrl')

const router = express.Router()

router.post('/aboutme', AboutmeCtrl.createAboutme)
router.put('/aboutme/:id', AboutmeCtrl.updateAboutme)
router.delete('/aboutme/:id', AboutmeCtrl.deleteAboutme)
router.get('/aboutme/:id', AboutmeCtrl.getAboutmeById)
router.get('/aboutmes', AboutmeCtrl.getAboutmes)

module.exports = router