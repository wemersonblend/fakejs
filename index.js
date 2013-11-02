var fake = require('./fake');

var user = {
	name : 'first',
	fone : 'phone',
	address : 'address',
	ID : 10,
	rand : function(){
		return Math.random()
	}
};

fake.create(user, 30000, function(data){
	console.log(data);
});

console.log('--------------------------- this is asynx');