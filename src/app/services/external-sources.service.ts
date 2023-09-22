import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EmailCookieName } from '../models/cookie-names.model';
import { externalSourceModel } from '../models/external-source.model';

@Injectable({
  providedIn: 'root'
})
export class ExternalSourcesService {

  constructor() { }

  public getExternalSources(): externalSourceModel[] {
    return [{
        title: "Register to vote!",
        link: "https://payouth.vote/register",
        icon: "/assets/externalsourceIcons/PaYouth.png",
        description: "Click here if you want to register for voting!",
    } as externalSourceModel,
    {
        title: "Voting by mail!",
        link: "https://Vote.PA.gov/MailBallot",
        icon: "/assets/icons/PA.png",
        description: "Click here if you want to see avaliable methods of voting!",
    } as externalSourceModel,
    {
        title: "Check your registration status!",
        link: "https://www.pavoterservices.pa.gov/pages/voterregistrationstatus.aspx",
        icon: "/assets/icons/PA.png",
        description: "Click here if you want to check you registration status!",
    } as externalSourceModel,
    {
        title: "Are you 17 years old? Work as volonteer!",
        link: "https://www.payouthvote.org/poll-working-map",
        icon: "/assets/externalsourceIcons/PaYouth.png",
        description: "Are you 17 years old? Work as volonteer!",
    } as externalSourceModel,
    {
        title: "Are you 18 years old? Work as volonteer!",
        link: "https://Vote.PA.gov/Resources/pages/be-a-poll-worker.aspx",
        icon: "/assets/icons/PA.png",
        description: "Are you 18 years old? Work as volonteer!",
    } as externalSourceModel,
    {
        title: "Get more information!",
        link: "https://www.vote411.org/pennsylvania",
        icon: "/assets/externalsourceIcons/vote411.png",
        description: "Get more information on elections!",
    } as externalSourceModel,
    {
        title: "Checkout PA Youth X account!",
        link: "https://twitter.com/PAyouthVOTE",
        icon: "/assets/externalsourceIcons/X.png",
        description: "Be uptodate with latest news!",
    } as externalSourceModel,
    {
        title: "Checkout PA Youth Tiktok account!",
        link: "https://www.tiktok.com/search?q=PA%20youth&t=1695376151027",
        icon: "/assets/externalsourceIcons/tiktok.png",
        description: "Be uptodate with latest tiktoks!",
    } as externalSourceModel];
  }
}
