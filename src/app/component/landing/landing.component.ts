import { Component } from '@angular/core';
import { TmdbServiceTsService } from '../../core/services/tmdb.service.ts.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, MatProgressSpinnerModule, RouterModule],

  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(private tmdbServiceTsService: TmdbServiceTsService, private router: Router, private route: ActivatedRoute) { 
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
          console.log("resss", res.results)
          this.movieList = res.results;
          this.loading = false;
        }, 1000)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  // openMovieDetails(movie: any) {
  //   console.log("movieiddd", movie);
  //   // Here you can implement the logic to open movie details, e.g., navigate to a detail component
  //   //  this.router.navigate([`detail/${movie}`], { relativeTo: this.route });
  //    this.router.navigate([`/heroes:${{movie}}`, ]);
  // }
}
