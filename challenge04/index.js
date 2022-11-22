const INICIO = 11098
const FIN = 98123

let count = []

for (let i = INICIO; i < FIN; i++) {
    const numActual = i.toString().split('')

    let countCincos = 0
    let estado = true
    
    for (let l = 0; l < 5; l++) {
        if (!estado) { continue }
    
        numActual[l] === '5' && countCincos++
    
        const num = parseInt(numActual[l])
        const numP = (l + 1) === 5 ? parseInt(numActual[l]) + 1 : parseInt(numActual[l + 1])
    
        estado = numP >= num
    }
    
    countCincos >= 2 && estado && count.push(i)
}

console.log(count.length)
console.log(count[55])
