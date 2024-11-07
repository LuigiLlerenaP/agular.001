import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _heroName: string = 'SPIDER-MAN';
  private _realName: string = 'Peter Parker';
  private _age: number = 25;


  get heroName(): string {
    return this._heroName;
  }

  set heroName(value: string) {
    this._heroName = value;
  }

  get realName(): string {
    return this._realName;
  }

  set realName(value: string) {
    this._realName = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  capitalizedName(value:string): string {
    if (!value){
      return '';
    }
    return  value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  descriptionHero(): string {
    return `- ${this._heroName} | ${this._realName} | ${this._age} -`;
  }

  changeNameHero():void{
    this.heroName ="BATMAN"
    this.realName="Bruce Wayne"
  }
  changeAgeHero():void{
    this.age=34;
  }
  restValues():void{
    this.heroName ="SPIDER-MAN";
    this.realName ="Peter Parker";
    this.age=34;
  }
}
