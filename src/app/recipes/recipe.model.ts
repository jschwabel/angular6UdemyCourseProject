import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    // public index: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient [];

    //constructor(index:number, name: string, desc: string, imgPath: string, ing: Ingredient[]) {
    constructor(name: string, desc: string, imgPath: string, ing: Ingredient[]) {
        // this.index=index;
        this.name=name;
        this.description=desc;
        this.imagePath=imgPath;
        this.ingredients=ing;
    }
}