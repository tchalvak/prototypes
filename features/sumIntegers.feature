Feature: Write a function that sums up integers from a text file, one int per line.

  Scenario:
    Given I am in a directory "test"
    And I have a file named "test.txt"
    And the file contains only:
    """
    23
    42
    65
    7
    """
    When I run the function on "test.txt"
    Then I should get:
      """
      137
      """

  Scenario:
    Given I am in a directory "test"
    And I have a file named "test.txt"
    And the file contains only:
    """
    1
    2
    3
    4
    """
    When I run the function on "test.txt"
    Then I should get:
      """
      10
      """