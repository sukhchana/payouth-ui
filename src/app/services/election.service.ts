import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { election } from '../models/election.model';

@Injectable({
  providedIn: 'root'
})
export class electionService {
  constructor(private httpClient: HttpClient) {
  }

  getElections(): Observable<election[]> {
    return this.httpClient
      .get<election[]>('https://igwx8jmmyz.us-east-1.awsapprunner.com/elections');
  }
}
