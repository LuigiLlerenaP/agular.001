import { Component } from '@angular/core';

interface Hero {
  heroName: string;
  realName: string;
  age: number;
}

const heroes: Hero[] = [
  { heroName: 'Spider-Man', realName: 'Peter Parker', age: 25 },
  { heroName: 'Batman', realName: 'Bruce Wayne', age: 34 },
  { heroName: 'Iron Man', realName: 'Tony Stark', age: 45 },
  { heroName: 'Wonder Woman', realName: 'Diana Prince', age: 30 },
  { heroName: 'Superman', realName: 'Clark Kent', age: 35 },
  { heroName: 'Captain America', realName: 'Steve Rogers', age: 102 },
  { heroName: 'Thor', realName: 'Thor Odinson', age: 1500 },
  { heroName: 'Hulk', realName: 'Bruce Banner', age: 40 },
  { heroName: 'Flash', realName: 'Barry Allen', age: 28 },
  { heroName: 'Green Lantern', realName: 'Hal Jordan', age: 36 },
  { heroName: 'Black Widow', realName: 'Natasha Romanoff', age: 36 },
  { heroName: 'Aquaman', realName: 'Arthur Curry', age: 38 },
  { heroName: 'Doctor Strange', realName: 'Stephen Strange', age: 45 },
  { heroName: 'Black Panther', realName: 'TaChalla', age: 38 },
  { heroName: 'Deadpool', realName: 'Wade Wilson', age: 34 },
  { heroName: 'Ant-Man', realName: 'Scott Lang', age: 38 }
];

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] // Cambia a styleUrls
})
export class ListComponent {
  private _titleHero: string = "List Heroes";
  private _heroes: Hero[] = heroes;
  private _totalHeroes: number = heroes.length;
  private _totalHeroesDelete: number = 0;
  private _deleteHero?: Hero;

  get titleHero(): string {
    return this._titleHero;
  }

  get totalHeroesDelete(): number {
    return this._totalHeroesDelete;
  }

  set totalHeroesDelete(value: number) {
    this._totalHeroesDelete = value;
  }


  get heroes(): Hero[] {
    return this._heroes;
  }

  get totalHeroes(): number {
    return this._totalHeroes;
  }

  set totalHeroes(value: number) {
    this._totalHeroes = value;
  }

  get deleteHero(): Hero | undefined {
    return this._deleteHero;
  }

  set deleteHero(value: Hero | undefined) {
    this._deleteHero = value;
  }

  removeLastHero(): void {
    const removedHero: Hero | undefined = this.heroes.pop();
    if (!removedHero) return;
    this.deleteHero = removedHero;
    this.totalHeroes = this.heroes.length;
    this.totalHeroesDelete++;
  }

  addNewHero(): void {
    this.heroes.push({ heroName: 'Green Arrow', realName: 'Oliver Queen', age: 35 });
    this.totalHeroes = this.heroes.length;
  }
}
