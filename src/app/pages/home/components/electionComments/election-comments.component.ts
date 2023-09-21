import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { comment, election, stage, stageElement } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";

@Component(
  {
    selector: 'app-election-comments',
    templateUrl: './election-comments.component.html',
    styleUrls: ['./election-comments.component.scss'],
  }
)
export class ElectionCommentsComponent  {
  private subscription = new Subscription();
  @Input() comments?: comment[];

  constructor(private service: electionService) {

  }
}
