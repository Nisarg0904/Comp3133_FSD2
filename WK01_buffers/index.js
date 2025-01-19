// let b1 = new Buffer("Hello")

let b1 = Buffer.from("A Hello World");
console.log(b1);
console.log(b1[0]);
console.log(b1[1]);

console.log(b1.toString());
console.log(b1.length);

let b2 = Buffer.from([65, 66]);
console.log(b2);
console.log(b2[0]);
console.log(b2[1]);
console.log(b2.toString());

let b3 = Buffer.from(b2);
console.log(b3.toString());

let b4 = Buffer.alloc(10);
console.log(b4);
b4.fill("*");
console.log(b4);
console.log(b4.toString());

let b5 = Buffer.allocUnsafe(10);
console.log(b5);

b5.write("COMP3133");
console.log(b5);
console.log(b5.toString());
console.log(b5.length);
console.log(b5.byteLength);

b5.copy(b4);
console.log(b4.toString());

console.log("--------------------------");
let b6 = Buffer.from("A 🎁🛎");
console.log(b6);
console.log(b6.toString());
console.log(b6.toString("utf8", 2, 6));
console.log(b6.length);
console.log(b6[0]);
b6[2] = 65;

console.log(b6);
console.log(b6.toString());

console.log("--------------------------");

let b7 = Buffer.concat([b4, b5, Buffer.from("-XYZ")]);
console.log(b7.toString());

let b8 = Buffer.from("ABCD");
console.log(b8.toJSON());
