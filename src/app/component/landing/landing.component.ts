import { Component } from '@angular/core';
import { TmdbServiceTsService } from '../../core/services/tmdb.service.ts.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  constructor(private tmdbServiceTsService: TmdbServiceTsService) {
  }
  ngOnInit() {
    this.getTrending();
  }

  getTrending() {
    this.tmdbServiceTsService.getTrendingMovies().subscribe((iye) => console.log("ssss", iye))
  }
}
