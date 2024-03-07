import { Card, CardBody, CardFooter, CardHeader, HStack, Image, Text  } from '@chakra-ui/react'
import { Game } from '../services/game-service'
import PlatformIconList from './PlatformIconList'

const GameCard = (game: Game) => {
  return (
    <>
    <Card margin={'5px'}>
      <CardHeader>
        <Image src={game.background_image} borderTopRadius='10' />
      </CardHeader>
      <CardBody>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms} />
          {/* <div>{game.parent_platforms.map (platform => <Text>{platform.platform.slug}</Text>)}</div> */}
          {/* <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} /> */}
          {/* <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} /> */}
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