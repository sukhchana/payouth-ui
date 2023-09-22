import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { election, stage } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";

@Component(
  {
    selector: 'app-election-stage',
    templateUrl: './election-stage.component.html',
    styleUrls: ['./election-stage.component.scss'],
  }
)
export class ElectionStageComponent {
  private subscription = new Subscription();
  @Input() stage?: stage;
  public panelOpenState: boolean = false;

  constructor(private service: electionService) {

  }
}
