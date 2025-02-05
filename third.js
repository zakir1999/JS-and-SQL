let sum=0;
let i=0;
while(i<10){
    sum+=i;
    i++;
}
console.log(sum);
let str="Hello World";

const person={
    userName:"@zakir1999",
    countFlowers:100,
    countFlowing:200,
    isFollow:true,
    numberPost:100,
    occupation:"Student",
    details:"I am a student of Computer Science and Engineering",

}
for(let key in person){
    if(person[key]=="@zakir1999"){
    let txt=person[key].replace("@zakir1999","Tonima");
    console.log(txt);

    }
    console.log(key,person[key]);
    
}

let text="Please locate where 'locate' occurs!";
let index=text.lastIndexOf("locate");
console.log(index);

