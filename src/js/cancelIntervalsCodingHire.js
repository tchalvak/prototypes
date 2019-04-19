
function initialize (){
    // Store for the ids of intervals to get cancelled
    const intervalIdList = []
    
    
    // wrap setInverval
    const setInterval = (callback, delay)=>{
        // add a interval to a collection
        const id = setInterval(callback, delay)
        intervalIdList.push(id)
        // return the collection
        return id
    }


    // Take an interval list and cancel them all
    const cancelIntervals = ()=> {
        const len = intervalIdList.length
        list.map((id)=>{
            clearInterval(id)
        })
        return len
    }
    
    return [setInterval, cancelIntervals]
}


const { setInterval2, cancelIntervals } = initialize()

window.setInterval = setInterval2

cancelIntervals()






// cancelIntervals
// map through the collection and 
// clearInterval on each entry

// test expectations here
// Check that once I've called setInterval 3 times I get a collection of 3 members
const id1 = setInterval(()=> {
    console.log('tick1')
}, 5000)
const id2 = setInterval(()=> {
    console.log('tick2')
}, 5000)
const id3 = setInterval(()=> {
    console.log('tick3')
}, 5000)

console.assert(cancelIntervals().length === 3)
