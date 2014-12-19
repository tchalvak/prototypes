Feature: System which takes in packages with id, size, and speed qualities.  Then ship those packages by priority, which is fast > slow, large > small, FIFO. We'll assume that ids are numeric for now.

Scenario:
  Given a shipping App exists
  Given the packages "410,large,slow", "333,small,slow", "555,small,slow", "417,large,slow", "444,small,fast", "777,large,fast", and "312,large,fast"
  And the package count is "7"
  When A next package out is requested
  Then It will be package "777"
  And next will be package "312"
  And next will be package "444"
  And next will be package "410"
  And next will be package "417"
  And next will be package "333"
  And next will be package "555"
  And no more packages are available

Scenario:
  Given no packages in the system
  When "234,large,fast" is added
  And "444,small,fast" is added
  Then the next package is "234"
  And "111,large,slow" is added
  And "999,large,slow" is added
  Then the next package is "444"
  And "765,small,fast" is added
  And "654,small,fast" is added
  Then the next package is "765"
  And the package count is "3"
  And the next package is "654"
  And the next package is "111"
  And the next package is "999"
  And no more packages are available