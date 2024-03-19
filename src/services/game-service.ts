import { ParentPlatform } from "./parentPlatform-service";

export interface GameParentPlatform {
  platform: ParentPlatform;
}

export interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  added: number;
  metacritic: number;
  parent_platforms: GameParentPlatform[];
  rating_top: number;
}