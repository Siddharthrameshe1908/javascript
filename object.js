// function student(sname,sid,sper){
//     this.sname =sname;
//     this.sid= sid;
//     this.sper= sper;
// }
// var s = new student('siddhu',21,'76%')
// console.log(s);

// var product = new Object()
// console.log(product);
// // console.log(product.Pname='pen')
// product.Pname='pen'
// // console.log(product.Pprice=10)
// product.Pprice=10
// // console.log(product.Pcolor='red')
// product.Pcolor='red'
// console.log(product)

// var emp={
//     Ename:'sid',
//     Eid:21,
//     Esal:20000
// }
// console.log(emp)
// // console.log(emp.Ename)
// console.log(emp['Ename'])
// console.log(emp['Eid'])

var product= {
    pname: "laptop",
    pcom:"dell",
    pprice:50000,
}
var pet={
    petName:'dog',
    petcolor: 'white',
    petGender: 'female',
}
console.log(Object.assign({},product,pet))
console.log(Object.keys(product))
console.log(Object.entries(product))
console.log(Object.values(product));

// console.log(Object.freeze(pet));
// console.log(Object.isFrozen(pet));
// pet.page = '1year'
// console.log(pet)
// pet.petGender = 'male'
// console.log(pet)
// delete pet.petName;
// console.log(pet)
// console.log(pet.petGender)

// console.log(Object.seal(pet))
// console.log(Object.isSealed(pet))
// pet.page = '1year'
// console.log(pet)
// delete pet.petGender
// console.log(pet)
// console.log(pet.petName)
// pet.petcolor = 'black'
// console.log(pet)