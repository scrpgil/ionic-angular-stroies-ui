import { createAnimation, Animation } from '@ionic/core';

export const modalEnterAnimation = (rootElement: HTMLElement): Animation => {
  return createAnimation()
    .addElement(rootElement.querySelector('.modal-wrapper'))
    .easing('ease-in-out')
    .duration(300)
    .beforeStyles({ transform: 'none' })
    .fromTo('opacity', 0, 1);
};
