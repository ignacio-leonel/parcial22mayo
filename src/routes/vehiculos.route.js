const express = require('express')
const vehiculoController = require('../controllers/vehiculos.controller')

const router = express.Router()

router.get('/', vehiculoController.getAllvehiculos)
router.get('/:id', vehiculoController.getvehiculoBypatemte)
router.delete('/:id', vehiculoController.deleteVehiculoBypatente)


module.exports = { router}


