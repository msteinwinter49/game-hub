import { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import { ParentPlatform } from "../services/parentPlatform-service";
import useData from "./useData";

// interface GamesResp {
//   count: number;
//   results: Game[];
// }

const useGames = (selectedGenre: Genre | null, selectedPlatform: ParentPlatform | null) => {
  console.log("useGames platform > ", selectedPlatform);
  return useData<Game>(
    "/games",
    { params: { page_size: '6', genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};
export default useGames;
