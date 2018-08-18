module.exports = (app, express)=>{
	const appInit = require('./app-config');
	const routeInit = require('./route-config');
	const errorInit = require('./error-config');

	appInit.init(app, express);
	routeInit.init(app);
	errorInit.init(app);
}