const {Router} = require("express");

const {getTypeListService, createValueService, createTypeService} = require("../services/services");

const typeRouter = new Router();

typeRouter.get(
    '/type',
    async (req, res) => {
        try {
            const list = await getTypeListService();

            return res.status(200).send(list);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

typeRouter.post(
    '/type',
    async (req, res) => {
        try {
            const { name } = req.body;

            if (name) {
                const item = await createTypeService({ name });

                return res.status(200).send(item);
            }

            return res.status(400).send({
                message: 'Не все данные при создании',
            });
        } catch (e) {
            return res.status(500).send(e.message);
        }
    });

module.exports = {
    typeRouter
};
