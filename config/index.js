module.exports = (app, express)=>{
	const appInit = require('./app-config');
	const routeInit = require('./route-config');
	const errorInit = require('./error-config');

	const sessionInit = require('../middleware/session');

	

	appInit.init(app, express);
	sessionInit.init(app);
	routeInit.init(app);
	errorInit.init(app);
}