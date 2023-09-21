import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { election, stage, stageElement } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component(
  {
    selector: 'app-election-stage-element',
    templateUrl: './election-stage-element.component.html',
    styleUrls: ['./election-stage-element.component.scss'],
  }
)
export class ElectionStageElementComponent {
  private subscription = new Subscription();
  @Input() element?: stageElement;

  constructor(private service: electionService, public sanitizer: DomSanitizer) {

  }
}
