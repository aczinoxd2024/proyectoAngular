import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-lis.component.html',

})
export class CharacterListComponent {
characters=input.required<Character[]>()
listName=input.required<string>();

}
