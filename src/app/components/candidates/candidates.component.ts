import { Component, OnInit } from '@angular/core';
import {CandidatesService} from '../../services/candidates.service'

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidate = {
    name: null,
    party: null,
    polls: null,
    age: null,
    biography: null
  }
  constructor(private _candidates:CandidatesService) { }

  ngOnInit() {
  }

}
