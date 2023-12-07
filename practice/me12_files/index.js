console.log('Hello Maharathi');
myFunction(3,4);
function myFunction(x,y){
    console.log(y);
    return this;
}

function sum() {
    let sum = 0;
    for (let i=0;i<arguments.length;i+=1) sum += arguments[i];
    return sum;
}
let x = sum(12,23,45,66,78,67);
console.log(x);

let arr = [1,2,3,4,5,6,7];
function sumAll(arr){
    let summ=0;
    for(let i=0;i<arr.length;i++) summ += arr[i];
    return summ;
}
let y = sumAll(arr);
console.log(y);

//alert(y);

const person = {
    fullName: function(city,country) {
      return this.firstName + " " + this.lastName+ " lives in "+city + " which is in "+ country;
    }
};
const person1 = {
    firstName:"John",
    lastName: "Doe"
};
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
};
  
// This will return "John Doe":
console.log(person.fullName.call(person2,"Jamshedpur", "India"));
console.log(person.fullName.apply(person2,["Jamshedpur", "India"]));
console.log(person.fullName);

console.log(Math.max(1,2,4563565654654));
console.log(Math.min(1,2,4563565654654));
console.log(Math.sqrt(25.655));
console.log(Math.ceil(25.00), Math.floor(-25.01), Math.max.apply(null, [1,2,3]),  Math.max.call(Math, 1,2,3), Math.max.apply(0, [1,2,3]));

const persons = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(persons.lastName);
const t = persons;
let b = persons.age;
console.log(b);
t.firstName="Sumit";
console.log(t.firstName);
console.log(persons.firstName);



let ary = Object.values(persons);
console.log(ary);


//Factory Function
function createTriangle(bre, hei){
    const rectangle ={
        breadth : bre,
        height : hei,
        area(){
            console.log(0.5*bre*hei);
        }
    };
    return rectangle;
};
let t1 = createTriangle(20,10);
console.log(t1.height);
t1.area();

//Constructor Function
function Rectangle(length,breadth){
    this.length = length;
    this.breadth = breadth;
    this.area = function(){
        console.log(length*breadth);
    }
}
Rectangle.color = "Aqua";
let r1 = new Rectangle(10,20);
console.log(typeof r1);
let r2 = new Rectangle(30,40);
r1.color = "blue";
console.log(r1);
console.log(r2);

let Rectangle1 = new Function('length', 'breadth', `this.length = length;
this.breadth = breadth;
this.area = function(){
    console.log(length*breadth);
}`);

let rect = new Rectangle1(45,60);
console.log(rect);

let a1 = {value: 10};
let a2 = a1;
a1.value++;
console.log(a1.value);
console.log(a2.value);

