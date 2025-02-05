const store=new Map([['Apple',10],['Banana',20],['Orange',30],['Mango',40],['Pineapple',50],['Grapes',60],['Guava',70],['Papaya',80],['Watermelon',90],['Pomegranate',100]]);
// for(let x of store){
//     console.log(x);
// }
store.set('Strawberry',110);
// for(let x of store){
//     console.log(x);
// }

function sum(a,b){
    return a+b;
}
const arrowsum=(a,b)=>{
    console.log(a+b);
};