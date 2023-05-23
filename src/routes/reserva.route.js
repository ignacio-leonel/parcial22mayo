const express = require('express')
const reservaController = require('../controllers/reserva.controller')

const router = express.Router()

router.get('/', reservaController.getAllreservas)
router.get('/:id', reservaController.getReservaByid)
router.delete('/:id',reservaController.deleteReservaByid)


module.exports = { router}

