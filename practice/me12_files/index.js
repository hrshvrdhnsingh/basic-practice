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
console.log(a2.value);

let a = [1,2,3,4];
a.splice(2,2,'a','b','c');
console.log(a);
console.log(a.includes(3));

/* let partners = [
    {age:18, naam:'Kritika'},
    {age:23, naam:'Ashna'}
];

let partner = partners.find(function(part) {
    return part.age===18;
})
console.log(partner);
let partner2 = partners.find(part => part.age==23); */
//console.log(partner2); 

a.splice(0,a.length);
console.log(a);

let ar = [12,0,3,23,50,47];
let a3 = ar.slice(2,4);
console.log(a3);
console.log(ar);

ar.forEach(function(number){
    number*=10;
    console.log(number);
});
console.log(ar);
//Can only make difference when a condition is met inside the block
let ner = ar.filter(number=> {
    console.log(number**2); return "studentno."+number;
});

console.log(ner);

let items = ar.map(function(number){
    return "studentno."+ number;
})

//console.log(items);




function sum(a,b=5){
    return a+b;
}

console.log(sum(11));
function mev(){
    console.log("clicking");
}
document.addEventListener("click",mev);
//document.removeEventListener("click", mev);

let myDiv = document.createElement('div');
for(let i=0;i<20;i++){
    let newEl = document.createElement('p');
    newEl.textContent = "this is para"+ i;
    newEl.addEventListener("click", function(event){
        console.log('Clicked on para');
    });
    myDiv.appendChild(newEl);
}
document.appendChild(myDiv);