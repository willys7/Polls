import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {APP_ROUTING} from './app.routes'
import {CandidatesService} from './services/candidates.service';
import { PollsComponent } from './components/polls/polls.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CandidatesComponent } from './components/candidates/candidates.component'


@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    NavbarComponent,
    CandidatesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
