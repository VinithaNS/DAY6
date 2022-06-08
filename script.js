// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops
// Write a code to print the numbers in the array
// Output: 1234567891011
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0;i<11;i++) {
//  new_string+=numsArr[i] ; 
 
// }
// console.log(new_string);
// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
var new_string =numsArr.toString();
 for (var i = 0; i < 11; i++) {
 
}
console.log(new_string);
// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var newNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <newNum.length; i++) {
 if(newNum[i] %2 == 0 )
 {
 newNum[i]="even";
 }
}
console.log(newNum);
// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i] %2==1 )
 {
 numsArr[i] ="even";
 }
}
console.log(numsArr);
// Write a code to add all the numbers in the array
// Output: 66
var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
sum += numsArr1[i]
}
console.log(sum);
// Write a code to add the even numbers only
// Output: 30
var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <numsArr2.length; i++) {
 if(numsArr2[i]%2==0){
 sum1 += numsArr2[i];
 }
}
console.log(sum1);
// Write a code to print elements in the inner arrays
// Output: 1234567891011
var numsArr4= [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr4.length; i++) {
 var inner_array = numsArr4[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j];
 }
}
console.log(str_all);
// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j];
 }
 else
 {
 sum_even += inner_array[j];
 }
}
}
console.log(sum_odd);
console.log(sum_even);
// GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript
alert("I'm invoked!");



alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working
// Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin );
// Fix the below to alert hello Guvi geek
let frname=10.5; 
frname = "Guvi";
laname = "geek"
let name = frname+laname;
alert( name );

// Fix the below to alert sum of two numbers
let a = prompt(1);
let b = prompt(2);
alert(a + b);

// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var c = 2 > 12;
if (c) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
 // a should be changed string to numberlet value = 4;
//  How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}

// value should be change

  // // Fix the code to give the below output:
// Expected Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}

var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[];
var new_object={};
while(array.length!=0){
  final.push(new_object)

 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0];
 var result =inner_remove[1];
 new_object[key]=result;
 
 }
final.push(new_object)
 
}
console.log(final)
