import { LocationsService } from './../services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  localizacion: Array<any> = []
  constructor(private datos: LocationsService) { }

  ngOnInit(): void {
    this.datos.getLocalizaciones()
    .then(data => {
      this.localizacion = data.results
      console.log(this.localizacion)
    });
  }

}
