#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

let res = await inquirer.prompt(
    {
        name: "userinput",
        type: "number",
        message: "Please Enter Time",
        validate: (input)=>{
            if (isNaN(input)){
                return "Please Enter a Valid Number"
            }
            else if (input>60){
                return "Please Enter a Number b/w (1 - 60)"
            }
            else{
                return true;
            }
        }
    }
)
let input = res.userinput;
function setTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val+2 )
    const intervalTime = new Date(intTime);
    setInterval(()=>{
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime,currentTime);
        if (timeDiff <=0){
            console.log(`00:00
Timer Has stoped`);
            process.exit();
        }
        const min = Math.floor((timeDiff%(3600*24))/3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        
    }, 1000);
}
setTime(input)

