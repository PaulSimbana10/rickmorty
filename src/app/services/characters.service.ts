import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  URL: string = 'https://rickandmortyapi.com/api/character';
  characters: Array<any> = []

  constructor() { 
  }
  
  getCharacters = () => fetch(this.URL).then((response)=> response.json())

  getCharacter = async (id: number) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let character:any = await response.json()
    return character;
  };

  getPersonajes=(j: any)=>fetch(j).then((response)=>response.json());
}
