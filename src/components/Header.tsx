import { Flex, Image, Box } from "@chakra-ui/react";


export function Header() {
    return (
        <Flex as='header'
            w='100%'
            h={["50px", "100px"]}        
            mx="auto"
            alignItems="center"
            justifyContent="center"
            px="6"
        >

                <Image src='/Logo.png' alt='Logo' h='46'/>
            
        </Flex >
    )
}