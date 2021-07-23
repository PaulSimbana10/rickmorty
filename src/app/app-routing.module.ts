import { EpisodeComponent } from './episodes/episode/episode.component';
import { CharacterComponent } from './characters/character/character.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';
import { LocationComponent } from './locations/location/location.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    component: CharactersComponent
  },
  {
    path: 'personaje/:id',
    component: CharacterComponent
  },
  {
    path: 'ubicacion',
    component: LocationsComponent
  },
  {
    path: 'location/:id',
    component: LocationComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {
    path: 'episode/:id',
    component: EpisodeComponent
  },
  {
    path:'**',
    redirectTo:'personajes'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
