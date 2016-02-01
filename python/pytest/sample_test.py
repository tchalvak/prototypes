# Run py.test to run
from yaml import load, dump
import pytest
import yaml
import configparser


documents = """
---
- Ada
- APL
- ASP

- Assembly
- Awk
---
- Basic
---
- C
- C#    # Note that comments are denoted with ' #' (space then #).
- C++
- Cold Fusion
...
"""

for data in yaml.load_all(documents):
    print data


print 'whatever'


'''
stream = file('document.yaml', 'r')    # 'document.yaml' contains a single YAML document.
for data in yaml.load_all(stream):
    print(data)
'''

# content of test_sample.py
def func(x):
    return x + 1

def test_should_fail():
    assert func(3) == 5


def f():
    raise RuntimeError(1)

def test_exception_test():
    with pytest.raises(RuntimeError):
        f()

def test_exception_test():
    with pytest.raises(TypeError):
        f()