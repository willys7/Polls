import { RouterModule, Route, Routes} from '@angular/router'
import {PollsComponent} from './components/polls/polls.component'
import {CandidatesComponent} from './components/candidates/candidates.component'


const APP_ROUTES: Routes = [
    {path: 'poll', component: PollsComponent},
    {path: 'candidate/add', component: CandidatesComponent},
    {path: '**', pathMatch:'full', redirectTo: 'poll'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);