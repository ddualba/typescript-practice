var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken?: " + vehicle.broken);
};
printVehicle(oldCivic);
