import math
import os
import random
import re
import sys

# Generic function
def oddNumbers(l, r):
    ''' Print out the odd numbers inclusive between a left and right ?integer? reversed left and right? '''
    # Don't want to use range here
    current = l
    # Start with an odd
    if current % 2 == 0:
        current = current + 1
    if r < l:
        return ''
    while current <= r:
        print(current)
        current = current + 2
    return current

if __name__ == '__main__':
    func = oddNumbers
    cases1 = [
        (1, [1], [1], 'simple 1'),
        (5, [5], [5], 'have some fives'),
    ]
    cases2 = [
        ([1, 2, 3, 4, 5], 4, [5, 1, 2, 3, 4], 'rotate1')
    ]
    cases = [
        (2, 5, 5, 'betweeners'),
        (100, 112, 113, '100 betweeners'),
    ]
    print('Start of asserts')
    for case in cases:
        debugmess = 'Debug result: '+' '.join(list([func.__name__, 'Result: '+str(func(case[0], case[1]), str(func(case[0], case[1]) == case[2])), case[3]]))
        assert (func(case[0], case[1]) == case[2]), debugmess
    #[assert (func(case[0], case[1]) == case[2]), case[3] for case in cases]
    print('End of asserts')