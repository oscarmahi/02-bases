import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';    // lo de v4 as uuid, es para llamarlo en vez de como v4(), lo hago como uuid()

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  // public onNewCharacter( c : Character): void {
  //   c.id = uuid();
  //   this.characters.push( c );
  // }

  public addCharacter( character : Character): void {
    const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push( newCharacter );
  }

  /**
   * Esto sería para q borrara si se trata de un array
   * @param id
   */
  // public onDeleteCharacter( id: number): void {
  //   this.characters.splice( id, 1 );
  // }


  /**
   * Este sería para borrar el elemento don el id paasdo como parámetro
   * @param id
   */
  public deleteCharacterById(id: string){
    this.characters = this.characters.filter( item => item.id !== id);
  }



};
