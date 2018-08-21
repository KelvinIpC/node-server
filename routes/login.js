const router = require('express').Router();

router.get('/login', function(req, res){
	res.send('login');
});

router.post('/login', function(req, res){
	res.send('/login');
})

router.post('/logout', function(req, res){
	res.send('logout');
})
