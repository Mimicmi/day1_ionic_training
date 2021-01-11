import { Component } from '@angular/core';
import { Router } from "@angular/router";

/*va préciser à notre framework angular
* la logique de notre composant*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/*création d'une route*/
export class HomePage {

  constructor(private router: Router) {}

  titre = 'Ceci est mon titre (une chaine)';
  showAlert(message) {
    alert(message);
    console.log(message);
  }

  openDetails() {
    this.router.navigateByUrl("/details");
  }

}
