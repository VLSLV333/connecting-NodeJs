// import chalk from 'chalk'
// import {text} from './data.js'
// console.log(chalk.blue('Hello NodeJs!'))
// console.log(chalk.yellow(text))
// console.log(chalk.green(`Vladyslav`))
// ==================================           Create your own server!
import http from 'http'
import fs from 'fs'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

let __filename = fileURLToPath(import.meta.url)
let __dirname = dirname(fileURLToPath(import.meta.url))


// =========    request = exists for us to receive information about clients request to the server
//  =============       responce = information with server's responce to client
let server = http.createServer( (request, responce) => {
    // console.log(request.url)
    // if (request.url === '/' || request.url === '/index.html'){
    //     console.log('here 23')
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err){
    //             throw err
    //         }
    //         responce.writeHead(200, {
    //             'Content-type': 'text/html'
    //         })
    //         responce.end(data)
    //     })
    // } else if (request.url === '/contact.html') {
    //     console.log('here')
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err){
    //             throw err
    //         }
    //         responce.writeHead(200, {
    //             'Content-type': 'text/html'
    //         })
    //         responce.end(data)
    //     })
    // }
    //  ======     specifies what type of content the server responced with 
    // responce.writeHead(200, {
    //     'Content-type': 'text/html'
    // })
    // responce.writeHead(200, {
    //     'Content-type': 'text/plain'
    // })

    //  ======      the server responce
    // responce.end('<h1>Hello NodeJs!<h1/>')




    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)
    let fileExtension = path.extname(filePath)
    let contentType = 'text/html'
    switch(fileExtension){
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }
    // console.log(filePath)
    fs.readFile(filePath, (err, content) => {
        if (err){
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err,data) => {
                if(err){
                    responce.writeHead(500)
                    responce.end('Error=(')
                } else {
                    responce.writeHead(200, {
                        'Content-type':'text/html'
                    })
                    responce.end(data)
                }
            })
        } else {
            responce.writeHead(200, {
                'Content-type': contentType
            })
            responce.end(content)
        }
    })
})

let PORT = process.env.PORT || 3000

server.listen(/*port*/ PORT, () => {
    console.log(`server has been started on ${PORT} port...`)
})