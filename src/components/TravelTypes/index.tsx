import { Flex } from "@chakra-ui/react";
import { Itens } from "./Itens";


export function TravelTypes() {
    return (
        <Flex
            w='100%'
            maxW="1160px"
            margin='0 auto'
            height='145px'
            mt='80px'      
        >
            <Itens title='Vida noturna' src='/cocktail 1.png' alt='Taça' />
            <Itens title='Praia' src='/surf 1.png' alt='Prancha de Surf' ml='130px'/>
            <Itens title='Moderno' src='/building 1.png' alt='Torre' ml='130px'/>
            <Itens title='Clássico' src='/museum 1.png' alt='Museu' ml='130px'/>
            <Itens title='e mais' src='/earth 1.png' alt='Mundo' ml='130px'/>       
        </Flex >
    )
}