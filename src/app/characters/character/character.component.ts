import { EpisodesService } from './../../services/episodes.service';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: any;
  Episodios: Array<any>=[];
  constructor(private traer: ActivatedRoute, private service: CharactersService, private datoepisod: EpisodesService) {
    const id = this.traer.snapshot.params.id
   }

  ngOnInit(): void {
      this.traer.params.subscribe((params) => {
        let { id } = params;
        this.service.getCharacter(id).then((personaje) => {
          this.character = personaje
          console.log(this.character.episode[1]);
          let  urlCapitulos = this.character.episode;
          for (let j = 0; j < urlCapitulos.length; j++) {  
            this.datoepisod.getEpisodesNuv(this.character.episode[j]).then(data =>{
              this.Episodios[j]=data
              console.log(this.Episodios);
            });
          } 
        })
      })
  }
}