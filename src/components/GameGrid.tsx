import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import { Genre } from '../services/genre-service';

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  // console.log ('GameGrid > ', selectedGenre)
  const {data, error, isLoading} = useGames (selectedGenre);  // --- Fetch all games.
  if (error) return <Text>{error}</Text>
  if (isLoading) return <Spinner />

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={3}>
        {data.map (game => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  )
}

export default GameGrid