import { Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { election, stage } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";
import { CookieService } from "ngx-cookie-service";
import { MatSlideToggle, MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component(
  {
    selector: 'app-election-stage',
    templateUrl: './election-stage.component.html',
    styleUrls: ['./election-stage.component.scss'],
  }
)
export class ElectionStageComponent implements OnInit {
  private subscription = new Subscription();
  @Input() stage?: stage;
  @Input() electionIndex?: number;
  public panelOpenState: boolean = false;
  public cookieName: string = '';
  @ViewChild('toggle', { static: false }) toggle: MatSlideToggle;

  constructor(private service: electionService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.cookieName = 'game_value_' + this.electionIndex?.toString();

    if (this.stage && this.stage.title) {
      const currentValue = this.cookieService.get(this.cookieName);
      const stageValue = this.stage.title + ';';
      this.toggle.writeValue(currentValue.indexOf(stageValue) >= 0);
    }
  }

  public toggleStageComplete(event: MatSlideToggleChange): void {
    if (this.stage && this.stage.title) {
      const currentValue = this.cookieService.get(this.cookieName);
      let newValue: string = '';
      const stageValue = this.stage.title + ';';
      if (event.checked) {
        this.cookieService.set(this.cookieName,currentValue + stageValue);
      } else {
        this.cookieService.set(this.cookieName, currentValue.replaceAll(stageValue, ''));
      }
    }
  }
}
