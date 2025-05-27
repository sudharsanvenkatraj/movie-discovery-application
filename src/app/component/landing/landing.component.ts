import { Component } from '@angular/core';
import { TmdbServiceTsService } from '../../core/services/tmdb.service.ts.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, MatProgressSpinnerModule],

  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(private tmdbServiceTsService: TmdbServiceTsService) {
  }
  movieList: any = [];
  loading: boolean = false;
  ngOnInit(): void {
  }


  getMovies(genres_id: number) {
    this.loading = true;
    this.tmdbServiceTsService.getMovieDetails(genres_id).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.movieList = res.results;
          this.loading = false;
        }, 1000)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}
