const express = require('express');
const { Pekerjaan } = require('../models');
const router = express.Router();

//FUNGSI GET ALL
router.get('/', async(req, res) =>
{
  try {
    const pekerjaan = await Pekerjaan.findAll();
    res.json(pekerjaan);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
})

//FUNGSI GET ONE
router.get('/:id_pekerjaan', async (req, res) =>
{
  const id_pekerjaan = req.params.id_pekerjaan;
  const pekerjaan = await Pekerjaan.findByPk(id_pekerjaan);
  if(!pekerjaan) {
    return res.status(404).json({ status : 'error', message : 'Pekerjaan tidak ditemukan'});
  }
  try {
    res.json(pekerjaan);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI POST
router.post('/', async (req, res) =>
{
  const pekerjaan = new Pekerjaan({
    pangkat: req.body.pangkat,
    dibutuhkan: req.body.dibutuhkan
  });
  try {
    const newPekerjaan = await pekerjaan.save();
    res.status(201).json('Pekerjaan Baru');
  } catch (err) {
    res.status(400).json({message : err.message});
  }
});

//FUNGSI DELETE
router.delete('/:id_pekerjaan', async (req, res) =>
{
  const id_pekerjaan = req.params.id_pekerjaan;
  const pekerjaan = await Pekerjaan.findByPk(id_pekerjaan);
  if(!pekerjaan){
    return res.status(404).json({status: 'error', message : 'Pekerjaan tidak ditemukan'});
  }
  try {
    await pekerjaan.destroy();
    res.json({message: 'Pekerjaan berhasil dihapus'});
  } catch (er) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI DELETE ALL
router.delete('/', async (req, res) =>
{
  try {
    const pekerjaan = await Pekerjaan.findAll();
    const panjang = pekerjaan.length;
    for(let i = 0; i < panjang; i++) {
      pekerjaan[i].destroy();
    }
    res.json({message: 'Berhasil menghapus semua data', })
  } catch (err) {
    res.json({error: err})
  }
})

//FUNGSI PUT
router.put('/:id_pekerjaan', async (req, res) =>
{
  const pekerjaan = req.params.id_pekerjaan;
  Pekerjaan.update({
    pangkat: req.body.pangkat,
    dibutuhkan: req.body.dibutuhkan
  },{ 
      where: { id_pekerjaan : req.params.id_pekerjaan } 
  }).then(result => {
      res.status(200).json({result, message: 'Pekerjaan berhasil diupdate'});
  });
});

module.exports = router;
