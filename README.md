ARGCON
===
> Control your command line arguments in Node.js

## Install:
```sh
npm install argcon -S
```

## Import:
```javascript
const arg = require('argcon')
```

## Alone arguments
```javascript
arg.on('-a', res => {
  if (res) console.log(`Response -a: ${res}`)
})

arg.on(res => {
  console.log(`Response alone: ${JSON.stringify(res)}`)
})
```

```sh
$ node test.js alone
-> res alone: ["/usr/bin/node","/home/argcon/test.js","alone"]
```

## Multiple arguments
```javascript
arg.on('-a', res => {
  if (res) console.log(`Response -a: ${res}`)
})

arg.on('-b', res => {
  if (res) console.log(`Response -b: ${res}`)
})

arg.on('-c', res => {
  if (res) console.log(`Response -c: ${res}`)
})

arg.on(res => {
  console.log(`Response alone: ${JSON.stringify(res)}`)
})
```

```sh
$ node test.js -a AAA -b BBB c -d
Response -a: AAA
Response -b: BBB
Response alone: ["/usr/bin/node","/home/argcon/test.js","c","-d"]
```

## License
All the code here is under MIT license. Which means you could do virtually anything with the code.
I will appreciate it very much if you keep an attribution where appropriate.

The MIT License (MIT)
Copyright (c) 2015 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.