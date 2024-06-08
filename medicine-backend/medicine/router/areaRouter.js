const {Router} = require("express");

const {getAreaListService} = require("../services/services");

const areaRouter = new Router();

areaRouter.get(
    '/area',
    async (req, res) => {
        try {
            const list = await getAreaListService();

            return res.status(200).send(list);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

module.exports = {
    areaRouter
};
