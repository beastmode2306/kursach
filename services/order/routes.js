const { Router } = require("express");
const { getOrderById } = require("./controllers/orders/getOrderById");
const { getOrders } = require("./controllers/orders/getOrders");

const router = Router();

router.get("/:id", getOrderById);
router.get("/", getOrders);

module.exports = router;
