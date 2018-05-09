import { Component, OnInit } from '@angular/core';
import {CandidatesService} from '../../services/candidates.service'

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  candidates = [];
  constructor(private _candidates:CandidatesService) { }

  ngOnInit() {
    this.candidates = this._candidates.getCandidates();
  }

  poll(name:string, party:string){
    this._candidates.pollCandidateByName(name, party);
  }

}
