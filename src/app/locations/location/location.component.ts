import { CharactersService } from './../../services/characters.service';
import { LocationsService } from './../../services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  unalocalizacion: any;
  Personajes: Array<any>=[];

  constructor(private traer: ActivatedRoute, private dato: LocationsService, private datoper: CharactersService) { }

  ngOnInit(): void {
    this.traer.params.subscribe((params) => {
      let { id } = params;
      this.dato.getLocalizacion(id).then((episode) => {
        this.unalocalizacion = episode
        console.log(this.unalocalizacion.residents[1]);
        let  urlCapitulos = this.unalocalizacion.residents;
        for (let j = 0; j < urlCapitulos.length; j++) {  
          this.datoper.getPersonajes(this.unalocalizacion.residents[j]).then(data =>{
            this.Personajes[j]=data
            console.log(this.Personajes);
          });
        } 
      })
    })
  }

}
