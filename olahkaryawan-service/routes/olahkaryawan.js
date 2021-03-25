const express = require('express');
const { Olahkaryawan, sequelize } = require('../models');
const router = express.Router();

//Fungsi GET ALL
router.get('/', async(req, res) =>
{
  try {
    const karyawan = await Olahkaryawan.findAll();
    res.json(karyawan);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
})

//FUNGSI GET ONE
router.get('/:id_karyawan', async (req, res) =>
{
  const id_karyawan = req.params.id_karyawan;
  const karyawan = await Olahkaryawan.findByPk(id_karyawan);
  if(!karyawan) {
    return res.status(404).json({ status : 'error', message : 'Data Karyawan tidak ditemukan'});
  }
  try {
    res.json(karyawan);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI POST
router.post('/', async (req, res) =>
{
  const karyawan = new Olahkaryawan({
    nama_karyawan: req.body.nama_karyawan,
    alamat: req.body.alamat,
    no_hp: req.body.no_hp,
    gaji: req.body.gaji,
    pangkat: req.body.pangkat
  });
  try {
    const newKaryawan = await karyawan.save();
    res.status(201).json('Karyawan Baru');
  } catch (err) {
    res.status(400).json({message : err.message});
  }
});

//FUNGSI DELETE
router.delete('/:id_karyawan', async (req, res) =>
{
  const id_karyawan = req.params.id_karyawan;
  const karyawan = await Olahkaryawan.findByPk(id_karyawan);
  if(!karyawan){
    return res.status(404).json({status: 'error', message : 'Data Karyawan tidak ditemukan'});
  }
  try {
    await karyawan.destroy();
    res.json({message: 'Data Karyawan berhasil dihapus'});
  } catch (err) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI DELETE ALL
router.delete('/', async (req, res) =>
{
  try {
    const karyawan = await Olahkaryawan.findAll();
    const panjang = karyawan.length;
    for(let i = 0; i < panjang; i++) {
      karyawan[i].destroy();
    }
    res.json({message: 'Berhasil menghapus semua data', })
  } catch (err) {
    res.json({error: err})
  }
})

//FUNGSI UPDATE
router.put('/:id_karyawan', async (req, res) =>
{
  const karyawan = req.params.id_karyawan;
  Olahkaryawan.update({
    nama_karyawan: req.body.nama_karyawan,
    alamat: req.body.alamat,
    no_hp: req.body.no_hp,
    gaji: req.body.gaji,
    pangkat: req.body.pangkat
  },{ 
      where: { id_karyawan : req.params.id_karyawan } 
  }).then(result => {
      res.status(200).json({
        result,
        message: 'Update Berhasil'
      });
  });
});

module.exports = router;
