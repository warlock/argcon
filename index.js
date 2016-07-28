module.exports = {
	on : function (arg, callback) {
		var res = process.argv.slice(2)
		if (Array.isArray(arg)) {
			var check = true
			for (var i = 0; i < arg.length; i++) {
				if (check) {
					if (arg[i] !== res[i]) check = false
				}
			}
			var res = res.slice(arg.length)
			if (check) callback(res)
		} else {
			if (res[0] === arg) {
				var res = res.slice(1)
				callback(res)
			}
		}
	}
}