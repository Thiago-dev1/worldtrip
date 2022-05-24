import { Flex, Image, Text } from "@chakra-ui/react";


export function BackgroundImg() {
    return (
        <Flex
            position='absolute'
            w='100%'
            h={335}
            bgImage="url('Background.png')"

            justifyContent="space-between"
        >
            <Flex
                ml='140px'
                mt='80px'

            >
                <Text as='h1'
                    color='#F5F8FA'
                    position='absolute'

                    fontWeight='bold'
                    fontSize='36px'
                    lineHeight='54px'

                >
                    5 Continentes,
                    <br /> infinitas possibilidades.
                </Text>

                <Text as='h3'
                    color='#DADADA'
                    position='absolute'

                    marginTop={120}
                    fontWeight='normal'
                    fontSize='20px'
                    lineHeight='30px'
                >
                    Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
                </Text>
            </Flex>


            <Image src='/Airplane.png' alt='a'
                mr='140px'
                width='417.15px'
                height='270.74px'
                
                mt='90px'

                transform='rotate(3deg)'

            />

        </Flex >
    )
}

