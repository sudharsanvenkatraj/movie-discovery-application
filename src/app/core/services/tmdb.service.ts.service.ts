import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development'
@Injectable({
  providedIn: 'root'
})
export class TmdbServiceTsService {

  constructor(public httpClient: HttpClient) { }

  getTrendingMovies(){
   return this.httpClient.get(`${environment.COMMON_URL}3/trending/movie/day?language=en-US&page=1`)
  }
}
