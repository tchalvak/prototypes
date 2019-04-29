#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the sockMerchant function below.
def sockMerchant(n, ar):
    # Get counts of the socks per color
    counts = {}
    [counts[x] = counts[x] + 1 for x in ar]
    # divide counts of each color by 2, just throw away the remainder
    return sum([(num/20) for key, num in counts])

assert sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]) == 3, 'Invalid'


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
