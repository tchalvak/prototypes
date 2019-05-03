import math
import os
import random
import re
import sys

# Generic function
def commonChild(n, params):
    return params

def rotLeft(a, d):
    return a[d:] + a[:d]

if __name__ == '__main__':
    func = rotLeft
    cases1 = [
        (1, [1], [1], 'simple 1'),
        (5, [5], [5], 'have some fives'),
    ]
    cases = [
        ([1, 2, 3, 4, 5], 4, [5, 1, 2, 3, 4], 'rotate1')
    ]
    print('Start of asserts')
    for case in cases:
        debugmess = ' '.join(list([func.__name__, 'Result: '+str(func(case[0], case[1]) == case[2]), case[3]]))
        assert (func(case[0], case[1]) == case[2]), debugmess
    #[assert (func(case[0], case[1]) == case[2]), case[3] for case in cases]
    print('End of asserts')