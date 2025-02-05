const arrowfun=(str)=>{
    let count=0;
    for(let x of str){
        if(x=='a'|| x=='e' || x=='i' || x=='o' || x=='u'){
            count++;
        }
    }
    console.log(count);
};

let str="I am a of computer science student and engineering.I am a student also.\n I am a student who workd";
let find=str.match(/^student/m);
document.getElementById("demo").innerHTML=find;