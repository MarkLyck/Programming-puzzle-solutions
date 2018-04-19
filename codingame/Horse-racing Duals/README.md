## The Goal

Casablanca’s hippodrome is organizing a new type of horse racing: duals. During a dual, only two horses will participate in the race. In order for the race to be interesting, it is necessary to try to select two horses with similar strength.

Write a program which, using a given number of strengths, identifies the two closest strengths and shows their difference with an integer (≥ 0).

## Input
Line 1: Number N of horses

The N following lines: the strength Pi of each horse. Pi is an integer.

## Output

The difference D between the two closest strengths. D is an integer greater than or equal to 0.

## Constraints

1 < N  < 100000
0 < Pi ≤ 10000000

## Solution

```javascript
var N = parseInt(readline())

const strs = []

for (let i = 0; i <= N; i++) {
    strs.push(parseInt(readline()))
}

const minDiff = strs.sort().reduce((acc, curr, i) => {
    const diff = Math.abs(curr - strs[i - 1])
    if (strs[i - 1] && (acc !== null || acc >= diff)) {
        acc = diff
    }
    return acc
}, null)

print(minDiff)
```