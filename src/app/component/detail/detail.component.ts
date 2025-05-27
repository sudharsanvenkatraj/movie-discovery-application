import { Component } from '@angular/core';
import { TmdbServiceTsService } from '../../core/services/tmdb.service.ts.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  movieDetail: any = {}
  constructor(private tmdbServiceTsService: TmdbServiceTsService, private router: Router, private route: ActivatedRoute) { 

}

ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
        this.getMoviesById(movieId);
  })
}
;spokenLang: any 
getMoviesById(genres_id: number) {
    this.tmdbServiceTsService.getSpecificMovieDetails(genres_id).subscribe({
      next: (res) => {
        setTimeout(() => {
          console.log("resss", res)
          this.movieDetail = res;
        }, 1000)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

}
