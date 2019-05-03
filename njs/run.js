
const runIt = (n, ar)=>{
    return ar
}

// Complete the oddNumbers function below.
const oddNumbers = (l, r) => {
    let current = l % 2 === 0 ? l + 1 : l
    let out = ''
    if (current >= r) {
        return out
    }
    while (current <= r) {
        out = [out, current].join(' ')
        current = current + 2
    }
    console.log(current, out.trim())
    return out.trim()
}

const cases = [
    {'func':oddNumbers, 'args':[2, 5], 'result':'3 5'},
]

cases.map(elem => {
    console.log('Started')
    console.assert(elem.func(elem.args[0], elem.args[1]) === elem.result, elem.func+JSON.stringify(elem.args)+' -> '+(elem.func(elem.args[0], elem.args[1])))
    console.log('Ended')
})