import { Flex, Text } from "@chakra-ui/react";

import { BackgroundImg } from "./BackgroundImg";


export function Banner() {
    return (
        <Flex
            position='absolute'
            width='1440px'
            height='368.21px'
            left='0px'
            top='100px'

        >
            <BackgroundImg />
        </Flex>
    )
}