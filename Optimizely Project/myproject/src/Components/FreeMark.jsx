import Navbar from "./Navbar";
import {Box , Text, Button} from "@chakra-ui/react"
import CompareFeatures from "./CompareFeatures"


function FreeMark () {

    return (
        <Box>
            <Navbar />
            <Text mt={'50px'} color='black' fontWeight={'bold'} fontSize={'4xl'}>A platform for every marketer. Plans for every team.</Text>

            <Box  w={'95%'} m='auto' h='400px'  display='flex' mt='50px'>



                <Box m='auto' h={'100%'} w='24%' bg='#f6f6f6' >
                    <Box bg={'#c8a8f9'} w='100%' h={'10px'}></Box>
                    <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Start</Text>
                    <Text textAlign={'left'} ml='45px' mt={'15px'} w={'80%'} >An intuitive, easy-to-use project management tool, purchase-built for small marketing teams (up to 5).</Text>
                    <Text textAlign={'left'} fontSize='5xl' ml={'45px'} fontWeight='bold'>$0</Text>
                    <Text  textAlign={'left'} ml='45px' >Always free</Text>
                    <Button borderRadius={'60px'} mt='70px'  w={'35%'} color={'white'} bg='#0037ff'>Sign up now</Button>

                </Box>


                <Box m='auto' h={'100%'} w='24%' bg='#f6f6f6'>
                    <Box bg={'#ae7ef7'} w='100%' h={'10px'}></Box>
                    <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Manage</Text>
                    <Text textAlign={'left'} ml='45px' mt={'15px'} w={'80%'} >Field requests from your entire organization, proof all content and guarantee brand compliance.</Text>
                    <Text textAlign={'left'} fontSize='5xl' ml={'45px'} fontWeight='bold'>$79</Text>
                    <Text  textAlign={'left'} ml='45px' >user/month</Text>
                    <Button borderRadius={'60px'} mt='70px'  w={'35%'} color={'white'} bg='#0037ff'>Start free trial</Button>
                </Box>



                <Box m='auto' h={'100%'} w='24%' bg='#f6f6f6'>
                    <Box bg={'#9356f6'} w='100%' h={'10px'}></Box>
                    <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Create</Text>
                    <Text textAlign={'left'} ml='45px' mt={'15px'} w={'80%'} >Powerful content creation tools, workflows and publishing integrations for content teams.</Text>
                    <Text textAlign={'left'} fontSize='5xl' ml={'45px'} fontWeight='bold'>Let's talk</Text>
                    
                    <Button borderRadius={'60px'} mt='90px'  w={'35%'} color={'white'} bg='#0037ff'>Contact us</Button>
                </Box>



                <Box m='auto' h={'100%'} w='24%'  bg='#f6f6f6'>

                    <Box bg={'#861dff'} w='100%' h={'10px'}></Box>
                    <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Orchestrate</Text>
                    <Text textAlign={'left'} ml='45px' mt={'15px'} w={'80%'} >A comprehensive solution for end-to-end campaign visibility, execution and measurement.</Text>
                    <Text textAlign={'left'} fontSize='5xl' ml={'45px'} fontWeight='bold'>Let's talk</Text>
                    
                    <Button borderRadius={'60px'} mt='90px'  w={'35%'} color={'white'} bg='#0037ff'>Contact us</Button>
                </Box>

            </Box>

            <CompareFeatures />

        </Box>
    )
}

export default FreeMark;