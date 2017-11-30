#!/usr/bin/env node
const arg = require('../index.js')

arg.on('-a', res => {
  if (res) console.log(`Response -a: ${res}`)
})

arg.on('-b', res => {
  if (res) console.log(`Response -a: ${res}`)
})

arg.on('-c', res => {
  if (res) console.log(`Response -a: ${res}`)
})

arg.on(res => {
  console.log(`Response alone: ${JSON.stringify(res)}`)
})
