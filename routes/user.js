const express = require("express");
const {
  getcar,
  getMaleUsers,
  getLastname,
  getAllcars,
  getTopCities,
} = require("../controllers/user");

const router = express.Router();

// Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get("/getcar", getcar);

//Male Users which have phone price greater than 10,000.
router.get("/getphone", getMaleUsers);

// Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get("/lastname", getLastname);

// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get("/getallcar", getAllcars);

//Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get("/getavgincome", getTopCities);

module.exports = router;
