import express from "express";

import compras from '../controllers/mercadoPagoo/compra.js'

let router = express.Router();

const { compra } = compras;

router.post("/", compra);


export default router;