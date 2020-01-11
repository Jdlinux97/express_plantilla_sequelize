/** @format */

const Sequelize = require('sequelize');
require('dotenv').config();

const personaModel = require('../models/Persona');

const DB = process.env.DB;
const HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const sequelize = new Sequelize(DB, DB_USER, DB_PASS, {
	host: HOST,

	dialect: 'postgres',
});

const Persona = personaModel(sequelize, Sequelize);

sequelize.sync().then(() => {
	console.log('TABLAS CREADAS');
});

module.exports = {
	Persona,
};
