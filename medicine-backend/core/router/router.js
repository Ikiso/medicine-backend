const {Router} = require("express");
const {ageRouter} = require("../../medicine/router/ageRouter");
const {areaRouter} = require("../../medicine/router/areaRouter");
const {diseaseRouter} = require("../../medicine/router/diseaseRouter");
const {populationRouter} = require("../../medicine/router/populationRouter");
const {typeRouter} = require("../../medicine/router/typeRouter");
const {valueRouter} = require("../../medicine/router/valueRouter");
const {yearRouter} = require("../../medicine/router/yearRouter");

const router = new Router();

router.use(ageRouter);
router.use(areaRouter);
router.use(diseaseRouter);
router.use(populationRouter);
router.use(typeRouter);
router.use(valueRouter);
router.use(yearRouter);

module.exports = router;