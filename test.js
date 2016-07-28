var a = require('./index.js')
a.on('a', function (res) {
	console.log('1 dintre ')
})


a.on(['a', 'c'], function (res) {
	console.log('2 dintre ' + res)
})

a.on(['a', 'd'], function (res) {
	console.log('3 dintre ' + res)
})