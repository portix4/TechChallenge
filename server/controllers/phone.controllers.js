const Phone = require('../models/Phone.model')

const getAllPhones = (req, res, next) => {
  Phone.find()
    .then(response => res.json(response))
    .catch(error => next(error))
}

const getPhonebyId = (req, res, next) => {
  const { id } = req.params

  Phone.findOne({ id })
    .then(response => res.json(response))
    .catch(error => next(error))
}

module.exports = {
  getAllPhones,
  getPhonebyId
}
