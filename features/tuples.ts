const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];

// const pepsi = ['brown', true, 40];
// annotation below converts to tuple, also can use type alias ablove
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[0] = 40;

// Tuple vs object example
// =======================

// as tuple - will not really be used as often as object, except for edge cases
const carSpecs: [number, number] = [400, 3354];

// as object <- better and more descriptive than tuple above
const carStats = {
  horsepower: 400,
  weight: 3354
};
