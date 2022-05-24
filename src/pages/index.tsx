import { Divider, Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Divider as="hr" w="20%" borderWidth="2px" borderColor="gray.500" bg="gray.500" />
    </Flex>
  )
}
