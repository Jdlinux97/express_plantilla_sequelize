/** @format */

module.exports = {
	init: async (req, res) => {
		res.io.emit('Hello', 'Hello World');
		res.json('Hello World');
	},
	create: async (req, res) => {
		const { name, lastname } = req.body;

		await req.sequelize.Persona.create({
			nombre: name,
			apellido: lastname,
		});

		res.json('Creado');
	},
	get: async (req, res) => {
		const person = await req.sequelize.Persona.findAll();
		res.json(person);
	},
};
