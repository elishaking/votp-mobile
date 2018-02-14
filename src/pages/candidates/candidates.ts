import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-candidates',
  templateUrl: 'candidates.html',
})
export class CandidatesPage {
  candidates: Candidate[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.candidates = [
      {
        titles: 'Hon',
        firstName: 'Chi',
        lastName: 'Arm',
        stateOfOrigin: 'Enugu',
        nVotes: 200,
      },
      {
        titles: 'Rt',
        firstName: 'John',
        lastName: 'Kesi',
        stateOfOrigin: 'Lagos',
        nVotes: 198,
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatesPage');
  }

}

interface Candidate{
  titles: string;
  firstName: string;
  lastName: string;
  stateOfOrigin: string;
  nVotes: number;
}
