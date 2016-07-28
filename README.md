ARGCON
===
> Control your command line arguments for Node.js

## Import:
```javascript
var arg = require('termarg')
```

## Multiple arguments combinations
```javascript
arg.on('a', function (res) {
	console.log('IN 1')
})

arg.on(['a', 'b'], function (res) {
	console.log('IN 2')
})

arg.on(['a', 'c'], function (res) {
	console.log('IN 3')
})
```

```sh
node program.js a
-> IN 1

node program.js a b
-> IN 1
-> IN 2

node program.js a c
-> IN 1
-> IN 3
```

## Variable arguments
```javascript
arg.on('hello', function (res) {
	console.log('Hello ' + res[1])
})
```

```sh
node program.js hello super warlock
-> Hello warlock
```


```javascript
arg.on(['hello', 'super'], function (res) {
	console.log('Hi ' + res)
})
```
```sh
node program.js hello super warlock
-> Hi warlock
```

## License
All the code here is under MIT license. Which means you could do virtually anything with the code.
I will appreciate it very much if you keep an attribution where appropriate.

The MIT License (MIT)
Copyright (c) 2015 Josep Subils Rigau (josep@spellbook.io)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.