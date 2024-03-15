import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatform } from "./services/parentPlatform-service";

export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genre: Genre) => {
    console.log("App > Selected genre: ", genre);
    setGameQuery({...gameQuery, genre});
  };

  const handleSelectedPlatform = (platform: ParentPlatform) => {
    console.log("App > Selected platform: ", platform);
    setGameQuery({...gameQuery, platform});
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => handleSelectedGenre(genre)}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
              onSelectPlatform={(platform) => handleSelectedPlatform(platform)}
              selectedPlatform={gameQuery.platform}
          />
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
