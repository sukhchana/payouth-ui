import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Optional, Output, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { comment, election, stage, stageElement } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";
import { EmailCookieName } from "../../../../models/cookie-names.model";
import { CookieService } from "ngx-cookie-service";
import { MatInput } from "@angular/material/input";

@Component(
  {
    selector: 'app-election-comments',
    templateUrl: './election-comments.component.html',
    styleUrls: ['./election-comments.component.scss'],
  }
)
export class ElectionCommentsComponent  implements OnDestroy {
  private subscription = new Subscription();
  @Input() comments?: comment[];
  @Input() electionIndex: number;
  @Optional() @Input() stageIndex?: number;
  @ViewChild('commentInput', { static: false }) commentInput: ElementRef;
  @Output() CommentsUpdated = new EventEmitter();

  constructor(private service: electionService, private cookieService: CookieService) {

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public addComment() {
    const username = this.cookieService.get(EmailCookieName);
    if (this.stageIndex) {
      this.subscription.add(this.service.addStageComment(this.electionIndex, this.stageIndex, username, this.commentInput.nativeElement.value).subscribe(() => {
        this.CommentsUpdated.emit();
    }));
    } else {
      this.subscription.add(this.service.addElectionComment(this.electionIndex, username, this.commentInput.nativeElement.value).subscribe(() => {
        this.CommentsUpdated.emit();
      }));
    }
  }
}
