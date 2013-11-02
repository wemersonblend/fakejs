Fakejs
======

FakeJS is a module based on [Chance](http://chancejs.com/) to generate Data Model (Random) at runtime.

## Quick Examples

The model to create:
```javascript

var child = {
	name : 'first',
	email : 'email',
	birthday : 'birthday',

	id : function(){
		return 'US ' + Math.ceil(Math.random() * 1000);
	},	

	fatherName: 'John Doe'
};
```
Using Fake.js

```javascript
var fake = require('fake');
fake.create(child, 2, function(data){
	console.log(data);
});

```

The result : 

```json

[ 
    { 
        id: 'US 736',
        name: 'Erick',
        email: 'leluzib@uta.gov',
        birthday: Sun Jul 26 1942 00:00:00 GMT-0300 (BRT),
        fatherName: 'John Doe' 
    },
  { 
        id: 'US 760',
        name: 'Gabriel',
        email: 'wu@ubjurhan.org',
        birthday: Tue May 05 1953 00:00:00 GMT-0300 (BRT),
        fatherName: 'John Doe' 
    } 
]


```
