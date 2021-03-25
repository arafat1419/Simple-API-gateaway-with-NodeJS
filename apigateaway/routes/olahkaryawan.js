const express = require('express');
const router = express.Router();

const { URL_OLAHKARYAWAN_SERVICE } = process.env;
const apiAdapater = require('./apiAdapter');
const api = apiAdapater(URL_OLAHKARYAWAN_SERVICE);

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
router.get('/:id_karyawan',checkAuth, (req, res) =>
{
  api.get(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI POST APIGATEAWAY
router.post('/', (req, res)=>
{
  api.post(req.path, req.body)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI DELETE ONE APIGATEAWAY
router.delete('/:id_karyawan', checkAuth,(req, res) =>
{
  api.delete(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI DELETE ALL APIGATEAWAY
router.delete('/', checkAuth,(req, res) =>
{
  api.delete(req.path)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

//FUNGSI UPDATE APIGATEAWAY
router.put('/:id_karyawan', checkAuth,(req, res)=>
{
  api.put(req.path, req.body)
  .then(resp =>
    {
      res.send(resp.data)
    })
})

module.exports = router;
