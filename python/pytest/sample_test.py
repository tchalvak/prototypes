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


# content of test_class.py
class TestClass:
    def test_one(self):
        x = "this"
        assert 'h' in x

    def test_two(self):
        x = "hello"
        assert hasattr(x, 'check')