from nose2.tools import *
import probs

def setup():
    print("SETUP!")

def teardown():
    print("TEAR DOWN!")

def test_time_runs():
	print(timeify('07:05:45PM') is not None)

def test_basic():
    print("I RAN!")