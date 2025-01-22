require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email_User,
    pass: process.env.Email_Password,
  },
});

const mailOptions = {
  from: process.env.Email_User,
  to: [process.env.Email_User, "billduluu@gmail.com"],
  subject: "Test Email from Node.js",
  text: "Hello bagshaa, this is a NodeMailer test email.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error occured:`, error);
  }
  console.log(`Email sent successfully:`, info.response);
});

// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(express.json());
// app.use(cors());
// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(3000, () => console.log("Server ready on port 3000."));

// module.exports = app;
