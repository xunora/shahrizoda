
// username = window.prompt("hey bro what is your name");
// let job;
// job = window.prompt("What is your managment");

// window.alert(`Welcome buddy, ${username}. you are ${job}`)


/* //  console.log(prompt("hello mostona"))
var name = prompt("hey")
var any_of_my_variable = 123445454456;
document.write(name)
console.log(any_of_my_variable);
alert("hey be caarefull THE END IS NEAR")
*/

// document.write(name)

// var a;
// console.log(a)


// var namee = prompt('?')
// console.log(namee <= '50')
var agee = 72
var namee = "Vladimir Putin";
var Jobb = "Prisident";
var religionn = "christan";
var firstJobb = "KGB";
var schooll = "BaskovLane"; 
var countryy = "Russia";


var Myobject = {
    age: agee,
    name: namee,
    Job: Jobb,
    religion: religionn,
    firstJob: firstJobb,
    school: schooll, 
    country: countryy,
    getInfo: function () {
        console.log( "i have" + this.name + "water")
    }


 }
 
 
 var object = prompt(
    "select category info: name, age, Job, religion, fristJob, school, Country"
 );
 //console.log(Myobject [object]);
 if (object == 'getInfo') {
    Myobject.getInfo();
 }
 

