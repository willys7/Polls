import { Injectable } from '@angular/core';

@Injectable()
export class CandidatesService {
  private candidates: any[] = [
    {
      id:1,
      name:"Jorge Perez",
      party:"FRG",
      polls:0,
      age:51,
      biography:"Primera participacion en politica"
    },
    {
      id:2,
      name:"Manuel Alvarez",
      party:"UNE",
      polls:0,
      age:47,
      biography:"Septima participacion en politica"
    },
    {
      id:3,
      name:"Pablo Juarez",
      party:"Gana",
      polls:0,
      age:54,
      biography:"Tercera participacion en politica"
    },
    {
      id:4,
      name:"Pedro Ortiz",
      party:"FCN",
      polls:0,
      age:33,
      biography:"Segunda participacion en politica"
    },
    {
      id:5,
      name:"Juan Romeo",
      party:"PRI",
      polls:0,
      age:60,
      biography:"Cuarta participacion en politica"
    }
  ]
  constructor() { }

  getCandidates(){
    return this.candidates;
  }

  pollByCandidate(id:number){
    for(let x of this.candidates){
      if(x.id == id){
        x.polls = x.polls + 1;
      }
    }
  }

  pollCandidateByName(name:string, party:string){
    for(let x of this.candidates){
      if(x.name == name && x.party == party){
        x.polls = x.polls + 1;
      }
    }
  }

  addCandidate(candidate:{}){
    this.candidates.push(candidate);
  }

}
