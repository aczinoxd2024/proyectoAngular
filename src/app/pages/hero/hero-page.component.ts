import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal, ɵsetCurrentInjector } from "@angular/core";


@Component({
templateUrl: './hero-page.component.html',
imports: [UpperCasePipe]
})

export class HeroPageComponent{

  name = signal<string>('Ironman');
  age = signal<number>(45);


  heroDescription=computed(()=>{

const descripcion =`${this.name()}- ${this.age()}`;
return descripcion;
  });

capitalizedName= computed(()=>this.name().toUpperCase());
getHeroDescription(): string {
  return `${this.name()} - ${this.age()} años`;
}
changeHero(){
  this.name.set(`Spiderman`);
  this.age.set(22);
}
resetForm(){
  this.name.set(`Ironman`);
  this.age.set(45);
}
changeAge(){
  this.age.set(60);
}
}
