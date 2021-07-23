import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
    <ul class="navbar navbar-expand-lg navbar-light bg-light">
        <li routerLink="/personajes">
           <a> Personajes </a>
        </li>
        <li routerLink="/ubicacion">
            <a>Ubicaciones</a>
        </li>
        <li routerLink="/episodes">
        <a>episodiso</a>
        </li>
    </ul>
</nav>
  `,
  styles: [ 
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
