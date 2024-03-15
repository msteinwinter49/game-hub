import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatform } from "./services/parentPlatform-service";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const handleSelectedGenre = (genre: Genre) => {
    console.log("Selected id: ", genre.id);
    setSelectedGenre(genre);
  };

  const [selectedPlatform, setSelectedPlatform] = useState<ParentPlatform | null>(null);
  const handleSelectedPlatform = (platform: ParentPlatform) => {
    console.log("Selected platform: ", platform);
    setSelectedPlatform(platform);
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
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
              onSelectPlatform={(platform) => handleSelectedPlatform(platform)}
              selectedPlatform={selectedPlatform}
          />
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
