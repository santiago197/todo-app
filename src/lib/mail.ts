const nodemailer = require('nodemailer');

// Configuración del transporte para Gmail (o utiliza otros proveedores)
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'tucorreo@gmail.com',
		pass: 'mqlq ayub jjmg mecw',
	},
});

// Función para enviar el correo electrónico con la imagen adjunta
const sendEmail = async (to, subject, text, attachment) => {
	try {
		const info = await transporter.sendMail({
			from: 'tucorreo@gmail.com',
			to,
			subject,
			text,
			attachments: [
				{
					filename: 'screenshot.png',
					content: attachment.split(';base64,').pop(),
					encoding: 'base64',
				},
			],
		});

		console.log('Correo enviado:', info.response);
	} catch (error) {
		console.error('Error al enviar el correo:', error);
	}
};

module.exports = { sendEmail };
