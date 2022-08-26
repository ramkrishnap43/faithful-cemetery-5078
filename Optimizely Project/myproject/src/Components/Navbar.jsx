import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Img,
  } from '@chakra-ui/react';
 

  import { BiSearchAlt2 } from 'react-icons/bi'
  import {CgProfile} from "react-icons/cg"

function Navbar(){
    



    return (

        <Box w={"100%"} h="85px" >
            <Box display={"flex"} justifyContent={"space-between"}> 
                
                
               
                    <Box display={"flex"}  ml={"30px"} justifyContent={"space-between"}>
                        <Img cursor={"pointer"} ml={"80px"} mt="15px" src='https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_logo_navigation.svg' />
                        <Text  _hover={{color:"#0037ff"}} cursor={"pointer"} ml={"80px"} mt="28px">Products</Text>
                        <Text  _hover={{color:"#0037ff"}} cursor={"pointer"} ml={"42px"}  mt="28px">Plans</Text>
                        <Text  _hover={{color:"#0037ff"}} cursor={"pointer"} ml={"42px"} mt="28px">Resources</Text>
                        <Text  _hover={{color:"#0037ff"}} cursor={"pointer"} ml={"42px"} mt="28px">Partners</Text>
                    </Box>
                

                <Box display={"flex"} > 
                        <Text _hover={{color:"#0037ff"}} cursor={"pointer"} mr={"50px"}  mt="28px">Support</Text>
                     
                       
                        <Text _hover={{color:"#0037ff"}} cursor={"pointer"} display={"flex"}  mr={"35px"} mt="28px"> <BiSearchAlt2 />Search</Text>
                        
                    

                   
                       
                        <Text _hover={{color:"#0037ff"}} cursor={"pointer"} display={"flex"} mr={"35px"} mt="28px">  <CgProfile />Login</Text>

                    
                    <Button  _hover={{backgroundColor:"#702bd8"}} mr={"80px"} borderRadius="45px" mt={"19px"} w="150px" color={"white"} backgroundColor="#0037ff">Get started</Button>



                </Box>

            </Box>

           
            
            




        </Box>
    )
}

export default Navbar;