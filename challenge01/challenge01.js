import { readFileSync } from 'node:fs'

const INDICE = -1

const formatDataUser = data => {
  let formatDataJson = '';

  const newData = data.split(' ')

  newData.forEach(element => {
    const [key, value] = element.split(':')

    formatDataJson += (formatDataJson === '') ? `{"${key}":"${value}"` : `,"${key}":"${value}"`
    formatDataJson += (newData.at(-1) === element) ? '}' : ''
  })

  return JSON.parse(formatDataJson)
}

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

const formatData = formatDataUser(listRealUsers.at(INDICE)) 

console.log(`submit ${listRealUsers.length}${formatData.usr}`)
