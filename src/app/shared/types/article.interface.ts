import { Profile } from "src/app/shared/types/profile.interface";

export interface Article {
  author: Profile;
  body: string;
  comments: string[];
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}
