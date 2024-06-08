const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');

const router = require("./core/router/router");
const connectDataBase = require("./core/common/connectDataBase");

const { MONGO_CONNECTION_STRING, PORT } = dotenv.config().parsed;

const server = express();
server.use(express.json());

server.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

server.use('/api', router);

connectDataBase(MONGO_CONNECTION_STRING).then(console.log);

module.exports = server.listen(PORT, () => {
    console.log(`Port: ${PORT}`);
})
