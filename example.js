var fake = require('./fake');

var child = {
	id : 'hash',
	name : 'first',
	age : 'age',
	email : 'email',
	birthday : 'birthday',

	id : function(){
		return 'US ' + Math.ceil(Math.random() * 1000);
	},	

	fatherName: 'John Doe'
};

fake.create(child, 2, function(data){
	console.log(data);
});

console.log('--------------------------- this is asynx');