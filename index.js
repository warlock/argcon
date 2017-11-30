var argv = {
  get: function (query) {
    argv.data = { alone: [] }
    var key = 'alone'    
    query.forEach(function (el) {
      if (el.indexOf('-') > -1) {
        if (key === 'alone') key = el
        else {
          argv.data.alone.push(key)
          key = el
        }
      } else {
        if (key !== 'alone' && argv.data[key] === undefined) {
          argv.data[key] = el
          key = 'alone'
        } else {
          key = 'alone'
          argv.data.alone.push(el)
        }
      }
    })
    if (key !== 'alone') argv.data.alone.push(key)
  },
  on: function (flag, callback) {
    argv.get(process.argv)
    if (flag !== undefined && callback === undefined && typeof flag === 'function' && argv.data.alone !== undefined) flag(argv.data.alone) 
    if (flag !== undefined && callback !== undefined && typeof callback === 'function') {
      if (argv.data[flag] !== undefined) callback(argv.data[flag])
    }
  }
}

module.exports = argv;
