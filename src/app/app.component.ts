import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TmdbServiceTsService } from './services/tmdb.service.ts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie_discovery';
  constructor(private tmdbServiceTsService: TmdbServiceTsService ){
    this.fuv()
  }
  // private apiService = inject(TmdbServiceTsService);


  fuv(){
    this.tmdbServiceTsService.getUser().subscribe((iye)=> console.log("sss", iye))
  }

}
