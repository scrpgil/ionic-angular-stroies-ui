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

  async showModal(ev: any, idx: number) {
    const enterAnimation = this.createMyFadeInAnimation();
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

  createMyFadeInAnimation() {
    // const myFadeInAnimation = (baseEl: any) => {
    //   const backdropAnimation = this.animationCtrl
    //     .create()
    //     .addElement(baseEl.querySelector('ion-backdrop'))
    //     .fromTo('opacity', 0.01, 0.4);
    //   const wrapperAnimation = this.animationCtrl
    //     .create()
    //     .addElement(baseEl.querySelector('.modal-wrapper'))
    //     .beforeStyles({ opacity: 1 })
    //     .fromTo('translateX', '0%', '0%');
    //   return this.animationCtrl
    //     .create()
    //     .addElement(baseEl)
    //     .easing('cubic-bezier(0.36,0.66,0.04,1)')
    //     .duration(1000)
    //     .beforeAddClass('show-modal')
    //     .addAnimation([backdropAnimation, wrapperAnimation]);
    // };
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl
        .create()
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl
        .create()
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          {
            offset: 0,
            opacity: '0.2',
            transform: `translate(0) scale(0)`,
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
        .easing('ease-in')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };
    return enterAnimation;
  }
}
