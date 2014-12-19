Feature: Create a function that returns the nth fibonacci number, as per https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions
Scenario:
  When I call the function with a positive integer argument I should get an integer in return
  When I request the number "0" I should get "0"
  When I request the number "1" I should get "1"
  When I request the number "2" I should get "1"
  When I request the number "3" I should get "2"
  When I request the number "4" I should get "3"
  When I request the number "5" I should get "5"
  When I request the number "6" I should get "8"
  When I request the number "7" I should get "13"
  When I request the number "8" I should get "21"
  When I request the number "9" I should get "34"
  When I request the number "10" I should get "55"
  When I request the number "55" I should get "139583862445"