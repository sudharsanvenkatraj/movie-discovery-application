import {ChangeDetectionStrategy, Component} from '@angular/core';
import { TmdbServiceTsService } from '../../core/services/tmdb.service.ts.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ElementRef, Renderer2} from '@angular/core';

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string; // ISO date format (YYYY-MM-DD)
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Component({
  selector: 'app-landing',
  imports: [CommonModule, FormsModule, MatProgressSpinnerModule, RouterModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',

})
export class LandingComponent {
  constructor(private tmdbServiceTsService: TmdbServiceTsService,private elRef: ElementRef, private renderer: Renderer2, private router: Router, private route: ActivatedRoute) {
  }
  movieList: any = [];
  loading: boolean = false;
  ActorDetails: any = [];
  isSearching: boolean = false;
  heading: string = "";
  inputValue: string | undefined;


   isInWishlist = false;
    
      toggleWishlist(i: number) {
       
        this.movieList = this.movieList.map((item:any) =>{
          if (item.id === i) {
     item.isclicked = !item.isclicked;
          }
          return item;
        })
console.log("this.movieList", this.movieList);
      }



  getMovies(genres_id: number, title: string) {
    this.heading = title;
    this.loading = true;
    this.isSearching = false;
    this.tmdbServiceTsService.getMovieDetails(genres_id).subscribe({
      next: (res) => {
        setTimeout(() => {
       
          this.movieList = res.results.map((item: any) => {
            item.isclicked = false
            return item;
          })
             console.log("this.movieList", this.movieList)
          this.loading = false;
        }, 1000)
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
  bkImage = ''
  filterResults(movie: any) {
    this.loading = true;
    this.isSearching = true;
    if (movie.target.value.length > 4) {

      this.getActorList(movie);
      this.getMovieList(movie);
      console.log("this.ActorDetails.length", this.ActorDetails.length);
      console.log("this.movieList.length", this.movieList.length);

      this.heading = `Results found for actors:   ${(this.ActorDetails.length > 0) ? this.ActorDetails.length : 'N/A'} and movies:   ${(this.movieList.length > 0) ? this.movieList.length : 'N/A'}`;


    }

  }

  getActorList(movie: any) {
    this.tmdbServiceTsService.getActorDetails(movie.target.value.toLowerCase()).subscribe({
      next: (res) => {
        this.ActorDetails = res.results.filter((item: any) => item.known_for_department === 'Acting');
        console.log("ActorDetails", this.ActorDetails);
        this.loading = false;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  getMovieList(movie: any) {
    this.tmdbServiceTsService.getMoviesActorDetail(movie.target.value.toLowerCase()).subscribe({
      next: (res) => {
        console.log("movieee", res.results);

        this.movieList = res.results;
        this.loading = false;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}
