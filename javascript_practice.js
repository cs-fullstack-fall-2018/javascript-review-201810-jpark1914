// function inRange(number1, number2)
// {
//     var newNumber = [];
//
//     if (number1 > number2) {
//
//         for (var x = number1 + 1; x < number2; x++) {
//             console.log(x);
//             newNumber.push(x);
//         }
//         return console.log(newNumber);
//
//     }else if(number2> number1){
//         return console.log(newNumber.push(-1));
//     }
// }
//
// console.log(inRange(1,10));


//==============
//Multiplication Table
//==============

// function multiTable(){
//    var multi = '';
//     for(x=0; x<10; x++){
//         for(i =0; i<10; i++){
//
//             multi = x * i;
//             console.log(multi);
//         }
//     }
// return multi
// }
//
// multiTable();

//==========
//Input Multi
//==========

// function inputMutli(num1){
//     var multi = [];
//     for(x = 1; x<num1; x++) {
//         for (i = 0; i < 10; i++) {
//             mutlti = multi.push(i * x);
//
//         }
//     }
//         return console.log(multi)
// }
//
// inputMutli(13);

//==============
//Calculation
//==============

// function multiples_of_23(){
//    var newNumber = 0;
//     for(i=0; i<500; i++) {
//         if (i % 23 == 0) {
//             newNumber += i;
//         }
//     }
//     return console.log(newNumber);
// }
//
// multiples_of_23();


//==============
//Max
//==============

// function max(x1,x2){
//    var largestNumber = '';
//     if(x1>x2){
//         largestNumber = x1;
//         return console.log(largestNumber);
//     }else if(x1<x2){
//         largestNumber = x2;
//         return console.log(largestNumber);
//     }
//     console.log(largestNumber);
// }
//
// max(23, 500);
//

//==============
//Max Of Three
//==============
//
// function maxOfThree(x1,x2,x3){
//     var largestNumber = '';
//     if(x1>x2 && x1>x3){
//         largestNumber = x1;
//         return console.log(largestNumber);
//     }else if(x2>x1 && x2>x3){
//         largestNumber = x2;
//         return console.log(largestNumber);
//     }else if(x3>x1 && x3>x2){
//         largestNumber = x3;
//         return console.log(largestNumber)
//     }else if(x1 == x2 || x1 == x3 || x2 == x3){
//         largestNumber = 'One or more of the numbers are equal to one another';
//         return console.log(largestNumber);
//     }
//     console.log(largestNumber);
// }
//
// maxOfThree(23, 34, 34);


//================
//isVowel
//==============

// function isVowel(x) {
//         if (x.length > 1) {
//             console.log("Only put one letter");
//
//         } else if (x.length == 1) {
//             if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'y') {
//                 console.log( x +" is a vowel!")
//             } else {
//                 console.log("That is a consonant");
//             }
//         }
// }
//
// isVowel('a');

//=============
//Hexadecimal
//=============

// function getRGB(hex){
//     if(hex == '#0000FF'){
//         var rgb = 'rgb(0,0,255)';
//         return console.log(rgb)
//     }else{
//         console.log("This is not a valid color, try blue")
//     }
// }
// getRGB('#0000FF');

//=============
//Hexadecimal Improved
//=============

function getRGB(hex){
    if(hex == '#0000FF'){
        var rgb = 'rgb(0,0,255)';
        return console.log(rgb)
    }
    else if(hex == '#FFFFFF'){
        var rgb = 'rgb(255,255,255)';
        return console.log(rgb)
    }
    else if(hex == '#FF0000'){
        var rgb = 'rgb(255,0,0)';
        return console.log(rgb)

    }
    else if(hex == '#00FF00'){
        var rgb = 'rgb(0,255,0)';
        return console.log(rgb)

    }
    else if(hex == '#000000'){
        var rgb = 'rgb(0,0,0)';
        return console.log(rgb)
    }
    else{
        console.log("This is not a valid color, try blue")
    }
}
getRGB('#00FF00');
