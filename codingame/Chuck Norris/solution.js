var MESSAGE = readline()

let result = ''
let pre = -1

for (const char of MESSAGE) {
    for (let j = 6; j >= 0; j--) {
        const bit = char.charCodeAt(0) >> j & 1 // get charCode and convert it to a bit
        if (bit !== pre) {
            result += 1 === bit ? ' 0 ' : ' 00 '
            pre = bit
        }
        result += '0'
    }
}

print(result.trim())