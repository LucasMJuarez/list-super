const express = require('express');
const router = express.Router();
const {getCompras, addCompras, deleteCompras} = require('../controllers/compras.controllers')

router
    .route('/')
    .get(getCompras)
    .post(addCompras);

router
    .route('/:id')
    .delete(deleteCompras)


module.exports = router;