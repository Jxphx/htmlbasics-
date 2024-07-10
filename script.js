// to link with index.html
a=5;
var a=9; //change will be reflected everywhere
console.log(a)
let b=20;
console.log(b); // Redeclaration not possible in same block
{
   let b=90; //block1
   console.log(b);
   const t =10;

}
console.log(typeof(b))
var st= 'I am a string';
var d=true;
var m;
console.log(typeof(d));

var arr1=['Orange', 'apple', 10]
console.log(arr1[0])
console.log(arr1.length)
arr1.push('Pinneapple')
console.log(arr1)



//functions
function add(x,y){
        var sum=x+y;

        return sum;
}
var p =add(11,30);
console.log(p);
let     s=1;
let     y=++s;
console.log(s,y)
let e=10;
let q='10';
if (e==q ) {
    console.log('e is equal to s');
    
} else {
    console.log(' e is less than s');
}

//Looping Statements
var array = [1,2,3,4,5]
for (let i = 0; i< array.length; i++) {
    console.log(array[i]);
    
}

    for (const i of array) {
        console.log(i)
        
    }
    
