module.exports = {
	ch : true,
	on : function (arg, callback) {
		if (typeof arg === 'function') {
			this.ch = false;
			arg();
		} else {
			var res = process.argv.slice(2)
			if (Array.isArray(arg)) {
				var check = true;
				for (var i = 0; i < arg.length; i++) {
					if (check) {
						if (arg[i] !== res[i]) check = false;
					}
				}
				var res = res.slice(arg.length);
				if (check) {
					this.ch = false;
					callback(res);
				}
			} else {
				if (res[0] === arg) {
					this.ch = false;
					var res = res.slice(1);
					callback(res);
				}
			}
		}
	},
	alone : function (callback) {
		var res = process.argv.slice(2)
		if (this.ch) callback(res);
	}
}
