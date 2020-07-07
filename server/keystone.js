// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

const path = require('path');

var keystone = require('keystone');


keystone.init({
	static: [path.join(__dirname, './public')],
	'admin path': 'admin',

	port: process.env.PORT || 3001,
	'mongo': 'mongodb://localhost/keystonereactcms',

	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET,
	'cloudinary config': process.env.CLOUDINARY_URL,

	'name': 'desafioPTA',
	'brand': 'desafioPTA',

	'less': 'public',

	'favicon': 'server/public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	'cloudinary config': 'cloudinary://api_key:api_secret@cloud_name',


	
	'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});


keystone.import('./server/models');

keystone.set('routes', require('./server/routes'));

keystone.start();
