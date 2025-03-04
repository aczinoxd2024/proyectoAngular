import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { JsonPipe } from '@angular/common';


const loadFromLocalStorage =(): Character[]=>{
const Characters = localStorage.getItem('characters');
  return Characters ? JSON.parse(Characters):[];
}
@Injectable({ providedIn :'root'})
export class DragonBallService {
    characters=signal<Character[]>(
      loadFromLocalStorage()
    );

saveToLocalStorage =effect(()=>{
localStorage.setItem('characters', JSON.stringify(this.characters()));
});

    addCharacter(character:Character){
      this.characters.update((list)=>[... list,character]);


    }

}
