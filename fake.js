
var Chance = require('chance');
var async = require('chance');

var fake = {}

fake.create = function(modeler, iterator, callback) {
	var chance = new Chance();
	var models = [];
	
	iterator = iterator || 1;

	for(var i = 0; i<iterator; i++){
		var model = {};
		for(m in modeler) {
			if(typeof(modeler[m]) == 'string'){
				if(modeler[m] in chance){
					model[m] = chance[modeler[m]]();
				}
			}else if(typeof(modeler[m]) == 'function'){
				model[m] = modeler[m]();
			}else {
				model[m] = modeler[m];
			}
		}
		models.push(model)
	}
	if(typeof(callback) == 'function')
		callback(models);
}
module.exports = fake