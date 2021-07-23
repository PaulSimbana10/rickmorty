import { CharactersService } from './../../services/characters.service';
import { EpisodesService } from './../../services/episodes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  unEpisodio: any;
  Personajes: Array<any>=[];

  constructor(private traer: ActivatedRoute, private dato: EpisodesService, private datoper: CharactersService) { }

  ngOnInit(): void {
    this.traer.params.subscribe((params) => {
      let { id } = params;
      this.dato.getEpisodio(id).then((episode) => {
        this.unEpisodio = episode
        console.log(this.unEpisodio.characters[1]);
        let  urlCapitulos = this.unEpisodio.characters;
        for (let j = 0; j < urlCapitulos.length; j++) {  
          this.datoper.getPersonajes(this.unEpisodio.characters[j]).then(data =>{
            this.Personajes[j]=data
            console.log(this.Personajes);
          });
        } 
      })
    })
  }

}
