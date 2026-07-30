//Typescript : it is superset of JS

// syntax to store the data -> Declaration variable : DATATYPE = Data ;


// primitive datatypes :
// Non Primitive datatypes:


// Primitive data types:

//number -> the data type which store with decimal or without decimal
// number does not store in "quotation"

let num1:number = 10;
let num2:number = 10.12;

console.log(typeof num1);
console.log(typeof num2);

//string -> the data type can be store as text, characters, and words
//string should be stored in "" , '' , ``
let firstname: string = "Ravi";
let lastname: string = 'Teja';
let role: string = " 'Lead' QA "

console.log(firstname);
console.log(lastname);
console.log(role);

let empinfo = `emp first name is ${firstname}. emp last name is ${lastname}. emp role is a ${role}`;
console.log (empinfo);

//boolean -> boolean data type will store the  result of  a condition in the form of true or false
let result:boolean = 10 > 20 ;

console.log (result);

// undefined  -> a variable is declared but not assigned any value

let empdetails:undefined ;
console.log (empdetails);

//null => Null Represents a variable that has been declared and assigned a null value intentionally
 let salary:null = null;
 console.log(salary);


 // union => union represents more than one data type within the variable
 let empaddress : string | number = "Hyderabad";
   console.log (empaddress);
   empaddress = 500081;
   console.log (empaddress);

 // any => any data type is allowed with in the variable.  (when we are going to use any, type safety it will be removed. (literally it become same as JS))

 let data : any  = "bharath";
 data = 1234;
 data = true;  // see it is allowing any data type not showing any warning or error

 // Non Primitive data types:

 // object ->  collection of key value pair store together
 //interface -> template of object

 interface empdata {
    
     "name" : string,
    "id" : number,
    "status" : boolean,
    "address" : {

        "Street" : string,
        "city" : string,
        "state" : string
    }
}

 

let empdatadetails:empdata =   {

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

let fruits: string[] = ["Apple","Banana","Mango","Grapes"];
let prices: number[] = [200 , 100 , 150 , 120];

let fruitsAndPrices :(number | string) []= ["Apple" , 200 , "Banana" , 100 , "Mango" , 150 , "Grapes" , 120];

//accessing the data from arrays

console.log(fruits[0]);
console.log(prices[1]);
console.log(fruitsAndPrices[2]);


//tuples in TS-> tuple is an ordered array in ts

// problem statement : store employe name , emp id and visa status within the array

// array

let arrdata : (number | string | boolean) [] = ["Ravi" , 123 , true];
console.log(arrdata);

//tuple:

let tupdata : [string,number,boolean] = ["Ravi" , 123 , true]  // should follow order
console.log(tupdata);


// function => function is a data type that represents block of code or collection of statements written together to complete a specific task

function loginintoapplication (browser:string , url:string) :void {

    console.log(`launch the ${browser} browser`);
    console.log(`Enter the url : "${url}"`);
    console.log("Enter username as 'Ravi' and Password as 'Ravi123'");
    console.log("click on login button")
}

function logoutapplication() : void {
 console.log("logout from application");
 console.log("close the browser");
}

 function getAccountBalance() : number {
    console.log ("Navigate to the account balance page");
    let accountbalance : number= 10000;
    return accountbalance;
 }


 function fail() : never {
  throw new Error ("This function will never return any value");
}

// set -> set is data type that represent  a collecction of unique values of any data type
let empid: Set<number>= new Set();
empid.add(1);
empid.add(2);
empid.add(3);
empid.add(2);
console.log(empid);  //o/p : 1 , 2 , 3


//map : map is data type that represent the collection of  key-value pairs, 
// where key and value can be any data type, but key should be unique

let empData : Map<number,string> = new Map()
empData.set(1234,"Bharath");
empData.set(1235,"Bharath");
empData.set(1236,"Ravi");
empData.set(1236,"teja");

console.log(empData);





