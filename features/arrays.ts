const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// const carsByMake = [['F150'], ['Corolla'], ['Camaro']];
const carsByMake: string[][] = [];

// Help with inference when extracting values
const newCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values from being added
carMakers.push(100);

// help with map, forEach, reduce functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(100);
