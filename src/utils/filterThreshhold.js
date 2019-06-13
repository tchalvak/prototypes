/*
Write a function called answer(data, n) that takes in a list of less than 100 integers and a number n, and returns that same list but with all of the numbers that occur more than n times removed entirely. The returned list should retain the same ordering as the original list. For instance, if data was [5, 10, 15, 10, 7] and n was 1, answer(data, n ) would return the list [5, 15, 7] because 10 occurs twice, and was thus removed from the list entirely.
*/

// Remove duplicates over a threshold
function answer(data, n){
  if(n == 0 || !Number.isInteger(n)){ // 
    return [] // Special case, just return empty list when threshold is 0 or non-int
  }
  const finalN = n < 0 ? 0 : n // Just ignore negative ns
  const initialList = Array.isArray(data) ? data : []
  const counts = {}
  initialList.forEach((num)=>{ // Count up occurances
    counts[num] = (counts[num] || 0) + 1
  })
  // Need a final loop to remove to preserve original order (sadly O(2n))
  return initialList.filter((integer)=>{
    return counts[integer] <= n
  })
}





// set some test expectations with identifiers to see which asserts fail
const compare = (list, listb) => {
  if(list.join() === listb.join()){
    return true
  } else {
    console.log('These comparisons did not match: ', list, listb)
    return false
  }
}

console.log('\nAssertions started.')
console.assert(compare(answer([5, 10, 15, 10, 7], 1), [5, 15, 7]), 'Alpha')
console.assert(compare(answer([5, 10, 15, 10, 7], 2), [5, 10, 15, 10, 7]), 'Beta')
console.assert(compare(answer([7, 7, 7, 7, 7], 2), []), 'Gamma')
console.assert(compare(answer([222, 7, 7, 7, 7, 7], 2), [222]), 'Delta')
console.assert(compare(answer([222, 7, 7, 7, 7, 7], 999), [222, 7, 7, 7, 7, 7]), 'Epsilon')
console.assert(compare(answer([1, 2, 3, 4, 5, 6], 0), []), 'Zeta')
console.assert(compare(answer('some invalid input', 1.223), []), 'Eta')
console.log('Ended\n')
