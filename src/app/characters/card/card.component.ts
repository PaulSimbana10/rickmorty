import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>
    <p><img src="{{items.image}}" alt="" width="100%" height="200"></p>
            <p>Nombre: {{items.name}}</p>
            <p>Especie: {{items.species}}</p>
            <p>Tipo: {{ items.type }}</p>
            <p>Genero: {{ items.gender }}</p>
            <p>Nombre_Origen: {{ items.origin.name }}</p>
            <p>Localizacion: {{ items.location.name }}</p>
            <p><a [routerLink] = "['/personaje', items.id]">Leer mas >>>></a></p>
</div>
  `,
  styles: [
  ]
})
export class CardComponent{
  @Input() 
  items: any;


}
