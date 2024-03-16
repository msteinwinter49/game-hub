import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatform } from "./services/parentPlatform-service";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: ParentPlatform | null;
  sortOrder: string;
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

  const handleSelectedSortOrder = (sortOrder: string) => {
    console.log("App > Selected sort order: ", sortOrder);
    setGameQuery({...gameQuery, sortOrder});
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
          <HStack spacing={5} paddingLeft={12}>
            <PlatformSelector
                onSelectPlatform={(platform) => handleSelectedPlatform(platform)}
                selectedPlatform={gameQuery.platform}
            />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={ (sortOrder) => handleSelectedSortOrder(sortOrder) } />
          </HStack>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
