import { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import useData from "./useData";

// interface GamesResp {
//   count: number;
//   results: Game[];
// }

const useGames = (selectedGenre: Genre | null) => {
  console.log("useGames > ", selectedGenre);
  return useData<Game>(
    "/games",
    { params: { page_size: '6', genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
};
export default useGames;
