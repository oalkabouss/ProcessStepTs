import { IStep } from "./Interfaces/IStep";

export abstract class AbstactStep<TObject> implements IStep<TObject>{

  private Next!: AbstactStep<TObject>;

  public Process(Object: TObject): TObject {
    if (this.HasNext()) return this.Next.Process(Object);
    else
      return Object;
  }

  public SetNext = (Step: AbstactStep<TObject>): void => {
    this.Next = Step;
  };

  private HasNext = (): Boolean => this.Next !== undefined;
}