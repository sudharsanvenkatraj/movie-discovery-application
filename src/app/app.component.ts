import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TmdbServiceTsService } from './core/services/tmdb.service.ts.service';
import { filter } from 'rxjs';

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
    this.tmdbServiceTsService.getUser().pipe(
      filter((item:any)=> item.results)
    ).subscribe((iye)=> console.log("ssss", iye.results))
  }

}
