const convert  = require('express').Router();
const romanize = require('../model/romanize')

convert.get('/:num', (req, res) =>
  res.json( { roman: romanize(Number.parseInt(req.params.num))})
);

module.exports = convert;
