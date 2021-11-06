import { StoryItem } from './stories-item';

export interface Stories {
  id: string;
  photo: string;
  name: string;
  link: string;
  lastUpdated: Date;
  items: StoryItem[];
}
