import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { election, elections } from "../../../../models/election.model";
import { electionService } from "../../../../services/election.service";
import { CookieService } from "ngx-cookie-service";

@Component(
  {
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
  }
)
export class HomeComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  public elections?: election[];

  constructor(private service: electionService) {
  }

  ngOnInit() {
    this.subscription.add(this.service.getElections().subscribe(elections => {
      this.elections = elections;
    }));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
