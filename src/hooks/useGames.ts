import { Game } from '../services/game-service';
import useData from './useData';

interface GamesResp {
  count: number;
  results: Game[];
}

const useGames = () => useData<Game>('/games?page_size=6');

export default useGames;