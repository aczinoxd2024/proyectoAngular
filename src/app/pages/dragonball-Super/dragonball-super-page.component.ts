import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from "../dragonball/dragonball-page/character-lis/character-lis.component";
import { DragonballPageComponent } from "../dragonball/dragonball-page/dragonball-page.component";
import { CharacterAddComponent } from '../dragonball/character-add/character-add.component';
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
characters=signal<Character[]>([

  {id:1,name:'Goku',power:9001},
  {id:2,name:'Vegeta',power:9000},

]);

name=signal('');
power=signal(0);

addCharacter(){
 if (!this.name() || !this.power() || this.power()<=0) {
  return ;

 }
 const newCharacter:Character={
id:this.characters().length+1,
name:this.name(),
power:this.power(),
 };
 /* this.characters().push(newCharacter); */
 console.log({newCharacter});
 this.resetFields();
}
resetFields(){
  this.name.set('');
  this.power.set(0);
}
/* powerClasses= computed(()=>{
return {
  'text-danger':true,
};
}); */

}
