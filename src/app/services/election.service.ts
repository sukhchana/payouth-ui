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

  addStageComment(electionIndex: number, stageIndex: number, username: string, comment: string): Observable<any> {
    return this.httpClient
      .post<election[]>(`https://igwx8jmmyz.us-east-1.awsapprunner.com/elections/${electionIndex + 1}/stages/${stageIndex + 1}/comments`,
        {
          username,
          comment
        }
      );
  }
  addElectionComment(electionIndex: number, username: string, comment: string) : Observable<any>{
    return this.httpClient
      .post<election[]>(`https://igwx8jmmyz.us-east-1.awsapprunner.com/elections/${electionIndex + 1}/comments`,
        {
          username,
          comment
        }
      );
  }
}
