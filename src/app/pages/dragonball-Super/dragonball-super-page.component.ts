import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../dragonball/dragonball-page/character-lis/character-lis.component";
import { DragonballPageComponent } from "../dragonball/dragonball-page/dragonball-page.component";
import { CharacterAddComponent } from '../dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';
interface Character{
  id:number;
  name:string;
  power:number;
}
@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})


export class DragonballSuperPageComponent {

 public dragonballService = inject(DragonBallService);

}
