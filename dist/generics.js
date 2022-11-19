"use strict";
//Generics
const score = [];
const names = [];
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree("three")
function identityFour(value) {
    return value;
}
// identityFour<Bootle>({})
//gernerics with arrays.
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//generic arrow function.
const getMoreSearchProducts = (products) => {
    //do some database operations.
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// anotherFunction(3,{})
