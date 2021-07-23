import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  URL: string = 'https://rickandmortyapi.com/api/location';

  constructor() { }

  getLocalizaciones = () => fetch(this.URL).then((response)=> response.json())

  getLocalizacion = async (id: number) => {
    let response: Response = await fetch(`${this.URL}/${id}`);
    let episodio:any = await response.json()
    return episodio;
  };

  getLocalizacionNuv=(j: any)=>fetch(j).then((response)=>response.json());
}
