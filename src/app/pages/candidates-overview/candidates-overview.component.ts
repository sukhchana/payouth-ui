import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/models/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidates-overview',
  templateUrl: './candidates-overview.component.html',
  styleUrls: ['./candidates-overview.component.scss']
})
export class CandidatesOverviewComponent {

  constructor(private candidatesService: CandidatesService, private router: Router){ }
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

  public goToCandidate(id: string): void {
    this.router.navigate(['/candidate-details/'+id]);
  }

}
