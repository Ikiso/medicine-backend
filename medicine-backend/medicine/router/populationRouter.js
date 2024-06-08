const {Router} = require("express");

const {getPopulationListService} = require("../services/services");

const populationRouter = new Router();

populationRouter.get(
    '/population',
    async (req, res) => {
        try {
            const list = await getPopulationListService();

            return res.status(200).send(list);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

module.exports = {
    populationRouter
};
