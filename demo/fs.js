//  =====       fs = File System
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

let __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(path.join(__dirname, 'test'))


//    ====  asynchronos method  to create   directory in current directory xD
// fs.mkdir(path.join(__dirname, 'test'), (err, ) => {
//     if (err){
//         throw err
//     }
//     console.log('Directory was created')
// } )


//   ====   synchronos method
// fs.mkdirSync()


let filePath = path.join(__dirname, 'test', 'testFile.txt')

//  ======== for this to create file in directory, the directory needs to already exist, deletes and recreates file with same name
// fs.writeFile(filePath, 'This text1 will go into the file', (err) => {
//     if (err){
//         throw err
//     }
//     console.log('File was created')
// })

// //  ======== deletes and recreates file with same name
// fs.writeFile(filePath, 'This text2 will replace previous text!', (err) => {
//     if (err){
//         throw err
//     }
//     console.log('File was created')
// })

// fs.appendFile(filePath, '\nThis text3 will be added to previous', (err) => {
//     if (err){
//         throw err
//     }
//     console.log('File was created')
// })

//  =======             method used with type:module in package.json
fs.readFile(filePath, (err, content) => {
    if (err){
        throw err
    }
    console.log(`Content: ${content}`)
})


//  =======             method used with  NO type:module in package.json
// fs.readFile(filePath, (err, content) => {
// fs.readFile(filePath, 'utf-8', (err, content) => {
    // if (err){
    //     throw err
    // }
    // console.log(`Content: ${content}`)
    
    // let data = Buffer.from(content)
    // console.log(`Content: ${data.toString()}`)
// })