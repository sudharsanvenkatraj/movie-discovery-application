import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development'
@Injectable({
  providedIn: 'root'
})
export class TmdbServiceTsService {

  constructor(public httpClient: HttpClient) { }

  getUser(){
   return this.httpClient.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
  }
}
