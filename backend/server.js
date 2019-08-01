const express = require("express");
const cors = require("cors");
const app = express();
const { portNumber, db } = require("./conf");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Login

app.post("/login", (req, res) => {
  const user = req.body.nickname;
  db.query(
    `SELECT id, nickname, fullName, month, year, is_admin FROM user WHERE nickname="${user}"`,
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

// Slides : Training

app.get("/:category", (req, res) => {
  let category = req.params.category;
  if (category === "formation") {
    category = "training";
  } else if (category === "stage") {
    category = "internship";
  }
  db.query(
    `SELECT title, description, bp_one, bp_two, bp_three, bp_four FROM slide WHERE category="${category}"`,
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
