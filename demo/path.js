//      =======================         Підхід через реквайр (він працює, якщо наш package.json IS NOT 'type: module'!! )
// let path = require('path')
// console.log(`Назва файлу: ${path.basename(__filename)}`)
// console.log(`Назва папки: ${path.dirname(__filename)}`)
// console.log(`Розширення файлу: ${path.extname(__filename)}`)

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log(__filename)
// console.log(__dirname)
// console.log(import.meta.url)

// console.log(`Назва файлу: ${path.basename(__filename)}`)
// console.log(`Назва папки: ${path.dirname(__filename)}`)
// console.log(`Розширення файлу: ${path.extname(__filename)}`)
// console.log('Parse: ', path.parse(__filename))  //   =============  awesome get object keys and use them!

console.log(path.join(__dirname, 'server','index.html'))    //  ?? used to get path to some relative file at same directory??

