import { Component } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';
import { Stories } from '../interfaces/stories';
import { StoriesModalPage } from '../stories-modal/stories-modal.page';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stories: Stories[];

  constructor(
    public modalController: ModalController,
    public animationCtrl: AnimationController,
    public storiesServie: StoriesService
  ) {
    this.stories = this.storiesServie.getStories();
  }

  // モーダル作成
  async showModal(ev: any, idx: number) {
    const enterAnimation = this.createMyFadeInAnimation(ev);
    const modal = await this.modalController.create({
      component: StoriesModalPage,
      swipeToClose: true,
      componentProps: {
        stories: this.stories,
        idx,
        coords: {
          x: ev.target.x,
          y: ev.target.y,
        },
      },
      enterAnimation,
    });
    return await modal.present();
  }

  // モーダルのアニメーション追加
  createMyFadeInAnimation(ev) {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      // モーダルの最初の位置を計算
      const x = ev.clientX - Math.round(window.outerWidth / 2);
      const y = ev.clientY - Math.round(window.outerHeight / 2);

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(baseEl.querySelector('.modal-wrapper'))
        .keyframes([
          {
            offset: 0,
            opacity: '0.2',
            transform: `translate(${x}px, ${y}px) scale(0)`,
          },
          {
            offset: 1,
            opacity: '1',
            transform: `translate(0) scale(1)`,
          },
        ]);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };
    return enterAnimation;
  }
}
