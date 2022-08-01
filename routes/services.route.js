const { Router } = require("express");
const { servicesController } = require("../controllers/services.controller");
const authMiddleware = require("../middleware/authMiddleware")

const router = Router();

router.get("/services", servicesController.getServices);
router.patch("/services/:id", authMiddleware, authMiddleware, servicesController.updateServices);
router.delete("/services/:id", authMiddleware, servicesController.deleteServices);
router.get("/services/:id", servicesController.getServicesById)

module.exports = router;
