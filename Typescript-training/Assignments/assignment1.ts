
//1. Temperature of a city in degrees Celsius: 25.5

let temp:number = 25.5 ;
console.log (`Temperature of a city in degrees Celsius: ${temp}`);


//2. Whether a customer has placed an order: true or false

let data:boolean = true ;
console.log (`customer has placed an order: ${data}`);


//3. Person's phone number: "123-456-7890"

let phno:string = "123-456-7890" ;
console.log (`Person's phone number: ${phno}`);

// 4. Amount of money in a customer's bank account: 1000.50

let bankacc:number = 1000.50
console.log (`Amount of money in a customer's bank account: ${bankacc}`);

//5. Person's email address: "john.doe@example.com"

let em: string = "john.doe@example.com";
console.log (`Person's email address: ${em}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let loc:number[] = [37.7749 , -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${loc}`);


interface persontemp {
    
     "name" : string,
    "occ" : string,
    "colour" : string,
    "status" : boolean
}  

let persondetails:persontemp ={

    "name" : "Ravi",
    "occ" : "Software Engineering",
    "colour": "Blue",
    "status" : false
}

//7. Person's marital status: true or false

console.log (`Person's marital status: ${persondetails.status}`);

//8. Person's occupation: "Software Engineer"

console.log (`Person's occupation: ${persondetails.occ}`);

//9. Person's favourite colour: "Blue"

console.log (`Person's favourite colour: ${persondetails.colour}`);


//10.Current year: 2023
let currentdate = new Date();

console.log(`Current Year : ${currentdate.getFullYear()-3}`);







