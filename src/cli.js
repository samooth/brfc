const { brfc } = require('../dist/brfc.umd.js')

const opts = process.argv.slice(2)

if (opts.length !== 3) {
  console.error('You need to specify arguments like: <title> <authors> <version>')
  process.exit(0)
}

console.log('BRFC ID:')
console.log(brfc(opts[0], opts[1].split(' '), opts[2]))
