#!/usr/bin/env python

import sys

nums = []
input() # discard the first line of input
for line in sys.stdin:
    nums.append(list(map(int, line.split())))
    

""" Perform a single calculation """
def calc(a, b, N):
    countup = 0
    sum = a
    while(countup < N):
        sum += 2**countup * b
        countup += 1
    return sum
    

""" Concat multiple calculation results """
def exponentify(nums):
    out = ''
    for x in nums:
        assert(3 == len(x))
        a = x[0]
        b = x[1]
        N = x[2]
        out += str(calc(a, b, N))+' ' #concat results
    assert(type(out) is str)
    print(out)
    assert(3 < len(out))
    return out

print(nums)
exponentify(nums)

   
print('Test results: '+exponentify([[5, 3, 1]])+' should be 8 and also: '+str(calc(7, 7, 3))+' should be 56')
assert(56 == calc(*[7, 7, 3]))
assert(8 == calc(*[5, 3, 1]))
assert(5 == calc(*[5, 1, 0]))

    
print(2343, end=' ')
print(45, end=' ')
print(777, end=' ')    
print(exponentify([[5, 3, 5]]).strip())

assert(3 <  len(exponentify([[5, 3, 5]])))
assert('8 14 26 50 98' == exponentify([[5, 3, 5]]).strip())