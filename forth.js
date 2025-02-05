const nums=[1,2,3,4,5];
let txt="";    
nums.forEach(fun); 
function fun(value){
    txt+=value+"<br>";
}
document.getElementById("demo").innerHTML=txt;


let str="I am a student of computer science and enginnering";
// for(let x of str){
//     document.getElementById("demo").innerHTML+=x+"<br>";
// }

const letters= new Set();
for (let x of str){
    letters.add(x);
}
for(let x of letters.entries()){
    console.log(x);
}