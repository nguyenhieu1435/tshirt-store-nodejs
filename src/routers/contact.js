const express = require("express")
const router = express.Router()

const ContactControllers = require("../app/controllers/ContactControllers.js");

router.post("/", ContactControllers.addContact)

module.exports = router;