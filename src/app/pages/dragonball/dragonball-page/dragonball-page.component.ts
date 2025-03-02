import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../components/shared/navbar/navbar.component';
import { NgClass } from '@angular/common';

interface Character{
  id:number;
  name:string;
  power:number;
}
@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
characters=signal<Character[]>([

  {id:1,name:'Goku',power:9001},
  /* {id:2,name:'Vegeta',power:8001},
  {id:3,name:'Picoro',power:91},
  {id:4,name:'Yamcha',power:5000}, */
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
