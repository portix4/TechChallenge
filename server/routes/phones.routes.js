const {
    getAllPhones,
    getPhonebyId
} = require("../controllers/phone.controllers")

const router = require("express").Router()

router.get("/", getAllPhones)

router.get("/:id", getPhonebyId)

module.exports = router