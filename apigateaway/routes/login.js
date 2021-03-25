const express = require('express');
const router = express.Router();

const { URL_LOGIN_SERVICE } = process.env;
const apiAdapater = require('./apiAdapter');
const api = apiAdapater(URL_LOGIN_SERVICE);

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const checkAuth = require('../middleware/check-auth');

//FUNGSI GET ALL APIGATEAWAY
router.get('/', checkAuth, (req, res) =>
{
  api.get(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI GET ONE APIGATEAWAY
router.get('/:email', checkAuth, (req, res) =>
{
  api.get(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI DELETE ONE APIGATEAWAY
router.delete('/:email', checkAuth, (req, res) =>
{
  api.delete(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI DELETE ALL APIGATEAWAY
router.delete('/', checkAuth, (req, res) =>
{
  api.delete(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI SIGNUP APIGATEAWAY
router.post('/signup',  (req, res)=>
{
  api.post(req.path, req.body)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI LOGIN APIGATEAWAY
router.post('/login',  (req, res)=>
{
  api.post(req.path, req.body)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

module.exports = router;
