const {Router} = require("express");

const {getYearListService} = require("../services/services");

const yearRouter = new Router();

yearRouter.get(
    '/year',
    async (req, res) => {
        try {
            const valueList = await getYearListService();

            return res.status(200).send(valueList);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

module.exports = {
    yearRouter
};
