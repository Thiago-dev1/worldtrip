//  esse arquivo é pra substituir os temas padrão do chakra.
import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body:{
                bg: '#F5F8FA', // bg = background
                
            }
        }
    }
})