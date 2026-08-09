// TASK 1

const collegeName = "Malla Redyy College of Engineering";
let studentName = "Tharun";
var studentAge = 23;

console.log(collegeName);
console.log(studentName);
console.log(studentAge);


// TASK 2

let price = 25000;
price = 27000;
console.log(price);


// Tak 3

let companyname = "stackly"


companyname = "Google";

console.log(companyname);

// Task 4

console.log("Login Successful");

console.warn("Password is Weak");

console.error("Network Error");

// Task 5

let name = "Tharun";
let age = 20;
let isDeveloper = true;
let uninitialized;


console.log(name, typeof name);
console.log(age, typeof age);
console.log(isDeveloper, typeof isDeveloper);
console.log(uninitialized, typeof uninitialized);

// Task 6 

let cart = ["Laptop", "Mouse", "Keyboard", "Headset", "Monitor"];

console.log("First product:", cart[0]);
console.log("Third product:", cart[2]);
console.log("Last product:", cart[cart.length - 1]);

// Task 7 

let movies = ["mirchi", "darling", "billa", "sahoo", "bahubali", "salaar"];

console.log("second movie:", movies[1]);
console.log("fifth movie;", movies[4]);
console.log("last movie:", movies[movies.length - 1]);

// Task 8 


const employee = {
    name: "Tharun",
    age: 22,
    department: "IT",
    skills: ["JavaScript", "HTML", "CSS"],
    salary: 30000
};


console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("First Skill:", employee.skills[0]);
console.log("Salary:", employee.salary);

// Task 9


const product = {
    productName: "Laptop",
    brand: "Dell",
    price: 55000,
    colors: ["Black", "Silver", "Blue"]
};


console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Second Color:", product.colors[1]);


// Task 10


let num1 = 20;
let num2 = 5;



console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);



// Task 11


let a = 5;

a++;
console.log("After a++:", a);

++a;
console.log("After ++a:", a);

a--;
console.log("After a--:", a);

--a;
console.log("After --a:", a);


// Task 12 


let b = 10;

let c = b++;   // c = 10, then b becomes 11

let d = ++c;   // c becomes 11, then d = 11

console.log(b);
console.log(c);
console.log(d);


// Task 13


let x = 7;

let y = --x;   // x becomes 6, y = 6

let z = y++;   // z = 6, then y becomes 7

console.log(x);
console.log(y);
console.log(z);


// Task 14



const school = {
    schoolName: "KAKATIYA High School",
    principal: "Mr. RAJU Sir",
    totalStudents: 250,
    classes: ["Class 8", "Class 9", "Class 10"]
};


console.log("School Name:", school.schoolName);
console.log("Principal:", school.principal);
console.log("Last Class:", school.classes[school.classes.length - 1]);


// Task 15




const groceries = ["Rice", "oil" , "wheat" , "Bread", "Eggs", "sugar", "salt", "Tea powder"];


console.log("First Item:", groceries[0]);
console.log("Fourth Item:", groceries[3]);
console.log("Last Item:", groceries[groceries.length - 1]);


// Task 16


let username = "Tharun";
let email = "tharun0580@gmail.com";
let Userage = 22;
let isPremium = true;

console.log("Username:", username, "| Datatype:", typeof username);
console.log("Email:", email, "| Datatype:", typeof email);
console.log("Userage:", Userage, "| Datatype:", typeof Userage);
console.log("IsPremium:", isPremium, "| Datatype:", typeof isPremium);



// Task 17


var j = 10;
let k = 20;
const l = 30;

// Reassign
j = 15;   // Allowed
k = 25;   // Allowed
// l = 35;   // Error: Assignment to constant variable

// Redeclare
var j = 100;  // Allowed
// let k = 200;  // Error: Identifier 'b' has already been declared
// const l = 300; // Error: Identifier 'c' has already been declared

console.log("var j:", j);
console.log("let k:", k);
console.log("const l:", l);


// Task 18


let tamil = 85;
let english = 90;
let maths = 95;

// Calculate Total
let total = tamil + english + maths;

// Calculate Average
let average = total / 3;

// Print results
console.log("Total:", total);
console.log("Average:", average);


// Task 19



const company = {
    employees: ["Tharun ", "naveen", "susmitha m", "Sneha"],
    location: "salem",
    foundedYear: 2015,
    CEO: "D nishanth"
};




console.log("CEO:", company.CEO);
console.log("Location:", company.location);
console.log("First Employee:", company.employees[0]);



// Task 20



const profile = {
    name: "Tharun",
    city: "Hyderabad",
    hobbies: ["Cricket", "Reading", "Gaming"],
    age: 22
};


console.log("Name:", profile.name);
console.log("Second Hobby:", profile.hobbies[1]);
console.log("Age:", profile.age);







