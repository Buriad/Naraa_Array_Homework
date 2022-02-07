// wowDatatypes гэж нэрлэгддэг array-г зарлаж, таниулна уу
// let wowDatatypes = ["", "", "", "", ""];

// array дахь element нь 5 өөр өгөгдлийн төрөлтэй байх ёстой (string,integer(бүхэл
// тоо),float(бутархай тоо),char(үсэг),boolean)
// let wowDatatypes = ["data", 2, 2.5, "A", "false"];

// Array дээр давталт хийж, array дахь element бүрийг, индекс болон өгөгдлийн төрлийг хамт
// хэвлэн гаргаж ирнэ үү (typeof command аар өгөгдлийн төрлийг олно жишээ нь:
// console.log(typeof data))

let typeofData = ["data", 2, 2.5, "A", "false"];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(typeofData);
  }
}
