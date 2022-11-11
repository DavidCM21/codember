import { readFileSync } from 'node:fs'

const data = readFileSync('challenge01/users.txt', 'utf-8')
const listUsers = data.split('\n\n').map(user => user.replaceAll('\n', ' '))

const listRealUsers = listUsers.filter(user => 
    user.includes('usr:') &&
    user.includes('eme:') &&
    user.includes('psw:') &&
    user.includes('age:') &&
    user.includes('loc:') &&
    user.includes('fll:')   
)

console.log(listRealUsers.length)
console.log(listRealUsers.at(-1))