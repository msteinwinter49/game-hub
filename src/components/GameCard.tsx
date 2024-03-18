import { Card, CardBody, CardFooter, CardHeader, HStack, Image, Text  } from '@chakra-ui/react'
import { Game } from '../services/game-service'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game} : Props) => {
  return (
    <>
    <Card margin={'5px'}>
      <Image src={game.background_image} borderTopRadius='10' />
      <CardBody>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms} />
          <Text fontSize='lg' color='green' as='b' >{game.metacritic}<br/></Text>
        </HStack>
        <Text fontSize='3xl' as='b'>{game.name}</Text>
      </CardBody>
      <CardFooter>Rating: {game.rating} + {game.added} Id: {game.id}</CardFooter>
    </Card>
    </>
  )
}

export default GameCard