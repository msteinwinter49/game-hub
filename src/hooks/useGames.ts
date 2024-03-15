import { GameQuery } from "../App";
import { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import { ParentPlatform } from "../services/parentPlatform-service";
import useData from "./useData";

// interface GamesResp {
//   count: number;
//   results: Game[];
// }

const useGames = (gameQuery: GameQuery) => {
  console.log("useGames gameQuery > ", gameQuery);
  return useData<Game>(
    "/games",
    { params: { page_size: '6', genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id } },
    [gameQuery]
  );
};
export default useGames;
