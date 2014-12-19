Feature: Write function to print the odd numbers from 1 to 99.
Scenario:
    Given a function that takes in a starting integer like "1" and a final integer like "99" it will create a string 
    When the start is "99" the only output is "99"
    When the start is "1" and the end is "5" the output should be:
    """
    1 3 5
    """
    When the start is "34" and the end is "45" the output should be:
    """
    35 37 39 41 43 45
    """