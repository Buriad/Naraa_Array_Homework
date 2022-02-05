// 1. let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
// 1. Array-н урт хэд вэ?
// Array-н уртыг console.log-р хэвлэх myAlphabetLength хэмээх функцийг бич.
// Функц дотор Array-н урт 4-өөс бага эсэхийг шалгадаг if-нөхцөл бич

// 1. array length is 7

function myAlphabetLength(x) {
  const myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
  let length = myAlphabet.length;
}
console.log(length);

function arrayLength(x) {
  let result;
  if (x < 4) {
    result = "less than 4";
  } else {
    result = "more than 4";
  }
  return result;
}
console.log(arrayLength(x));

// 2. Planets нэртэй Array-г 5 string утгатай зарлаж, таниулна уу
// array дахь element бүрийг индексийн хамт хэвлэн гаргаж ирнэ үү

let planets = ["A", "B", "C", "D", "E"];
var last = planets[planets.length - 1];
console.log(last);

// 3. wowDatatypes гэж нэрлэгддэг array-г зарлаж, таниулна уу
// array дахь element нь 5 өөр өгөгдлийн төрөлтэй байх ёстой (string,integer(бүхэл
// тоо),float(бутархай тоо),char(үсэг),boolean)
// Array дээр давталт хийж, array дахь element бүрийг, индекс болон өгөгдлийн төрлийг хамт
// хэвлэн гаргаж ирнэ үү (typeof command аар өгөгдлийн төрлийг олно жишээ нь:
// console.log(typeof data))

let wowDatatypes = ["data", "2", "2.5", "A", "false"];

for (let i = 0; i < 5; i++) {}

console.log(typeof "data" + typeof 2 + typeof 2.5 + typeof A + typeof false);

// 4.
// let student1Courses = ['Математик', 'Англи хэл', 'Програмчлал'];
// let student2Courses = ['Газар зүй', 'Испани', 'Програмчлал'];
// 2 array дээр давталт хийж, хэрэв нийтлэг element байгаа бол тэдгээрийг гаргаж ирнэ үү

let student1Courses = ["Математик", "Англи хэл", "Програмчлал"];
let student2Courses = ["Газар зүй", "Испани", "Програмчлал"];

for (let i = 0; i < 3; i++) {}

for (let i = 0; i < 3; i++) {}
