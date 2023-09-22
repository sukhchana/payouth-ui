import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { election } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";
import { CookieService } from "ngx-cookie-service";

@Component(
  {
    selector: 'app-election',
    templateUrl: './election.component.html',
    styleUrls: ['./election.component.scss'],
  }
)
export class ElectionComponent implements OnInit {
  private subscription = new Subscription();
  @Input() election?: election;
  @Input() electionIndex: number;
  @Output() progress: number;
  @Output() CommentsUpdated = new EventEmitter();

  constructor(private service: electionService, private cookieService: CookieService) {
  }

  public commentsUpdated() {
    this.CommentsUpdated.emit();
  }

  ngOnInit() {
    this.setTimeout();
  }

  public setTimeout() {
    window.setTimeout(() => {
      const cookieName: string = 'game_value_' + this.electionIndex;
      if (cookieName) {
        const currentValue = this.cookieService.get(cookieName);
        if (currentValue) {
          const stages = currentValue.split(';');
          if (this.election) {
            this.progress = (stages.length / this.election.stages.length) * 100;
          }
        }
      }
      this.setTimeout();
    }, 2000);
  }
}
