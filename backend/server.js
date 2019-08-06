const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber, db } = require("./conf");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport

const passport = require("passport");
app.use(passport.initialize());
app.use("/auth", require("./auth"));

// SLIDES

app.get("/:category", (req, res) => {
  let category = req.params.category;
  if (category === "formation") {
    category = "training";
  } else if (category === "stage") {
    category = "internship";
  }
  db.query(
    `SELECT page_title, logo, title, description, bullet_point_one, bullet_point_two, bullet_point_three, bullet_point_four, img FROM slide WHERE category="${category}"`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting user route");
      }
      if (!rows) {
        return res.status(404).send("No user found");
      }
      res.status(200).send(rows[0]);
    }
  );
});

// UPDATE SLIDES

app.put("/:category", (req, res) => {
  const body = req.body;
  let category = req.params.category;
  if (category === "formation") {
    category = "training";
  } else if (category === "stage") {
    category = "internship";
  }
  db.query(
    `UPDATE slide SET ? WHERE category="${category}"`,
    [body],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send(`error when updating the ${category} slides`);
      }
      res.status(200).send(rows);
    }
  );
});

// INTRO-CONCL

app.get("/contenu/:contentCategory", (req, res) => {
  let contentCategory = req.params.contentCategory;
  db.query(
    `SELECT page_title, logo, title, description, bullet_point_one, bullet_point_two, bullet_point_three, bullet_point_four, img FROM slide WHERE category="${contentCategory}"`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting user route");
      }
      if (!rows) {
        return res.status(404).send("No user found");
      }
      res.status(200).send(rows[0]);
    }
  );
});

// UPDATE INTRO-CONCL

app.put("/contenu/:contentCategory", (req, res) => {
  const body = req.body;
  let contentCategory = req.params.contentCategory;
  db.query(
    `UPDATE slide SET ? WHERE category="${contentCategory}"`,
    [body],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .send(`error when updating the ${contentCategory} slides`);
      }
      res.status(200).send(rows);
    }
  );
});

// GET CONTENT

app.get("/content/page/:id", (req, res) => {
  let contentId = req.params.id;
  db.query(
    `SELECT page_title FROM slide WHERE id_content=${contentId}`,
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).send("error when getting user route");
      }
      if (!rows) {
        return res.status(404).send("No user found");
      }
      res.status(200).send(rows[0]);
    }
  );
});

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
