import { Component } from '@angular/core';
import { TmdbServiceTsService } from '../../core/services/tmdb.service.ts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  // standalone: true,
})
export class LandingComponent {
  constructor(private tmdbServiceTsService: TmdbServiceTsService) {
  }
  feelGoodList: any = [];
  actionList: any;
  mindBendersList: any;


  ngOnInit(): void {
    this.getFeelGood();
  }


  getFeelGood() {
    this.tmdbServiceTsService.getMovieDetails(10751).subscribe((iye) => {
      this.feelGoodList = iye;
    });

  }
  getAction() {
    this.tmdbServiceTsService.getMovieDetails(28).subscribe((iye) => this.actionList = iye);
  }
  getMindBenders() {
    this.tmdbServiceTsService.getMovieDetails(878).subscribe((iye) => this.mindBendersList = iye);
  }
}
