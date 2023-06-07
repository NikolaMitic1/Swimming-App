const express = require("express");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../utils/verifyToken");
const {
  createSwimmers,
  deleteSwimmers,
  updateSwimmers,
  getSwimmer,
  getAllSwimmers,
} = require("../controllers/swimmers");

router.post("/", verifyUser, createSwimmers);
router.delete("/:id", verifyUser, deleteSwimmers);
router.patch("/:id", verifyUser, updateSwimmers);
router.get("/:id", verifyUser, getSwimmer);
router.get("/", getAllSwimmers);

module.exports = router;
