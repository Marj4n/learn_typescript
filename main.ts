export {}; // <- supaya gak error block scope
let message = "Hello World";
console.log(message);

// ========== Variable Declarations ==========
let x = 10;
const y = 20; // tidak akan pernah bisa di timpa

x = 30;
// y = 30; <- error

let sum;
// const title; <- error (harus ada valuenya)

// ========== Variable Types ==========
let isBeginner: boolean = true;
let name: string = "Kevin Yardan Fauzan";
let year: number = 16;

// name = true; <- error (tipe string tidak boleh di timpa dengan tipe boolean)

let sentance: string = `${name} adalah seorang ${isBeginner} programmer yang berusia ${year} tahun`;
console.log(sentance);

// bisa buat type null dan undefined
let n: null = null;
let u: undefined = undefined;

// null dan undefined bisa di assign dengan semua types
let isNew: boolean = null;
let yep: string = undefined;
console.log(isNew, yep); // Error Lens ngebug anjir

// Array Type
let listNumber1: number[] = [1, 2, 3];
let listNumber2: Array<number> = [1, 2, 3];

// Type array Campuran
let person1: [string, number] = [
  "Chris",
  22 /*, 33 <- error harus nambah type number lagi*/,
];
// let person2: [string, number] = [22 , "Chris"]; <- di balik gak bisa, harus sama barisnya sama typenya

// Type enum || Enumeration
enum Color {
  Red /*0*/,
  Green /*1*/,
  Blue /*3*/,
  Yellow = 8,
  Purple /*9*/,
}

let green: Color = Color.Green;
let purple: Color = Color.Purple;
console.log(green);
console.log(purple);

// Type yang bener bener random || any
let randomValue: any = 10;
randomValue = false;
randomValue = "Mamat";

let myVariable: any = 10;

// kalau type any diginiin gak error coy
// console.log(myVariable.math);
// myVariable();
// myVariable.toUpperCase();

// Type Unknown
let ndaktawu: unknown = 7;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

// ndaktawu.toUpperCase(); <- gini doang error
// ===================(ndaktawu as string).toUpperCase(); // harus gini

// ===================if (hasName(ndaktawu)) {
//   console.log(ndaktawu.name); // atau gini
// }

let a; // gak di assign === gak ada typenya
a = 10;
a = true;

let b = 20; // gini doang juga udah jadi type number
// b = true; <- error

// multiple Type
let multiType: number | boolean;
multiType = 20;
multiType = true;
// multiType = "Asep"; <- error (harus tambah type string)

// multiple type itu kayak any type, tapi multiple ada intellisensenya, sedangkan any tidak
let anyType: any;
anyType = 20;
anyType = true;

// ========== Function ==========
function add(num1: number, num2: number) {
  return num1 + num2;
}

add(7, 10);
// add("asep", 10); <- error

// bisa gini juga
function multiplication(
  num1: number,
  num2: number
): number /*harus return number, gk bisa return type lain*/ {
  // return ` adalah ${num1 * num2}` <- error;
  return num1 * num2;
}

function division(num1: number, num2?: number) {
  // num2 bisa kosong || false
  if (num2) return num1 / num2;
  else return "gak di apa apain, " + num1;
}

division(6, 8);
division(5);

// default param
function subtract(num1: number, num2: number = 10): number {
  return num1 - num2;
}
subtract(50);

// ========== Interface ==========
interface Person {
  firstName: string;
  lastName: string; // pake ? juga bisa
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let myName = {
  firstName: "Kevin",
  lastName: "Yardan",
};

fullName(myName);

// ========== Class & Access Modifiers ==========
//public bebeas di akses, private hanya bisa di akses di dalam kelas tersebut, protected bisa di akses di class extends-an

class Employes {
  public employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employes("Kurniawan");
console.log(emp1.employeeName);
emp1.greet();

console.log("==================================================");

class Manager extends Employes {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Kevin");
console.log(m1.employeeName);
m1.delegateWork();
m1.greet();
