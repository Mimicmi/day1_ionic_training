import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private storage: Storage) {}

  titre = "Ceci est mon titre de details";
  maVariable = 'Texte truc blabla';
  monTableau = [];


  afficheVar() {
    this.monTableau.push(this.maVariable);
    console.log(this.monTableau);
    this.storage.set('monTableau', this.monTableau);
  }

  delIndex(i) {
    console.log(i);
    this.monTableau.splice(i,1);
    this.storage.set('monTableau', this.monTableau);
  }
  methodeSubtitle() {
    return "Ceci est mon sous-titre depuis une méthode";
  }

  ngOnInit() {
    this.storage.get('monTableau').then((data) => {
      console.log('Données récupérées du Storage', data)
      this.monTableau = data;
    }
  )
  }

}