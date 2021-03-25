const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Login }  = require("../models");
const db = require("../models");

//FUNGSI GET ALL
router.get('/', async(req, res) =>
{
  try {
    const login = await Login.findAll();
    res.json(login);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI GET ONE
router.get('/:email', async (req, res) =>
{
  const email = req.params.email;
  const cekEmail = await Login.findByPk(email);
  if(!cekEmail) {
    return res.status(404).json({ status : 'error', message : 'Email tidak ditemukan'});
  }
  try {
    res.json(cekEmail);
  } catch (err) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI SINGUP
router.post('/signup', async(req, res) =>
{
  bcrypt.hash(req.body.password, 10, (err, hash) =>
  {
    if (err) {
      return res.status(500).json({error: err});
    } else {
      const login = new Login({
      email: req.body.email,
      password: hash
      });
      login.save().then(result =>
        {
          console.log(result);
          res.status(201).json({
            message : 'User berhasil dibuat'
          });
        })
        .catch(err =>
          {
            console.log(err);
            res.status(500).json({
              message : 'Email telah digunakan'
            });
          })
    }
  })
});

//FUNGSI LOGIN
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const login = await Login.findByPk(email);
  if (!login) {
    return res.status(404).json({ error: "Email tidak ada!" });
  } else {
    bcrypt.compare(password, login.password)
    .then(isMatch =>
      {
        if (isMatch) {
          const payload = { username: login.username};
          jwt.sign(
            payload,
            process.env.JWT_KEY,
            { expiresIn: "1h"},
            (err, token) =>
            {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res.status(400).json({ error: "Password salah!" });
        }
      })
  }
});

//FUNGSI DELETE ONE
router.delete('/:email', async (req, res) => {
  const email = req.params.email;
  const login = await Login.findByPk(email);
  if(!login){
    return res.status(404).json({status: 'error', message : 'User tidak ditemukan'});
  }
  try {
    await login.destroy();
    res.json({message: 'User berhasil dihapus'});
  } catch (er) {
    res.status(500).json({message : err.message});
  }
});

//FUNGSI DELETE ALL
router.delete('/', async(req, res) =>
{
  try {
    const login = await Login.findAll();
    const panjang = login.length;
    for(let i = 0; i < panjang; i++) {
      login[i].destroy();
    }
    res.json({message: 'Berhasil menghapus semua data', })
  } catch (err) {
    res.json({error: err})
  }
})

module.exports = router;