const router = require("express").Router();
const home__controller = require("../controllers/home__controller");

router.get("/", home__controller.get__index);

module.exports =  router;