import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { election } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";

@Component(
  {
    selector: 'app-election',
    templateUrl: './election.component.html',
    styleUrls: ['./election.component.scss'],
  }
)
export class ElectionComponent {
  private subscription = new Subscription();
  @Input() election?: election;

  constructor(private service: electionService) {

  }
}
