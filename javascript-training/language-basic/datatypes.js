//variable -> name of memory location

// data types in js are divided into 2 types

//1. primitive Datatypes - (immutable data types) - original value wont able to change
//2. non - primitive datatypes -(mutuable data types) - original value able to change

//immutable

let a = 10;
a+10;
console.log(a)  // output : will be 10 only.  in line 9 we are doing expression but not assigning to any variable so a will be 10. immuutable wont change


//mutable

let empdata =  {
    "name" : "abc",
    "id" :123
}
empdata.age = 17;
console.log(empdata);


// primitive datatype

//number -> the data type which store with decimal or without decimal
// number does not store in "quotation"

let num1=10;
let num2=10.12;

console.log(typeof num1);
console.log(typeof num2);

//string -> the data type can be store as text, characters, and words
//string should be stored in "" , '' , ``
let firstname = "Ravi";
let lastname = 'Teja';
let role = " 'Lead' QA "

console.log(typeof firstname);
console.log(typeof lastname);
console.log(typeof role);

let empinfo = `emp first name is ${firstname}. emp last name is ${lastname}. emp role is a ${role}`;
console.log (empinfo);

//boolean -> boolean data type will store the  result of  a condition in the form of true or false
let result = 10 > 20 ;

console.log (typeof result);


// undefined  -> a variable is declared but not assigned any value

let empdetails ;
console.log (typeof result);

//  NON - PRIMITIVE DATA TYPE

// object ->  collection of key value pair store together

let empdatadetails =   {

    "name" : "Ravi",
    "id" : 7789,
    "status" : true,
    "address" : {

        "Street" :"113 Westside park",
        "city" :"Newyork",
        "state" : "Telanagana"
    }
}
//method 1: static data method
console.log(empdatadetails)
console.log(empdatadetails.name);
console.log(empdatadetails.address.city);

//method 2: dynamic data method

console.log(empdatadetails["name"]);
console.log(empdatadetails["address"]["city"]);



// Array - > it is data type that can store list of values together at one place

let fruits = ["Apple","Banana","Mango","Grapes"];
let prices = [200 , 100 , 150 , 120];

let fruitsAndPrices = ["Apple" , 200 , "Banana" , 100 , "Mango" , 150 , "Grapes" , 120];

//accessing the data from arrays

console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[2]);


// function => function is a data type that represents block of code or collection of statements written together to complete a specific task

// set -> set is data type that represent  a collecction of unique values of any data type
let empid = new Set();
empid.add(1);
empid.add(2);
empid.add(3);
empid.add(2);
console.log(empid);  //o/p : 1 , 2 , 3


//map : map is data type that represent the collection of  key-value pairs, 
// where key and value can be any data type, but key should be unique

let empData = new Map()
empData.set(1234,"Bharath");
empData.set(1235,"Bharath");
empData.set(1236,"Ravi");
empData.set(1236,"teja");

console.log(empData);


// Date -> date represent date and time 

let currentdate = new Date();
console.log(currentdate);

//get current date
console.log(currentdate.getDate());
//current month
console.log(currentdate.getMonth()+1);
//current year
console.log(currentdate.getFullYear());
// current hour
console.log(currentdate.getHours());
//current min
console.log(currentdate.getMinutes());
//current day
console.log(currentdate.getDay()+1);


//symbol -> symbol data types represents a unique hidden identifier inside an object

let countryoforigin = Symbol();
let productinfo = {
    "name" : "iphone",
    "model" : "17 pro max",
    [countryoforigin]: "china"
}




