var Mocha = require('mocha')
var assert = require('assert')
var mocha = new Mocha()

mocha.suite.emit('pre-require', this, 'solution', mocha) // required


// Comparing two anagrams:
// Normalize each by removing a single character in turn then comparing for equality
// // Two functions: compare & group
// G1, G2, W belongs to both groups
function compare(word, anotherWord){
  // Remove each letter in turn from first word
  let matches = 0;
  for(let i = 0;i<word.length;i++){
    if(word.charAt(i) === anotherWord.charAt(i)){
      matches++
    }
  }
  return matches === 2;
}

function group(words){
  let groups = []
  // For each word, compare to next word
  for(let i = 0;i<words.length;i++){
      // Finding match, add to a group
      for(let j = i+1;j<words.length;j++){
        if(compare(words[i], words[j])){
          groups = mergeGroups(words[i], words[j], groups)
        }
      }
  }

  return groups.length
}

function mergeGroups(matchedWord1, matchedWord2, groups){
  // Add go existing group if one of the words is already in the group
  let added = false
  groups.map((set)=>{
    if(set.includes(matchedWord1) || set.includes(matchedWord2)){
      set.push(matchedWord1)
      set.push(matchedWord2)
      added = true
    }
    return set
  })
  if(!added){
    groups.push([matchedWord1, matchedWord2])
  }
  return groups
}


describe('Comparison', function() {
  it('should match two equivalent anagrams', function() {
    assert(compare('tars', 'rats'))
    
  })
  it('should not match two non-equivalent words', function() {
    assert(compare('tars', 'baby') === false)
  })
})

describe('Group', function() {
  it('should find a single group for a single word', function() {
    assert.deepEqual(group(['tars']).length, 1)
    
  })
  it('should find a single group for a few similar anagrams', function() {
    assert.deepEqual(group(['tars', 'rats']), 1)
    
  })
  it('should find multiple groups for dissimilar anagrams', function() {
    assert.deepEqual(group(['tars', 'star', 'arts']), 2)
  })
  it('should find multiple groups for dissimilar words', function() {
    assert.deepEqual(group(['tars', 'baby', 'term']), 3)
  })
})

describe('Merging', ()=>{
  it('should create an initial group', ()=>{
    assert.deepEqual(mergeGroups('tars', 'arts', []).length, 1)
  })
  it('should merge new words into a similar set', ()=>{
    assert.deepEqual(mergeGroups('tars', 'arts', [['tars'],['stars']]).length, 2)
  })
})

mocha.run()












/* 

Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y.
For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".
Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.  Notice that "tars" and "arts" are in the same group even though they are not similar.  Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.
We are given a list A of strings.  Every string in A is an anagram of every other string in A.  How many groups are there?
Example 1:
Input: ["tars","rats","arts","star"]
         i
   isSimilar (s1,s2)
          for i=0 to len(s1):
            if s1[i] != s2[i]
              c++
              
          return c == 2
Output: 2
*/