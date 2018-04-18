## The Goal

The city of Montpellier has equipped its streets with defibrillators to help save victims of cardiac arrests. The data corresponding to the position of all defibrillators is available online.

Based on the data we provide in the tests, write a program that will allow users to find the defibrillator nearest to their location using their mobile phone.

## Rules
The input data you require for your program is provided in text format.
This data is comprised of lines, each of which represents a defibrillator. Each defibrillator is represented by the following fields:

- A number identifying the defibrillator
- Name
- Address
- Contact Phone number
- Longitude (degrees)
- Latitude (degrees)

These fields are separated by a semicolon (;).

Beware: the decimal numbers use the comma (,) as decimal separator. Remember to turn the comma (,) into dot (.) if necessary in order to use the data in your program.

## 	DISTANCE

Note: In this formula, the latitudes and longitudes are expressed in radians. 6371 corresponds to the radius of the earth in km.

The program will display the name of the defibrillator located the closest to the user’s position. This position is given as input to the program.

## Input
Line 1: User's longitude (in degrees)

Line 2: User's latitude (in degrees)

Line 3: The number N of defibrillators located in the streets of Montpellier

N next lines: a description of each defibrillator

## Output

The name of the defibrillator located the closest to the user’s position.

## Constraints

0 < N < 10000

## Solution

```javascript
const degreesToRadians = angle => angle * (Math.PI / 180)
const strToRadians = str => degreesToRadians(Number(str.replace(',', '.')))

let closestDefib = ''
let shortestDistance = -1

const calcDistanceBetween = (coordA, coordB) => {
    // formula to calculate distance between coordinates where lat and lon are radians.
    const earthRadius = 6371

    const x = (coordB.lon - coordA.lon) * Math.cos((coordA.lat + coordB.lat) / 2);
    const y = coordB.lat - coordA.lat
    const distance = Math.sqrt(x**2 + y**2) * earthRadius
    return distance
}

const lon = strToRadians(readline());
const lat = strToRadians(readline());
const N = parseInt(readline());

const userCoord = { lat, lon }

for (let i = 0; i < N; i++) {
    var DEFIB = readline().split(';');
    const defibCoord = { lon: strToRadians(DEFIB[4]), lat: strToRadians(DEFIB[5]) }
    const distance = calcDistanceBetween(defibCoord, userCoord)
    if (distance < shortestDistance || shortestDistance === -1) {
        closestDefib = DEFIB[1]
        shortestDistance = distance
    }
}

print(closestDefib);
```