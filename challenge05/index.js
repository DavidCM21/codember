const originalTest = [
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez",
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez",
  "Gorusuke",
  "DavidFabian",
  "ItziarZG",
  "edy WOLF",
  "MarcosGaPe",
  "Jose Jimenez",
  "Borja ",
  "Jhonathan Izquierdo Higuita",
  "MiLfeR322",
  "Sebastián Espínola",
  "Matias Luna",
  "Imanol Decima",
  "MarcoCasula",
  "MaríaBohórquez",
  "Renan",
  "IvanL'olivier",
  "Shonero",
  "Luichidev",
  "Faviola Narvaez",
  "Christopher Fuentes",
  "Kuro",
  "Juan Pablo Addeo",
  "Sergio Martínez",
  "Fran Enriquez González",
  "Diana",
  "tictools",
  "ConchaAsensio",
  "Emilio_Arreaza",
  "novamix",
  "Tomas Duclos",
  "Elaya",
  "Ignacio Palominos",
  "David C.",
  "Gerardo Felipe Conrado",
  "ElXuri",
  "David Borja Martinez",
  "JaviFelices",
  "CarlesSànchez"
]

const test = originalTest.map(e => 'V')

do {
  for (let i = 0; i < test.length; i++) {
    if (test[i] === 'F') continue

    let index = i + 1

    while (true) {
      if (test[index] === undefined) index = 0
      if (test[index] === 'V') break

      index++
    }

    test[index] = 'F'
  }
} while (test.filter(e => e === 'V').length !== 1)

console.log(`submit ${test.indexOf('V')}-${originalTest[test.indexOf('V')]}`)
