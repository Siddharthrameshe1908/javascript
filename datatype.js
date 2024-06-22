// for(var a= 10;a>1;a--){
//     document.write(a)
//     console.log(a)
// }

// var a = 10
// while(a>1){
//     document.write(a);
//     console.log(a);
//     a -= 1
// }

// var a =10
// do{
//     document.write(a);
//     console.log(a);
// }
// while(a != 10);

// function task(a,b,...d){
//     console.log(a);
//     console.log(b);
//     console.log(a,b,d);
// }
// task(10,20,30,40,50,60,70)

function display(subject){
    console.log(subject);
    return subject
}
var x2 = display(function(){
            return 'react js'
})
console.log(x2());

