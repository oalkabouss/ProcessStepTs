export interface IStep<TObject> {
    Process(Obect: TObject): TObject;
}