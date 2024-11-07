import { Injectable } from '@angular/core';
import {Character} from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {id: uuid(), completeName: "Goku", power: 1000, abilities: "Kamehameha, Instant Transmission" },
    {id: uuid(), completeName: "Vegeta", power: 950, abilities: "Galick Gun, Final Flash" },
    {id: uuid(), completeName: "Gohan", power: 800, abilities: "Masenko, Potential Unleashed" },
    {id: uuid(), completeName: "Piccolo", power: 750, abilities: "Special Beam Cannon, Regeneration" },
    {id: uuid(), completeName: "Trunks", power: 780, abilities: "Burning Attack, Swordsmanship" }
  ];

  addCharacter(character:Character):void{
    const newCharacter: Character ={
      ...character,
      id: uuid(),
    }
    this.characters.push(newCharacter);
  }
  onDeleteCharacterById(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
