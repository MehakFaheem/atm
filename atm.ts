#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance = 100000; //dollars
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        {
        name: "Q1",
        message: "Enter your pin: ",
        type : "number"
        }
    ]
)
if (pinAnswer === myPin)
    {
        console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt(
            [
                {
                    name : "operation",
                    message : "Select any option.",
                    type : "list",
                    choices: ["Withdraw", "Check Balance"]
                }
            ]
        );
        if (operationAns.operation === "withdraw")
            {
                let amountAns = await inquirer.prompt(
                    [
                        {
                            name : "amount",
                            message : "Enter your amount: ",
                            type : "number"
                        }
                    ]
                );
                myBalance -= amountAns.amount;
                console.log("Your current balance is now: " + myBalance); 
            }   
            else if(operationAns.operation === "Check Balance")  
                {
                    console.log("Your balance is " + myBalance);
                    
                }  
    }
else {
    console.log("Incorrect pin number.");
    
}


