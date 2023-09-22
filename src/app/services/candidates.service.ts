import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(private httpClient: HttpClient) { }

  getAllCandidates(): Observable<Candidate[]> {
    return this.httpClient
    .get<Candidate[]>('/assets/data/candidates.json');
  }
  
}
