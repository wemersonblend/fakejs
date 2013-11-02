
var Chance = require('chance');
var async = require('async');

var fake = {}

fake.create = function(modeler, iterator, callback) {
	var chance = new Chance();
	
	iterator = iterator || 1;

	async.times(iterator, function(i, next){
		createModel(modeler, function(err, model) {
			next(err, model)
		})
	}, function(err, models) {
		console.log(models);	
	});

	function createModel(modeler, callback){
		var model = {};
		for(m in modeler) {
			if(typeof(modeler[m]) == 'string'){
				if(modeler[m] in chance){
					model[m] = chance[modeler[m]]();
				}else{
					model[m] = modeler[m]
				}
			}else if(typeof(modeler[m]) == 'function'){
				model[m] = modeler[m]();
			}else {
				model[m] = modeler[m];
			}

		}
		callback(null, model);
	}
}
module.exports = fake