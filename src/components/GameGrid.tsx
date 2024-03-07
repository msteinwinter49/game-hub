import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const {games, error} = useGames ();  // --- Fetch all games.

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding={10} spacing={5}>
        {games.map (game => <GameCard key={game.id} background_image={game.background_image} added={game.added}
          id={game.id} name={game.name} rating={game.rating} metacritic={game.metacritic}
          parent_platforms={game.parent_platforms} />)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid