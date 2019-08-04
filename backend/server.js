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

// Login

app.post("/login", (req, res) => {
  const user = req.body.email;
  db.query(
    `SELECT id, nickname, fullName, month, year, is_admin FROM user WHERE email="${user}"`,
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

// Slides

app.get("/:category", (req, res) => {
  let category = req.params.category;
  if (category === "formation") {
    category = "training";
  } else if (category === "stage") {
    category = "internship";
  }
  db.query(
    `SELECT title, description, bullet_point_one, bullet_point_two, bullet_point_three, bullet_point_four, img FROM slide WHERE category="${category}"`,
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

// Update Slides

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

app.listen(portNumber, () => {
  console.log(`API root available at: http://localhost:${portNumber}/`);
});
