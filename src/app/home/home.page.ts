import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StoriesModalPage } from '../stories-modal/stories-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalController: ModalController) {}

  async showModal() {
    const modal = await this.modalController.create({
      component: StoriesModalPage,
      swipeToClose: true,
      presentingElement: await this.modalController.getTop(),
    });
    return await modal.present();
  }
}
