#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 100000; //dollars
var myPin = 1234;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "Q1",
        message: "Enter your pin: ",
        type: "number"
    }
]);
if (pinAnswer === myPin) {
    console.log("Correct pin code!!!");
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "Select any option.",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "Enter your amount: ",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your current balance is now: " + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is " + myBalance);
    }
}
else {
    console.log("Incorrect pin number.");
}
