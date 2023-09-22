import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { ElectionComponent } from "./components/election/election.component";
import { ElectionStagesComponent } from "./components/electionStages/election-stages.component";
import { ElectionStageComponent } from "./components/electionStage/election-stage.component";
import { CommonModule } from "@angular/common";
import { ElectionStageElementComponent } from "./components/electionStageElement/election-stage-element.component";
import { ElectionStageElementsComponent } from "./components/electionStageElements/election-stage-elements.component";
import { ElectionCommentsComponent } from "./components/electionComments/election-comments.component";
import { ElectionCommentComponent } from "./components/electionComment/election-comment.component";
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule(
  {
    imports: [FlexLayoutModule,HomeRoutingModule, CommonModule, MatCardModule, MatProgressBarModule, MatExpansionModule, MatSlideToggleModule],
    declarations: [HomeComponent,
      ElectionComponent, ElectionStagesComponent, ElectionStageComponent,
      ElectionStageElementsComponent, ElectionStageElementComponent,
      ElectionCommentsComponent, ElectionCommentComponent
    ]
  }
)
export class HomeModule { }
