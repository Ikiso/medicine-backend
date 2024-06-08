const {Router} = require("express");

const {getDiseaseListService} = require("../services/services");

const diseaseRouter = new Router();

diseaseRouter.get(
    '/disease',
    async (req, res) => {
        try {
            const list = await getDiseaseListService();

            return res.status(200).send(list);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

module.exports = {
    diseaseRouter
};
