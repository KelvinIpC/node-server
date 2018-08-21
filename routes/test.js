const router = require('express').Router();
const passport = require('../middleware/session/passport-local');

router.get('/test', function(req,res){
	res.sendfile('test.html', {root: __dirname+'/../views'});
});

router.post('/test', passport.authenticate('local', {
	successRedirect: '/test',
	failureRedirect: '/'
}));
module.exports =  router;