 var os = require('os');
// console.log("Platform: " + os.devNull());
// console.log("Architecture: " + os.arch());
// 👉👉👉 Detect to hostname of getSystemErrorMap..
console.log(os.hostname());


console.log(os.cpus());

console.log(os.homedir());

console.log(os.devNull);

console.log(os.endianness());

console.log(os.getPriority(0));

console.log(os.version());

console.log(os.release());

console.log(os.userInfo());

console.log(os.uptime());

console.log(os.EOL);

console.log(os.constants);
console.log(os.loadavg());

// 👉👉👉👉👉os.cpus() :Returns an array of objects containing information about each logical CPU core.

// [
//     {
//       model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//       speed: 2926,
//       times: {
//         user: 252020,
//         nice: 0,
//         sys: 30340,
//         idle: 1070356870,
//         irq: 0
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//       speed: 2926,
//       times: {
//         user: 306960,
//         nice: 0,
//         sys: 26980,
//         idle: 1071569080,
//         irq: 0
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//       speed: 2926,
//       times: {
//         user: 248450,
//         nice: 0,
//         sys: 21750,
//         idle: 1070919370,
//         irq: 0
//       }
//     },
//     {
//       model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
//       speed: 2926,
//       times: {
//         user: 256880,
//         nice: 0,
//         sys: 19430,
//         idle: 1070905480,
//         irq: 20
//       }
//     },
//   ]