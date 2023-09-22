import { Component } from '@angular/core';
import { ExternalSourcesService } from 'src/app/services/external-sources.service';
import { externalSourceModel } from '../../models/external-source.model';

@Component({
  selector: 'app-how-to-vote-page',
  templateUrl: './how-to-vote-page.component.html',
  styleUrls: ['./how-to-vote-page.component.scss']
})
export class HowToVotePageComponent {

  mapEndpoint: string = "";
  externalSources: externalSourceModel[] = [];

  constructor (private externalSourcesService: ExternalSourcesService){
    this.getExternalSources();
    console.log(this.externalSources);
  }
  
  getExternalSources(){
    this.externalSources = this.externalSourcesService.getExternalSources();
  }

  navigateToExternalLink(link: string){
    window.location.href = link;
  }
  /*
  getMapServiceEndpoint(){
    return this.appConfigService.getMapServiceEndpoint();
  }*/
}
