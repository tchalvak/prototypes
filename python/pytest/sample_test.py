# Run py.test to run
import pytest


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