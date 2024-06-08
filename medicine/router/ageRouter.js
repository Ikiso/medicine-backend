const {Router} = require("express");
const {getAgeListService} = require("../services/services");

const ageRouter = new Router();

ageRouter.get(
    '/age',
    async (req, res) => {
        try {
            const list = await getAgeListService();

            return res.status(200).send(list);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

module.exports = {
    ageRouter
};
