import { Component, computed, signal } from '@angular/core';


interface Character{
  id:number;
  name:string;
  power:number;
}
@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
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
 this.characters().push(newCharacter);

}
/* powerClasses= computed(()=>{
return {
  'text-danger':true,
};
}); */

}
