const router = require("express").Router();
const home__controller = require("../controllers/home__controller");

router.get("/", home__controller.get__index);
router.get("/education", home__controller.get__education);
router.get("/skills", home__controller.get__skills);
router.get("/achievements", home__controller.get__achievements);
router.get("/interests", home__controller.get__interests);
router.get("/curriculars", home__controller.get__curriculars);

module.exports =  router;