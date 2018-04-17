const N = Number(readline()) // Number of elements which make up the association table.
const Q = Number(readline()) // Number Q of file names to be analyzed.

let mimeMap = {}

const getMimeType = fileName => {
    const parts = fileName.split('.')
    if (parts.length > 1) {
        const extension = parts.pop().toLowerCase()
        if (mimeMap[extension]) {
            return (mimeMap[extension])
        }
    }
    return 'UNKNOWN'
}

for (let i = 0; i < N; i++) {
    const [EXT, MT] = readline().split(' ')
    mimeMap[EXT.toLowerCase()] = MT
}

for (let j = 0; j < Q; j++) {
    return (getMimeType(readline()))
}