import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  URL: string = 'https://rickandmortyapi.com/api/episode';

  constructor() { }

  getEpisodios = () => fetch(this.URL).then((response)=> response.json())

  getEpisodio = async (id: number) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let episodio:any = await response.json()
    return episodio;
  };

  getEpisodesNuv=(j: any)=>fetch(j).then((response)=>response.json());

}
