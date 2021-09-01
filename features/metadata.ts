import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Secret Message')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

// 2nd example
// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi from color', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

// 1st example
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note);
// console.log(height);
