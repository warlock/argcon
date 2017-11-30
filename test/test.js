#!/usr/bin/env node
const arg = require('../index.js')

arg.on('-a', res => {
  console.log(`Response -a: ${res}`)
})

arg.on('-b', res => {
  console.log(`Response -b: ${res}`)
})

arg.on('-c', res => {
  console.log(`Response -c: ${res}`)
})

arg.on(res => {
  console.log(`Response alone: ${JSON.stringify(res)}`)
})
