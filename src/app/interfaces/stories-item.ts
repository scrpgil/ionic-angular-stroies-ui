export interface StoryItem {
  id: string;
  type: string;
  length: number;
  src: string;
  preview: string;
  link: string;
  linkText: string;
  seen: boolean;
  time: Date;
}
