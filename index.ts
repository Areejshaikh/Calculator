import { log } from "console";
import { AnkrProvider } from "ethers";
import inquirer from "inquirer";

const user_input = await inquirer.prompt([
  { message: " Enter first namber", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message:"Select one of the operation",
    type :"list",
    name: "operator",
    choices: ["Addition","Multiplication","Division","Subturction"]
  },
 
  
]);
// console.log(user_input);

//condition Statement
if (user_input.operator === "Addition") {
    console.log(user_input.firstnumber + user_input.secondnumber);
}else if (user_input.operator === "Multiplication" ){
    console.log(user_input.firstnumber * user_input.secondnumber)
}else if (user_input.operator === "Division" ){
    console.log(user_input.firstnumber / user_input.secondnumber)
}else if (user_input.operator === "Subturction" ){
    console.log(user_input.firstnumber - user_input.secondnumber)
}else {
    console.log("Invalid number");
    
}
