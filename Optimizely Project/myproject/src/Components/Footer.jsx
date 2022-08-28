
import {
    Box,
    Input,
    Img,
    Container,
    Stack,
    Avatar,Heading,Checkbox,Button,
    SimpleGrid,
    Text,
    Flex,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    VStack,
    Select 
  } from '@chakra-ui/react';
  import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
 
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
   function Footer() {
    return (
      <Box w={"100%"} h="450px" backgroundColor="#080736">
        

        <Container  as={Stack} maxW={'6xl'} py={10}>
            <Box display={"flex"} justifyContent="space-between">
                <Img w={"4%"} ml="-100px" mt={"10px"} src="https://www.optimizely.com/globalassets/02.-global-images/navigation/optimizely_symbol_full-color.svg" />
               
                
                <Select mt={"35px"} w={"20%"} color={"white"}>
                    <option backgroundColor="white" color={"black"} value='English'>English</option>
                    <option backgroundColor="white" color={"white"} value='Deutsch'>Deutsch</option>
                    <option backgroundColor="white" color={"white"} value='Svenska'>Svenska</option>
                    <option backgroundColor="white" color={"white"} value='Norsk'>Norsk</option>
                </Select>
                
            </Box>
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }}  spacing={10}>

                

                <Stack align={'flex-start'} color="white" ml="-100px" fontSize={"small"} mt="80px">
                    <Box  w="60%" border={"0.1px solid grey"}></Box>
                    <ListHeader>Products</ListHeader>
                    <Link href={'#'}>Digital Experience Platforms</Link>
                    <Link href={'#'}>Content Cloud</Link>
                    <Link href={'#'}>Commerce Cloud</Link>
                    <Link href={'#'}>Intelligence Cloud</Link>
                    <Link href={'#'}>Plans & Pricing</Link>


                </Stack>


                <Stack align={'flex-start'} color="white" ml="-30px" fontSize={"small"} mt="80px" >
                <Box  w="60%" border={"0.1px solid grey"}></Box>
                    <ListHeader>Resources</ListHeader>
                    <Link href={'#'}>Insights</Link>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>Events</Link>
                    <Link href={'#'}>Developers</Link>
                    <Link href={'#'}>Support</Link>
                </Stack>

                <Stack align={'flex-start'} color="white" ml="-30px" fontSize={"small"} mt="80px">
                <Box  w="60%" border={"0.1px solid grey"}></Box>
                    <ListHeader>Company</ListHeader>
                    <Link href={'#'}>About us</Link>
                    <Link href={'#'}>Offices</Link>
                    <Link href={'#'}>Executive Team</Link>
                    <Link href={'#'}>Diversity & Inclusion</Link>
                    <Link href={'#'}>Press</Link>
                </Stack>

                <Stack align={'flex-start'} color="white" ml="-30px" fontSize={"small"} mt="80px">
                <Box  w="70%" border={"0.1px solid grey"}></Box>
                    <ListHeader>Careers</ListHeader>
                    <Link href={'#'}>About working at Optimizely</Link>
                    <Link href={'#'}>We're hiring!</Link>
                </Stack>

                <Stack align={'flex-start'} color="white" ml="10px" fontSize={"small"} mt="80px">
                <Box  w="90%" border={"0.1px solid grey"}></Box>
                    <ListHeader>Global headquarters</ListHeader>
                    <Link href={'#'}>119 5th Ave 7th floor</Link>
                    <Link href={'#'}>New York, NY 10003, USA</Link>

                    <VStack align={'flex-start'}  >
                    <Link mt={"30px"} fontSize="sm">Contact us</Link>
                    <Link>Phone +1 603 594 0249</Link>

                    </VStack>
                </Stack>

                



                </SimpleGrid>

        </Container>
        
        <Box w={"100%"} h="120px"bg={"#393a5d"}>
            
        
                <Box>
               
                    <Container
                        as={Stack}
                        maxW={'4xl'}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        color='white'
                        fontSize={"13px"}
                        mt="15px"
                        p="35px"
                        ml={"30px"}>
                        <Text>© 2022 Optimizely, Inc. All Rights Reserved.</Text>
                        <Link>Privacy Policy</Link>
                        <Link>Website terms of Use</Link>
                        <Link>Trust center</Link>
                   
                        
                        </Container> 
                       
                    
                     <Stack color='white' ml={"1200px"} mt='-50px' direction={'row'} spacing={6}>
                        <SocialButton  label={'Facebook'} href={'#'}>
                            <FaFacebook />
                         </SocialButton>

                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>

                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>

                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>

                        <SocialButton label={'Linkedin'} href={'#'}>
                            <FaLinkedin />
                        </SocialButton>


              
                       </Stack>
                </Box>

        </Box>
        
      </Box>
    );
  }
  export default Footer;