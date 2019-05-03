
const runIt = (n, ar)=>{
    return ar
}


const context = {}
context.runIt = runIt

const cases = [
    {'func':runIt, 'args':[1, 2], 'result':2},
]

cases.map(elem => {
    console.log('Started')
    console.assert(elem.func(elem.args[0], elem.args[1]) === elem.result, elem.func+JSON.stringify(elem.args)+' -> '+(elem.func(elem.args[0], elem.args[1])))
    console.log('Ended')
})