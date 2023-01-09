import os from 'os'

console.log(`Operating system: ${os.platform}`)

console.log(`Архітектура процесора: ${os.arch}`)

// console.log(`CPU information: ${os.cpus()[0].model}`)

//  ==========      os.cpus()    returns array of CPUs on this machine
// let arrayOfAllCPUs = os.cpus()

// for (let i = 0; i < arrayOfAllCPUs.length; i++){
//     console.log(arrayOfAllCPUs[i].speed)
// }

//  ==========   returns free memory in bytes
console.log(`Free memory: ${os.freemem}`)

//  ==========   returns total memory in bytes
console.log(`Total memory: ${os.totalmem}`)

//  ========     returns current user home directory
console.log(`Home directory: ${os.homedir}`)


//      =======     returns system upTime in seconds
console.log(`Current Uptime: ${os.uptime/60/60}`)

