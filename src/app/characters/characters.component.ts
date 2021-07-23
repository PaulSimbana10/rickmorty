import { Lmispersonajes } from './../modelos/lmispersonajes';
import { CharactersService } from './../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: Array<any> = []
  lista: Array<Lmispersonajes> = []
  cont:any = 0;
  constructor(private datos: CharactersService) { }

  ngOnInit(): void {
    this.datos.getCharacters()
      .then(data => {
        this.characters = data.results
        console.log(this.characters)
      });
  }

  favoritocont(id: any, num: number){
      this.datos.getCharacter(id)
        .then(data => {
          var bandera=false
          if (this.lista.length != 0 ){
            for (var i=0 ;i<this.lista.length ; i++ ) {
              if ( this.lista[i].id == id) {
                bandera=true;
                break;
              }
            }
          }

          if(bandera == true){
            console.log("EL dato ya existe en favoritos")
          }else{
            this.lista.push(data)
            this.cont += 1
            console.log(this.lista)
          }
          
        });
  }
  
  eliminar(id: number): void {
    this.datos.getCharacter(id)
        .then(data => {
          this.lista.splice(data, 1)
          console.log(this.lista)
          this.cont -= 1
        });
  }


}
