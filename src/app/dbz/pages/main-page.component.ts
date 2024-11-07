import {Component} from '@angular/core';
import {DbzService} from '../services/dbz.service';
import {Character} from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})

export class MainPageComponent {
  constructor(private  dbzServices:DbzService) {
  }

  get characters(): Character[] {
    return [...this.dbzServices.characters];
  }
  onDeleteCharacterById(id: string): void {
    this.dbzServices.onDeleteCharacterById(id);
  }
  addCharacter(character: Character): void {
    this.dbzServices.addCharacter(character);
  }
}
