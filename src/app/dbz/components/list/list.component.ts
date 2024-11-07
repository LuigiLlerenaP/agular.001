import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteById:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
  { completeName: "Frieza",
    power: 1200,
    abilities: "Death Beam, Supernova"
  }]

  onDeleteCharacterById(id?:string):void{
    if (!id) {return};
    this.onDeleteById.emit(id);
  }
}
