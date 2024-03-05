import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const {games, error} = useGames ();  // --- Fetch all games.

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={5}>
      {/* {games.map (game => <GameCard game={game} />)} */}
      {games.map (game => <GameCard background_image={game.background_image} added={game.added}
        id={game.id} name={game.name} rating={game.rating} metacritic={game.metacritic}/>)}
      </SimpleGrid>
      {/* <ul> */}
      {/* {games.map (game => <li key={game.id}>{game.name}</li>)} */}
      {/* </ul> */}
    </>
  )
}

export default GameGrid