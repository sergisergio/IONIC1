import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {ModalController, MenuController} from "ionic-angular";
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {

    appareilsList: Appareil[];
  /* 1. Dans la même page
  constructor(private navCtrl: NavController) {}

  onLoadAppareil(appareil: {name: string, description: string[]}) {
      this.navCtrl.push(SingleAppareilPage, {appareil: appareil});
  }*/


    constructor(private modalCtrl: ModalController,
                private menuCtrl: MenuController,
                private appareilsService: AppareilsService) {}

    /* 2. En modal
    onLoadAppareil(appareil: {name: string, description: string[]}) {
        let modal = this.modalCtrl.create(SingleAppareilPage, {appareil: appareil});
        modal.present();
    }*/

    // Copie du contenu de l'array du service.
    ionViewWillEnter() {
        this.appareilsList = this.appareilsService.appareilsList.slice();
    }

    // On passe l'index au lieu de l'objet lui-même.
    onLoadAppareil(index: number) {
        let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}
