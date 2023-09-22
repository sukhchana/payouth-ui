import { Component } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';

@Component({
  selector: 'app-candidates-overview',
  templateUrl: './candidates-overview.component.html',
  styleUrls: ['./candidates-overview.component.scss']
})
export class CandidatesOverviewComponent {
  protected candidates: Candidate[] = [
    { firstName: 'John', lastName: 'Doe', party: 'Democratic', policies: ['A', 'B'] , pledges: ['E', 'F', 'G'], picture: 'PIC-LINK'},
    { firstName: 'Jane', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
    { firstName: 'Abcd', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
    { firstName: 'Efgh', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
    { firstName: 'Ijkl', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
    { firstName: 'Mnop', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
    { firstName: 'Qrst', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
    { firstName: 'Jane', lastName: 'Doe', party: 'Republican', policies: ['C', 'D'] , pledges: ['H', 'I', 'J'], picture: 'PIC-LINK'},
  ]
  // protected firstName: string  = "John";
  // protected lastName: string  = "Doe";
  // protected party: string  = "Independent";

  public getAllCandidates(): Candidate[] {
    return this.candidates;
  }

}
