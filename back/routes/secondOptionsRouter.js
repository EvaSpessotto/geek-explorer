const express = require('express')
const router = express.Router();
const db = require('../config');

router.get('/', (req, res) => {
  db.query('SELECT * from second_option', (err, secondOptions) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    res.status(200).json(secondOptions)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * from second_option WHERE id =?', id, (err, secondOptions) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    else if (secondOptions.length === 0) {
      return res.status(404).json({
        error: `There is no option with id ${id}`
      })
    }
    res.status(200).json(secondOptions[0])
  })
})

module.exports = router;