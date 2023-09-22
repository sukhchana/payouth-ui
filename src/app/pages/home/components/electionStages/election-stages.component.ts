import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { election, stage, stageElement } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";

@Component(
  {
    selector: 'app-election-stages',
    templateUrl: './election-stages.component.html',
    styleUrls: ['./election-stages.component.scss'],
  }
)
export class ElectionStagesComponent  {
  private subscription = new Subscription();
  @Input() stages?: stage[];
  @Input() electionIndex: number;
  @Output() CommentsUpdated = new EventEmitter();

  constructor(private service: electionService) {

  }

  public commentsUpdated() {
    this.CommentsUpdated.emit();
  }
}
