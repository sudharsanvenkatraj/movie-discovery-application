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
  isFeelGood: boolean = false;
  isActionFix: boolean = false;
  isMindBenders: boolean = false;


  ngOnInit(): void {
  }


  getFeelGood() {
    this.tmdbServiceTsService.getMovieDetails(10751).subscribe((iye) => {
      this.feelGoodList = iye.results;
      this.isFeelGood = true;
      this.isActionFix = false;
      this.isMindBenders= false;
      console.log(this.feelGoodList)
    });

  }
  getActionFix() {
    this.tmdbServiceTsService.getMovieDetails(28).subscribe((iye) => {
      this.actionList = iye.results
      this.isActionFix = true;
      this.isFeelGood = false;
      this.isMindBenders= false;

    });
  }
  getMindBenders() {
    this.tmdbServiceTsService.getMovieDetails(878).subscribe((iye) => {
      this.mindBendersList = iye.results
      this.isActionFix = false;
      this.isFeelGood = false;
      this.isMindBenders= true;
    });
  }
}
