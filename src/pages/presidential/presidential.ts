import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-presidential',
  templateUrl: 'presidential.html',
})
export class PresidentialPage {
  parties: Party[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.parties = [
     {
       name: 'PDP',
       motto: 'Power to the People',
       nCandidates: 10
     },
     {
      name: 'APC',
      motto: 'All Peoples Party',
      nCandidates: 8
    },
   ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresidentialPage');
  }

  showCandidates(){
    
  }

}

interface Party{
  name: string;
  motto: string;
  nCandidates: number;
}
