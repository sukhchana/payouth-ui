import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent {
    protected firstName: string = 'Sukh';
    protected lastName: string = 'Chana';
    protected party: string = 'Republican';
    protected incumbent: boolean = true;


    constructor(private route: ActivatedRoute, private candidatesService: CandidatesService){ }
    protected candidate: Candidate = { "firstName": "", "lastName": "", "party": "", "policies": [] , "pledges": [], "picture": "", "summary": "", incumbent: true};
  
    public ngOnInit(): void{
      let id = this.route.snapshot.params['id'];
      console.log(id);

      this.candidatesService.getCandidate(id).subscribe(x => 
        {
          console.log(x);
          this.candidate = x
        });
  
    }
  
    public getCandidate(): Candidate {
      return this.candidate;
    }
}
