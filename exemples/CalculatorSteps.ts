import { AbstactStep } from "../Src/AbstactStep";

export class AdditionStep extends AbstactStep<number> {
    public Process = (Object: number): number => {
        Object = Object + Object;
        return super.Process(Object);
    };
}

export class MultiplicationStep extends AbstactStep<number> {
    public Process = (Object: number): number => {
        Object = Object * Object;
        return super.Process(Object);
    };
}

export class DivisionStep extends AbstactStep<number> {
    public Process = (Object: number): number => {
        Object = Object / 2;
        return super.Process(Object);
    };
}