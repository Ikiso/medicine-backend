const {Router} = require("express");
const {
    getValueListService,
    createValueService,
    createAgeService,
    createAreaService,
    createTypeService,
    createYearService,
    createDiseaseService,
    getDiseaseOneService,
    getYearOneService,
    getAreaOneService,
    getAgeOneService,
    getTypeOneService
} = require("../services/services");

const valueRouter = new Router();

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            const result = cache.get(x);

            if (result) {
                return result;
            }
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

const createServiceEnum = {
    ['disease']: createDiseaseService,
    ['year']: createYearService,
    ['area']: createAreaService,
    ['age']: createAgeService,
    ['type']: createTypeService,
}

valueRouter.post(
  '/value/find',
  async (req, res) => {
      try {
          const valueList = await getValueListService(req.body);

          return res.status(200).send(valueList);
      } catch (e) {
          return res.status(500).send(e.message);
      }
  });

valueRouter.post(
  '/value',
  async (req, res) => {
      try {
          const getOneServiceEnum = {
              ['disease']: cachingDecorator(getDiseaseOneService),
              ['year']: cachingDecorator(getYearOneService),
              ['area']: cachingDecorator(getAreaOneService),
              ['age']: cachingDecorator(getAgeOneService),
              ['type']: cachingDecorator(getTypeOneService),
          };

          const list = req.body;

          for (let i = 0; i < list.length; ++i) {
              const listItem = list[i];
              const { value, disease, year, area, age, type } = listItem;

              if (value && disease && year && area && age && type) {
                  await createValueService(await Object.entries(listItem).reduce(async (accumulator, [key, value]) => {
                      if (key === 'value') {
                          return { ...(await accumulator), [key]: value };
                      }

                      const getOneService = getOneServiceEnum[key];
                      const createService = createServiceEnum[key];

                      const item = await getOneService({name: value});
                      const isExist = !!item;

                      if (!isExist) {
                          const created = await createService({name: value});

                          return { ...(await accumulator), [key]: created._id };
                      }

                      return { ...(await accumulator), [key]: item._id };
                  }, Promise.resolve({})));
              }
          }

          return res.status(200).send({
              message: 'Ok',
          });
      } catch (e) {
          return res.status(500).send(e.message);
      }
  });

module.exports = {
    valueRouter
};
