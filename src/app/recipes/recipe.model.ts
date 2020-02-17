export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

constructor(name: string, describe: string, imagePath: string) {
  this.name = name;
  this.description = describe;
  this.imagePath = imagePath;
}
}
