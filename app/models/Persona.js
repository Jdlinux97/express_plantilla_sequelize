/** @format */

module.exports = (sequelize, type) => {
	const Persona = sequelize.define(
		'persona',
		{
			nombre: {
				type: type.STRING,
			},
			apellido: {
				type: type.STRING,
			},
		},
		{
			timestamps: true,
		}
	);
	return Persona;
};
