import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() {}

  titre = "Ceci est mon titre de details";
  maVariable = 'Texte truc blabla';
  monTableau = [];


  afficheVar() {
    this.monTableau.push(this.maVariable);
    console.log(this.monTableau);
  }

  delIndex(i) {
    console.log(i);
    this.monTableau.splice(i,1);
  }
  methodeSubtitle() {
    return "Ceci est mon sous-titre depuis une méthode";
  }

  ngOnInit() {
  }

}