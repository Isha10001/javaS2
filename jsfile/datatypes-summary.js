// Interview Question
 
/*How data is stored and accessed in memory?
 Answer--2types Of categories -- 

 ---Primitive Data Types--  For ex- 
       7types--
  string,- const score =100

  Number- scoreValue = 200.7

   Boolean- isLoggedIn=false

   null,-outSideTemp=null (always empty)

    undefined,- let  userName;

    Symbol,-  const id= Symbol ('124') -- unique value
               const anotherId  = Symbol('124')
        console.log(id===anotherId);
        
    BigInt- bigNumber=7894568879413349n

--USE ECam Doc



*/

// --- NonPrimitive data Types (Reference)

//Array-  
const  heros = ["vivo","oppo","doga"];
// Objects
// let myObj ={
//     name: ="isha",
//     age:20,
// }
// Function
const myFunction = function(){
//     console.log("hello world");
    
}
// console.log( typeof myFunction);
 



// ++++++++++++++++++++++++++++Memory++++++++++++++//

// stack(primitive)  ---- jab bhi koi value legai toh stack ke under do uska copy hi milta hai 
// , heap(non Primitive ) -- esmai humsa refernce milta hai means (orignal value hi milta hai)

let  mynameIsha ="happy"
let anothername = mynameIsha
anothername= "khushi"
console.log(mynameIsha);
console.log(anothername);

  let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"

  }
   let userTwo = userOne

   userTwo.email ="happy@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


