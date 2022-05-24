import { Flex, Image, Text } from "@chakra-ui/react";


interface ItensProps {
    title: string;
    src: string;
    alt: string;
    ml?: string;
}


export function Itens({title, src, alt, ml}: ItensProps) {
    return (

        <Flex
            flexDirection='row'
            ml={ml}
        >


            <Flex
                flexDirection='column'
                
            >
                <Image src={src} alt={alt} w='80px' h='70px' display='block' m='0 auto'/>

                <Text as='p'
                    fontStyle='normal'
                    fontWeight='bold'
                    fontSize='24px'
                    lineHeight='36px'
                    textAlign='center'
                    color='#47585B'
                >
                    {title}
                </Text>
                
            </Flex>
            
        </Flex>

    )
}