import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { election, stage, stageElement } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";

@Component(
  {
    selector: 'app-election-stage-elements',
    templateUrl: './election-stage-elements.component.html',
    styleUrls: ['./election-stage-elements.component.scss'],
  }
)
export class ElectionStageElementsComponent  {
  private subscription = new Subscription();
  @Input() elements?: stageElement[];

  constructor(private service: electionService) {

  }
}
