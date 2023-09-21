import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { elections } from '../models/election.model';

@Injectable({
  providedIn: 'root'
})
export class electionService {
  constructor(private httpClient: HttpClient) {
  }

  getElections(): Observable<elections> {
    return this.httpClient
      .get<elections>('/assets/data/database.json');
  }
}
