function calculateArea(object) {
  if (object.shape === "square") {
    return object.height * object.width;
  }
  if (object.shape === "circle") {
    return 3.14 * object.radius * object.radius;
  }
}
// a function should be closed for modification but open for extension
const areaCalculator = {
  square: (obj) => obj.height * obj.width,
  circle: (obj) => Math.PI * obj.radius * obj.radius,
};

function calculateArea(obj) {
  const strategy = areaCalculator[obj.shape];

  if (!strategy) {
    throw new Error("Unknown shape: " + obj.shape);
  }

  return strategy(obj);
}
const square = { shape: "square", width: 10, height: 5 };
const circle = { shape: "circle", radius: 4 };

console.log(calculateArea(square)); // 50
console.log(calculateArea(circle)); // ~50.26


// imp! our main target is without touching the main function we should be able to handle new type/branch
function calculateTax(country, amount) {
  const tax = {
    india: amount * 0.18,
    usa: amount * 0.07,
  };

  return tax[country];
}
//above is not following OCP because if we want to add new country we have to modify the function

//refactored code following OCP
const taxStrategies = {
  india: (amount) => amount * 0.18,
  usa: (amount) => amount * 0.07,
};

function calculateTax(country, amount) {
  const strategy = taxStrategies[country];

  if (!strategy) {
    throw new Error("Tax strategy not found for country: " + country);
  }

  return strategy(amount);
}
// Now, to add a new country, we just need to add a new strategy without modifying the calculateTax function
taxStrategies.uk = (amount) => amount * 0.2;

// Example usage:
console.log(calculateTax("india", 1000)); // 180
console.log(calculateTax("usa", 1000));   // 70
console.log(calculateTax("uk", 1000));    // 200     

