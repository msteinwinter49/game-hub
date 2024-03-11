import useGenres from '../hooks/useGenres';
import { Genre } from '../services/genre-service';
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error} = useGenres();
  
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul> { genres.map ( genre => <li> {genre.name} </li>)}
    </ul>
    </>
  )
}

export default GenreList