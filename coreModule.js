//Syncronous way 

// const my = require('fs');
// const { buffer } = require('stream/consumers');
// my.writeFileSync('read.txt','come');

//Append data
// my.appendFileSync('read.txt',' to me');


// Buffer Data: Nodejs include an additional data type called Buffer.
// buffer is mainly used to store binary data.

// const buff=my.readFileSync("read.txt");
// console.log(buff); for buffer Data.
// console.log(buff.toString()); for original data

//  rename file names

// my.renameSync('work.txt','work.md')
// my.('work.md')

// my.writeFileSync('pAsync.js','live in');


// const q=require('fs')
// q.writeFileSync('practice.txt','yes this is')
// q.mkdirSync('manish')
// q.writeFileSync('./manish/manish_prj.md','Welcome Manish')
// q.appendFileSync('./manish/manish_prj.md','  Shut My Window')
// const manoj=q.readFileSync('./manish/manish_prj.md')
// console.log(manoj);

// console.log(manoj.toString());

// q.unlinkSync('./manish/manish_prj.md')
// q.rmdirSync('manish')