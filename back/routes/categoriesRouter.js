const express = require("express");
const router = express.Router();
const db = require("../config");

router.get("/", (req, res) => {
  db.query("SELECT * from category", (err, categories) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    res.status(200).json(categories);
  });
});

router.get("/:category", (req, res) => {
  const category = req.params.category;
  db.query(
    "SELECT * from category WHERE label = ?",
    category,
    (err, category) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          detail: err.sql
        });
      } else if (category.length === 0) {
        return res.status(404).json({
          error: `There is no category with id ${id}`
        });
      }
      res.status(200).json(category[0]);
    }
  );
});

router.get("/:category/first-options", (req, res) => {
  const category = req.params.category;
  db.query(
    "SELECT * from category INNER JOIN first_option ON category.id = first_option.categoryId",
    category,
    (err, categories) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          detail: err.sql
        });
      }
      res.status(200).json(categories);
    }
  );
});

router.get("/:category/second-options", (req, res) => {
  const category = req.params.category;
  db.query(
    "SELECT * from category INNER JOIN second_option ON category.id = second_option.categoryId",
    category,
    (err, categories) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          detail: err.sql
        });
      }
      res.status(200).json(categories);
    }
  );
});

router.get("/:category/cheat-sheets", (req, res) => {
  const category = req.params.category;
  db.query(
    "SELECT * from category INNER JOIN cheat_sheet ON category.id = cheat_sheet.categoryId",
    category,
    (err, categories) => {
      if (err) {
        return res.status(500).json({
          error: err.message,
          detail: err.sql
        });
      }
      res.status(200).json(categories);
    }
  );
});

module.exports = router;
