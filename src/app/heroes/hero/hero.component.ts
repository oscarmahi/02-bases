import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  //para hacer la interpolación en el template se usan las {{ }}
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {   //para llamar a este no hace falta los (), ya que lo trata como si fuera una propiedad
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {    //para llamar a este, hay q usar las llaves ya q es una propiedad
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

}
