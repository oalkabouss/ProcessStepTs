import { IProcess } from "./Interfaces/IProcess";
import { IStep } from "./Interfaces/IStep";

export abstract class AbstractProcess<TObject> implements IProcess<TObject>{
    
    protected InitialStep!: IStep<TObject>;
    
    Start(Object: TObject): TObject {
        if(this.InitialStep === undefined)
        throw new Error("InitialStep is not set.");

        return this.InitialStep.Process(Object);
    }
}