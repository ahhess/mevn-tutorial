const express = require('express');

const {
  createData,
  readData,
  readOneData,
  updateData,
  deleteData,
} = require('../controllers/user_controller');

const router = express.Router();

router
  .post('/user/', createData)
  .get('/user/', readData)
  .get('/user/:id', readOneData)
  .put('/user/:id', updateData)
  .delete('/user/:id', deleteData);

module.exports = router;
