if(typeof(require) == 'function'){
	var Chance = require('chance');
	var async = require('async');
}

var fake = {}

fake.create = function(modeler, iterator, callback) {

	if(typeof(Chance) === 'undefined'){
		console.error('Fakejs require Chance');
		return;
	}

	if(typeof(async) === 'undefined'){
		console.error('Fakejs require Async');
		return;
	}

	
	var chance = new Chance();
	
	iterator = iterator || 1;

	async.times(iterator, function(i, next){
		createModel(modeler, function(err, model) {
			next(err, model)
		})
	}, function(err, models) {
		//console.log(models);
		callback(models)	
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


if (typeof(module) !== 'undefined' && 'exports' in module) {
	module.exports = fake;  
}