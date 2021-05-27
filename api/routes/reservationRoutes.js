const express = require("express");
const router = express.Router();

const reservationController = require("../controllers/reservationController");

router.post("/", reservationController.createNewReservation);

module.exports = router;
