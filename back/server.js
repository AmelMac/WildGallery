const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./config");

app.use(express.json());
app.use(cors());

app.get("/artist", (req, res) => {
  db.query(
    `SELECT id, name, description FROM mydb.artist;`,
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Something went bad!");
      }
      return res.json(resSql);
    }
  );
});

app.get("/artist/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT id, name, description from mydb.artist WHERE id=?`,
    [id],
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Something went bad!");
      }
      if (!resSql.length) {
        return res.status(500).send("Something went bad!");
      }

      return res.json(resSql);
    }
  );
});

app.get("/artwork", (req, res) => {
  db.query(
    `SELECT id, title, descriptionWork, image FROM mydb.artwork;`,
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Something went bad!");
      }
      return res.json(resSql);
    }
  );
});

app.get("/artwork/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    `SELECT id, title, descriptionWork, image from mydb.artwork WHERE id=?`,
    [id],
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Something went bad!");
      }
      if (!resSql.length) {
        return res.status(500).send("Something went bad!");
      }

      return res.json(resSql);
    }
  );
});

app.get("/artworkAll/", (req, res) => {
  db.query(
    `SELECT a.name, a.description, w.title, w.descriptionWork, w.image FROM mydb.artwork w JOIN mydb.artist a ON a.id=w.artist_id;`,
    (errSql, resSql) => {
      if (errSql) {
        return res.status(500).send("Something went bad!");
      }
      return res.json(resSql);
    }
  );
});

const port = 5050;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
