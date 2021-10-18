"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// const charactersCollection = new CharactersCollection('adXawyb')
// charactersCollection.sort();
// console.log(charactersCollection.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3); 
// linkedList.add(4);
// linkedList.sort();
// linkedList.print();
var numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.length);
