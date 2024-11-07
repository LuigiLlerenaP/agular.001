import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-agree-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  @Output()
  public  addCharacter:EventEmitter<Character> = new EventEmitter();
  public character: Character={
    completeName:'',
    power:0,
    abilities:'',
  };

  emitCharacter():void{
    if (this.character.completeName.length === 0 ){return;}
    if (this.character.power <= 0 ){return;}
    this.addCharacter.emit(this.character);
    this.character = {
      completeName:"",
      power: 0 ,
      abilities:'',
    }
  }
}
