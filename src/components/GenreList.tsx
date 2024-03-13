import { Text, Image, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />

  if (error) return <Text>{error}</Text>

  return (
    <>
      <List>
        {" "}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image src={genre.image_background} boxSize="50px" borderRadius='10'/>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
