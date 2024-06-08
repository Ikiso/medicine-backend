const Age = require('../models/AgeSchema');
const Disease = require('../models/DiseaseSchema');
const Area = require('../models/AreaSchema');
const Population = require('../models/PopulationSchema');
const Type = require('../models/TypeSchema');
const Year = require('../models/YearSchema');
const Value = require('../models/ValueSchema');

// age
const getAgeListService = (query = {}) => {
    return Age.find(query);
}

const getAgeOneService = (query = {}) => {
    return Age.findOne(query);
}

const createAgeService = ({ name }) => {
    return Age.create({ name });
}

// area
const getAreaListService = (query = {}) => {
    return Area.find(query);
}

const getAreaOneService = (query = {}) => {
    return Area.findOne(query);
}

const createAreaService = ({ name }) => {
    return Area.create({ name });
}

// disease
const getDiseaseListService = (query = {}) => {
    return Disease.find(query);
}

const getDiseaseOneService = (query = {}) => {
    return Disease.findOne(query);
}

const createDiseaseService = ({ name }) => {
    return Disease.create({ name });
}

// population
const getPopulationListService = (query = {}) => {
    return Population.find(query);
}

const getPopulationOneService = (query = {}) => {
    return Population.findOne(query);
}

const createPopulationService = ({ name }) => {
    return Population.create({ name });
}

// type
const getTypeListService = (query = {}) => {
    return Type.find(query);
}

const getTypeOneService = (query = {}) => {
    return Type.findOne(query);
}

const createTypeService = ({ name }) => {
    return Type.create({ name });
}

// year
const getYearListService = (query = {}) => {
    return Year.find(query);
}

const getYearOneService = (query = {}) => {
    return Year.findOne(query);
}

const createYearService = ({ name }) => {
    return Year.create({ name });
}

// value
function getValueListService (query = {}) {
    return Value
        .find(query)
        .limit(200)
        .populate('disease')
        .populate('year')
        .populate('area')
        .populate('type')
        .populate('age');
}

function getValueOneService (query = {}) {
    return Value
        .findOne(query)
        .populate('disease')
        .populate('year')
        .populate('area')
        .populate('type')
        .populate('age');
}

const createValueService = async ({value, disease, year, area, age, type}) => {
    const values = await getValueListService({value, disease, year, area, age, type});
    const hasValue = values.length > 0;

    if (hasValue) {
        // TODO: заменить на findOne
        return values[0];
    }

    return Value.create({value, disease, year, area, age, type});
}

module.exports = {
    getAgeListService,
    getAreaListService,
    getDiseaseListService,
    getPopulationListService,
    getTypeListService,
    getYearListService,
    getValueListService,
    getAgeOneService,
    getAreaOneService,
    getDiseaseOneService,
    getPopulationOneService,
    getTypeOneService,
    getYearOneService,
    getValueOneService,
    createValueService,
    createTypeService,
    createAgeService,
    createAreaService,
    createDiseaseService,
    createPopulationService,
    createYearService,
}