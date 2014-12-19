Feature: Format an RGB value 
	(three 1-byte numbers) 
	as a 6-digit hexadecimal string.

Scenario:
  Given a value like "0, 0, 0" get a hex like "000000"
  Given a value like "255, 255, 255" get a hex like "ffffff"
  And a value like "200, 200, 200" get a hex like "c8c8c8"
  And a value like "200, 255, 0" get a hex like "c8ff00"
  And a value like "3, 4, 60" get a hex like "03043c"
  And a value like "255, 0, 128" get a hex like "FF0080"
