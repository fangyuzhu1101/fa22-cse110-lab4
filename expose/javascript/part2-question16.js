let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 50,
    rareCars: 2
};

for (let property in statistics) {
  // if the property starts with the letter r, or if the value of that property is an odd number 
  // check if the remainder: if the remainder is 1, then the value is an odd number
  if (property[0] === 'r' || statistics[property] % 2 === 1) {
    // print out the values of the property
    console.log(`${property}: ${statistics[property]}`);
  }
}