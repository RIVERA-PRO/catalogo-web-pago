
import express from 'express'
import compras from './compras.js'

let router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/buy', compras)

export default router