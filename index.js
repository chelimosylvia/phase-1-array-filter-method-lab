// Code your solution here
// findMatching: Case-insensitive search for matching drivers' names
function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  // fuzzyMatch: Search for drivers whose names begin with provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // matchName: Search for drivers whose name property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
