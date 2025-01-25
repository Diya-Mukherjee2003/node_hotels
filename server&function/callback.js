function Callback(){
  console.log("Larning callback");
}
var add=(a,b,Callback)=>{
    let result=a+b;
    console.log("Result:"+result);
    Callback();
}
add(36,64,Callback)
const res=(a,b,Diya)=>{
 var ret=a*b;
 console.log(ret)
 Diya();
}
/*res(6,9,function() {
    console.log("done...")
})*/
res(6,9,() =>{console.log("done...")})