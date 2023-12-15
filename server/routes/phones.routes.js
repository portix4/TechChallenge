const { getAllPhones, getPhonebyId } = require('../controllers/phone.controllers')

const router = require('express').Router()

router.get('/:id', getPhonebyId)

router.get('/', getAllPhones)

module.exports = router
