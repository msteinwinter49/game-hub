import { Card, CardBody, CardFooter, CardHeader, Image, Text  } from '@chakra-ui/react'
import { Game } from '../services/game-service'

const GameCard = (game: Game) => {
  return (
    <>
    <Card margin={'5px'}>
      <CardHeader>
        <Image src={game.background_image} borderTopRadius='10' />
      </CardHeader>
      <CardBody>
        <Text fontSize='lg' color='green' as='b' >{game.metacritic}<br/></Text>
        <Text fontSize='3xl' as='b'>{game.name}</Text>
      </CardBody>
      <CardFooter>Rating: {game.rating} + {game.added} Id: {game.id}</CardFooter>
    </Card>
    </>
  )
}

export default GameCard