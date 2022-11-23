import isFile from './index.js'

console.log(await isFile('no-such file'))

console.log(await isFile('package.json'))

console.log(await isFile('.'))

console.log(await isFile('..'))

console.log(await isFile('/'))

console.log(await isFile('/bin/ls'))
