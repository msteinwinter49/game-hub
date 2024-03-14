import {
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genre-service";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error}</Text>;

  const handleClick = (genre: Genre) => {
    console.log ('Clicked ', genre)
    onSelectGenre (genre);
  }

  return (
    <>
      <List>
        {" "}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="50px"
                borderRadius="10"
              />
              <Button variant="link" fontSize="lg" onClick={() => handleClick (genre)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
