import { Box, Flex, Text, Image } from "@chakra-ui/react";





export function Banner() {
    return (
        <Flex
            w="100%"
            h="335px"
            backgroundImage="url(./Background.png)"
            justifyContent="space-around"
            alignItems="center"
            px="16"
        >
            <Box
            >
                <Text 
                    color='#F5F8FA'
                    fontWeight='bold'
                    fontSize='36px'
                    mb='4'
                >
                    5 Continentes,
                    <br /> infinitas possibilidades.
                </Text>

                <Text 
                    color='#DADADA'
                    fontWeight='normal'
                    fontSize='20px' 
                >
                    Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
                </Text>
            </Box>

             <Box>
        <Image src="./AirPlane.png" alt='Avião' mb="-25%"/>
      </Box>
        </Flex>
    )
}