const degreesToRadians = angle => angle * (Math.PI / 180)
const commaStrToNum = str => Number(str.replace(',', '.'))

const defibs = [
    '1;Maison de la Prevention Sante;6 rue Maguelone 340000 Montpellier;;3,87952263361082;43,6071285339217',
    '2;Hotel de Ville;1 place Georges Freche 34267 Montpellier;;3,89652239197876;43,5987299452849',
    '3;Zoo de Lunaret;50 avenue Agropolis 34090 Mtp;;3,87388031141133;43,6395872778854',
]

let closestDefib = 0
let closestDistance = -1

const calcDistanceFrom = (coordA, coordB) => {
    // formula to calculate distance between coordinates.
    const x = (coordB.lon - coordA.lon) * Math.cos((coordA.lat + coordB.lat) / 2)
    const y = (coordB.lat - coordA.lat)
    const earthRadius = 6371
    const d = Math.sqrt(x**2 + y**2) * earthRadius
    return d
}

const LON = commaStrToNum('3,879483')
const LAT = commaStrToNum('43,608177')
const N = parseInt('3')

const userCoord = { lon: degreesToRadians(LON), lat: degreesToRadians(LAT) }

for (let i = 0; i < N; i++) {
    var DEFIB = defibs[i].split(';')
    const defibLon = commaStrToNum(DEFIB[4])
    const defibLat = commaStrToNum(DEFIB[5])

    const defibCoord = { lon: degreesToRadians(defibLon), lat: degreesToRadians(defibLat) }
    const distance = calcDistanceFrom(defibCoord, userCoord)
    if (distance < closestDistance || closestDistance === -1) {
        closestDefib = DEFIB[1]
        closestDistance = distance
    }
}

closestDefib