const fruits=[{name:'apple',quantity:12},{name:'banana',quantity:10},{name:'cherry',quantity:5}];
function myCallback({quantity}){
    return quantity>10?"OK":"Low";
}
const res=Map.groupBy(fruits,myCallback);
let txt="These fruits are Ok:<br>";
for(let x of res.get("OK")){
    txt+=x.name+"<br>";
}
txt+="These fruits are Low:<br>";
for(let x of res.get("Low")){
    txt+=x.name+"<br>";
}
document.getElementById("demo").innerHTML=txt;
console.log(res.get("OK"));
