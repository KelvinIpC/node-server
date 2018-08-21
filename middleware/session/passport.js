module.exports = ()=>{
	function serializeUser(user, done){
		console.log('serializeUser: '+user);
		done(null, user.id);
	}

	function deserializeUser(userid, done){
		console.log('deserializeUser: '+userid);
		done(null, userid);
	}

}
