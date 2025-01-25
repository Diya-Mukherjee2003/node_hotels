var prompt = require('prompt-sync')();
let name=prompt("Enter name:")
let guestList=["Shreya","Sudeshna","Annesha","Tanmay","Pitam","Saswata"]
/*let isname=false
for(let i=0;i<guestList.length;i++){
    if(name==guestList[i]){
        isname=true
    }
}
if(isname){
    console.log(`Welcome to the party, ${name}!`)
}
else{
    console.log("Sorry, you're not on the guest list.")
}*/
if (guestList.includes(name)) {
    console.log(`Welcome to the party, ${name}!`);
} else {
    console.log("Sorry, you're not on the guest list.");
}