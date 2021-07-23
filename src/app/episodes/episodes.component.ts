import { EpisodesService } from './../services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodios: Array<any> = []

  constructor(private datos: EpisodesService) { }

  ngOnInit(): void {
    this.datos.getEpisodios()
    .then(data => {
      this.episodios = data.results
      console.log(this.episodios)
    });
  }

}
