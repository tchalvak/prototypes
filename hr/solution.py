#!/bin/python3

import math
import os
import random
import re
import sys


def substrCount(n, s):
    ''' Find the substrings that are palindromes '''
    return (n, s)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    result = substrCount(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()
