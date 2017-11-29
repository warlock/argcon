/* eslint no-invalid-this: 0 */
module.exports = {
  data: {},
  get: query => {
    if (query !== undefined && query[0].indexOf('-') > -1) {
      console.log('primer element te flag')
      var key = ''
      query.forEach((el, index) => {
        if (index % 2 === 0 && el.indexOf('-') > -1) key = el
        else {
          if (this.data[key] === undefined) this.data[key] = el
          else this.data.alone = el
        }
      })
    }
    console.log(JSON.stringify(this.data))
  },
  on: (flag, callback) => {
    if (callback !== undefined &&  typeof flag === 'function' && this.data.alone !== undefined) flag(this.data.alone) 
    if (flag !== undefined && typeof callback === 'function') {
      if (this.data[flag] !== undefined) callback(this.data[flag])
      else callback()
    }
  }
}
