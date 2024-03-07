export interface Platform {
  platform: {
  id: number;
  name: string;
  slug: string;
}}

export interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  added: number;
  metacritic: number;
  parent_platforms: Platform[];
}