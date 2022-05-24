import { Flex, Image, Box } from "@chakra-ui/react";


export function Header() {
    return (
        <Flex as='header'
            w='100%'
            h='100px'
            position='absolute'
            left='0'
            top='0'
        >
            <Box boxSize='sm'
                position='absolute'
                w='184.06px'
                h='45.92px'
                left='50%'
                top='27px'

            >
                <Image src='/Logo.png' alt='Logo' />
            </Box>
        </Flex >
    )
}