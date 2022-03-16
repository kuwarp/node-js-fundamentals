// 👉👉👉👉👉Create a folder using Async fucntion

const pasync=require('fs')

// pasync.mkdir('pasync',(err)=>{
//     console.log('created successfully');
// })

//  👉👉👉👉👉Create a file into the pasync folder using Async function with .md extension.

// pasync.writeFile('./pasync/pAsync.md','here we created successfully',(err)=>{
//     console.log('done');
// })


// 👉👉👉👉👉Add more data in pAsync.md file using Async function

// pasync.appendFile('./pasync/pAsync.md',' ,Appending Successful.....',(err)=>{
//     console.log('Appending..........');
// })

// 👉👉👉👉👉Read Data from pasync.md file without getting buffer data.
// pasync.readFile('./pasync/pAsync.md','utf-8',(err,data)=>{
//     console.log(data);
// })

// 👉👉👉👉👉 Rename file using Async funtion

// pasync.rename('./pasync/pAsync.md','./pasync/pAsync.js',(err)=>{
//     console.log('done');
// })

// pasync.rename('./pasync/pAsync.js','./pasync/pAsync.md',(err)=>{
//     console.log('done');
// })

// 👉👉👉👉👉Delete a file using Async function

// pasync.unlink('./pasync/pAsync.md',(err)=>{
//     console.log('deleted');
// })

// 👉👉👉👉👉 Delete a folder..
// pasync.rmdir('pasync',(err)=>{
//     console.log('no more directory');
// })