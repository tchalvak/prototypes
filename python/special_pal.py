#!/bin/python3

import math
import os
import random
import re
import sys

#Check it's a palindrome
def is_palindrome(word):
    return word == word[::-1]

# Find the word surrounding a letter expanding outwards
def letter_surroundings(paragraph, index, size):
    start = index-size
    end = index+size
    # TODO handle paragraph boundaries here
    return paragraph[start:end:]



# Find the substrings that are palindromes
def substrCount(n, s):

    mirror = s[::-1]
    return 1

# Don't forget to handle even palindromes!

# Internal testing
pal_words = ['bob', 'aba', 'cccccc', 'soliloquyyuqolilos', 'a', 'likkil']

# Check these palindromes work
assert len([ word for word in pal_words if is_palindrome(word)]) == len(pal_words)

# These non-palindromes should fail
non_pal_words = ['ajsdal', 'sajdm', 'wejma', 'sadlfkjasdfjklasdfflkjasd', 'it']

assert len([ word for word in non_pal_words if is_palindrome(word)]) == 0

paragraph_slices = {
    'aba': (1, 1),
}
# Check that paragraph slices work
assert len([word for word, params in paragraph_slices if is_palindrome(letter_surroundings(word, params[0], params[1]))]) == len(paragraph_slices)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    result = substrCount(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()
