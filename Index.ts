import { CalculatorProcess } from "./exemples/CalculatorProcess";

let process: CalculatorProcess = new CalculatorProcess();

let result: number = process.Start(10);

console.log(result);