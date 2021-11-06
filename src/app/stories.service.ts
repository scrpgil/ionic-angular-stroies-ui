import { Injectable } from '@angular/core';
import { Stories } from './interfaces/stories';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor() {}

  getStories(): Stories[] {
    return [
      {
        id: 'ramon',
        photo:
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg',
        name: 'Ramon',
        link: 'https://ramon.codes',
        lastUpdated: this.timestamp(),
        items: [
          {
            id: 'ramon-1',
            type: 'photo',
            length: 3,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
          {
            id: 'ramon-2',
            type: 'video',
            length: 1,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
          {
            id: 'ramon-3',
            type: 'photo',
            length: 3,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png',
            link: 'https://ramon.codes',
            linkText: 'Visit my Portfolio',
            seen: false,
            time: this.timestamp(),
          },
        ],
      },
      {
        id: 'gorillaz',
        photo:
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg',
        name: 'Gorillaz',
        link: '',
        lastUpdated: this.timestamp(),
        items: [
          {
            id: 'gorillaz-1',
            type: 'video',
            length: 1,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
          {
            id: 'gorillaz-2',
            type: 'photo',
            length: 3,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
        ],
      },
      {
        id: 'ladygaga',
        photo:
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg',
        name: 'Lady Gaga',
        link: '',
        lastUpdated: this.timestamp(),
        items: [
          {
            id: 'ladygaga-1',
            type: 'photo',
            length: 5,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
          {
            id: 'ladygaga-2',
            type: 'photo',
            length: 3,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg',
            link: 'http://ladygaga.com',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
        ],
      },
      {
        id: 'starboy',
        photo:
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg',
        name: 'The Weeknd',
        link: '',
        lastUpdated: this.timestamp(),
        items: [
          {
            id: 'starboy-1',
            type: 'photo',
            length: 5,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
        ],
      },
      {
        id: 'riversquomo',
        photo:
          'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg',
        name: 'Rivers Cuomo',
        link: '',
        lastUpdated: this.timestamp(),
        items: [
          {
            id: 'riverscuomo',
            type: 'photo',
            length: 10,
            src: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',
            preview:
              'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',
            link: '',
            linkText: '',
            seen: false,
            time: this.timestamp(),
          },
        ],
      },
    ];
  }

  timestamp() {
    return new Date();
  }
}
