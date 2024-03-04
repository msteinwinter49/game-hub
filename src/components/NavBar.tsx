import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo2.jpg'
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px' fit='contain'/>
      <Text>NavBar</Text>
    </HStack>
  )
}
export default NavBar