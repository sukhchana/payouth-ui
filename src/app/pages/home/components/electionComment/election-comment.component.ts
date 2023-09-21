import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { comment, election, stage } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";

@Component(
  {
    selector: 'app-election-comment',
    templateUrl: './election-comment.component.html',
    styleUrls: ['./election-comment.component.scss'],
  }
)
export class ElectionCommentComponent {
  private subscription = new Subscription();
  @Input() comment?: comment;

  constructor(private service: electionService) {

  }
}
