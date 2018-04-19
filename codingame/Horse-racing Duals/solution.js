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