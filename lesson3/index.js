"use strict";

// functie declarativa
function declareVar() {
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }

    console.log("a =", a);
    // console.log("b=", b);
    // console.log("c=", c);
    console.log("Scope in non-arrow function:", this);
}

declareVar();

let d = 5;
let e = "devschool";
let f = ['mere', 'pere'];
let g = {"key" : "value"}
let h = Symbol("foo")

console.log("d -", typeof d);
console.log("e -", typeof e);
console.log("f -", typeof f);
console.log("g -", typeof g);
console.log("h -", typeof h);

// NaN
let i = Number("foo");
console.log("i =", i, typeof i);

// Infinite
let j = 4 / 0;
console.log("j =", j, typeof j);

let k = Object.create({});
console.log("k -", k, typeof k);

let str = String("ana");
console.log("str -", str, typeof str);

let arr = Array();
console.log("arr -", arr, typeof arr)

// expression function
const expr = function() {
    console.log("expresiion");
}
expr();

// arrow function
const arrow = () => {
    console.log("arrow_function");
    console.log("scope in arrow_function", this);
}
arrow()

// Classes
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getMeThis() {
        console.log(this);
    }
}

const r = new Rectangle(10, 20);
r.getMeThis();

const r2 = class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        console.log(this);
    }
}
console.log(r2.name);

