"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
console.log(message);
// ========== Variable Declarations ==========
var x = 10;
var y = 20; // tidak akan pernah bisa di timpa
x = 30;
// y = 30; <- error
var sum;
// const title; <- error (harus ada valuenya)
// ========== Variable Types ==========
var isBeginner = true;
var name = "Kevin Yardan Fauzan";
var year = 16;
// name = true; <- error (tipe string tidak boleh di timpa dengan tipe boolean)
var sentance = "".concat(name, " adalah seorang ").concat(isBeginner, " programmer yang berusia ").concat(year, " tahun");
console.log(sentance);
// bisa buat type null dan undefined
var n = null;
var u = undefined;
// null dan undefined bisa di assign dengan semua types
var isNew = null;
var yep = undefined;
console.log(isNew, yep); // Error Lens ngebug anjir
// Array Type
var listNumber1 = [1, 2, 3];
var listNumber2 = [1, 2, 3];
// Type array Campuran
var person1 = [
    "Chris",
    22 /*, 33 <- error harus nambah type number lagi*/,
];
// let person2: [string, number] = [22 , "Chris"]; <- di balik gak bisa, harus sama barisnya sama typenya
// Type enum || Enumeration
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red"; /*0*/
    Color[Color["Green"] = 1] = "Green"; /*1*/
    Color[Color["Blue"] = 2] = "Blue"; /*3*/
    Color[Color["Yellow"] = 8] = "Yellow";
    Color[Color["Purple"] = 9] = "Purple"; /*9*/
})(Color || (Color = {}));
var green = Color.Green;
var purple = Color.Purple;
console.log(green);
console.log(purple);
// Type yang bener bener random || any
var randomValue = 10;
randomValue = false;
randomValue = "Mamat";
var myVariable = 10;
// kalau type any diginiin gak error coy
// console.log(myVariable.math);
// myVariable();
// myVariable.toUpperCase();
// Type Unknown
var ndaktawu = 7;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
// ndaktawu.toUpperCase(); <- gini doang error
// ===================(ndaktawu as string).toUpperCase(); // harus gini
// ===================if (hasName(ndaktawu)) {
//   console.log(ndaktawu.name); // atau gini
// }
var a; // gak di assign === gak ada typenya
a = 10;
a = true;
var b = 20; // gini doang juga udah jadi type number
// b = true; <- error
// multiple Type
var multiType;
multiType = 20;
multiType = true;
// multiType = "Asep"; <- error (harus tambah type string)
// multiple type itu kayak any type, tapi multiple ada intellisensenya, sedangkan any tidak
var anyType;
anyType = 20;
anyType = true;
// ========== Function ==========
function add(num1, num2) {
    return num1 + num2;
}
add(7, 10);
// add("asep", 10); <- error
// bisa gini juga
function multiplication(num1, num2) {
    // return ` adalah ${num1 * num2}` <- error;
    return num1 * num2;
}
function division(num1, num2) {
    // num2 bisa kosong || false
    if (num2)
        return num1 / num2;
    else
        return "gak di apa apain, " + num1;
}
division(6, 8);
division(5);
// default param
function subtract(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 - num2;
}
subtract(50);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var myName = {
    firstName: "Kevin",
    lastName: "Yardan"
};
fullName(myName);
// ========== Class & Access Modifiers ==========
//public bebeas di akses, private hanya bisa di akses di dalam kelas tersebut, protected bisa di akses di class extends-an
var Employes = /** @class */ (function () {
    function Employes(name) {
        this.employeeName = name;
    }
    Employes.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employes;
}());
var emp1 = new Employes("Kurniawan");
console.log(emp1.employeeName);
emp1.greet();
console.log("==================================================");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employes));
var m1 = new Manager("Kevin");
console.log(m1.employeeName);
m1.delegateWork();
m1.greet();
