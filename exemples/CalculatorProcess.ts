import { AbstractProcess } from "../Src/AbstractProcess";
import { AdditionStep, MultiplicationStep, DivisionStep } from "./CalculatorSteps";

export class CalculatorProcess extends AbstractProcess<number> {
    constructor() {
        super();

        let add : AdditionStep = new AdditionStep();
        let multi : MultiplicationStep = new MultiplicationStep();
        let div : DivisionStep = new DivisionStep();

        this.InitialStep = add;

        add.SetNext(multi);
        multi.SetNext(div);
    }
}