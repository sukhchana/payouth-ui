import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-candidates-overview',
  templateUrl: './candidates-overview.component.html',
  styleUrls: ['./candidates-overview.component.scss']
})
export class CandidatesOverviewComponent {

  constructor(private candidatesService: CandidatesService){ }
  protected candidates: Candidate[] = [];


  public ngOnInit(): void{
    this.candidatesService.getAllCandidates().subscribe(x => 
      {
        console.log(x);
        this.candidates = x
      });

  }

  public getAllCandidates(): Candidate[] {
    return this.candidates;
  }

}
