//Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

const User = require("../model/userModel");

exports.getcar = async (req, res) => {
  try {
    const users = await User.find({
      income: { $lt: 5 },
      $or: [{ car: "BMW" }, { car: "Mercedes" }],
    });
    res.status(200).send({
      success: true,
      message: "Successfully retrieved cars",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting cars",
      error: error.message,
    });
  }
};

// Male Users which have phone price greater than 10,000.

exports.getMaleUsers = async (req, res) => {
  try {
    const users = await User.find({
      gender: { $exists: true, $eq: "Male" },
      phone_price: { $exists: true, $gt: 10000 },
    });
    res.status(200).send({
      success: true,
      message: "Successfully retrieved male users with expensive phones",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting male users with expensive phones",
      error: error.message,
    });
  }
};

// Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

exports.getLastname = async (req, res) => {
  try {
    const users = await User.find({
      last_name: { $regex: /^M/i }, // last name starts with "M"
      $expr: { $gt: [{ $strLenCP: "$quote" }, 15] }, // quote character length > 15
      email: { $regex: /M$/i }, // email includes the last name
    });
    res.status(200).send({
      success: true,
      message: "Successfully retrieved users",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting users",
      error: error.message,
    });
  }
};

// Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

exports.getAllcars = async (req, res) => {
  try {
    const users = await User.find({
      car: { $in: ["BMW", "Mercedes", "Audi"] }, // car brand is BMW, Mercedes, or Audi
      email: { $not: { $regex: /\d/ } }, // email does not include any digit
    });
    res.status(200).send({
      success: true,
      message: "Successfully retrieved users",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting users",
      error: error.message,
    });
  }
};

// Show the data of top 10 cities which have the highest number of users and their average income.

// exports.getTopCities = async (req, res) => {
//   try {
//     const topCities = await User.aggregate([
//       {
//         $group: {
//           _id: "$city",
//           count: { $sum: 1 },
//           income: { $avg: "$income" },
//         },
//       },
//       { $sort: { count: -1 } },
//       { $limit: 10 },
//     ]);
//     res.status(200).send({
//       success: true,
//       message: "Successfully retrieved top cities",
//       data: topCities,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in getting top cities",
//       error: error.message,
//     });
//   }
// };

exports.getTopCities = async (req, res) => {
  try {
    const topCities = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          id: { $first: "$id" },
          first_name: { $first: "$first_name" },
          last_name: { $first: "$last_name" },
          email: { $first: "$email" },
          gender: { $first: "$gender" },
          income: { $first: "$income" },
          car: { $first: "$car" },
          quote: { $first: "$quote" },
          phone_price: { $first: "$phone_price" },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    res.status(200).send({
      success: true,
      message: "Successfully retrieved top cities with income",
      data: topCities,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting top cities with income",
      error: error.message,
    });
  }
};
