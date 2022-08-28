import {Box,
    Button,
    Img,
    Link,
    Text,
    Heading
} from "@chakra-ui/react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import {Link as NavLink } from "react-router-dom"


function Plans(){



    return (
        <Box w={"100%"} h="900px"  >
            <Navbar />
            <Text fontWeight={'bold'} fontSize={'5xl'}>Plans & pricing</Text>

            <Box m={'auto'} mt='20px' w="95%" h={'600px'} display='flex' >





                <Box m={'auto'}  w='32%' h="100%"  bg={'#f6f6f6'}>
                    <Box bg={'#861dff'} w='100%' h={'10px'}></Box>

                 <Img w={'10%'} ml='60px' mt={'50px'} src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_contentmarketingplatform.svg" />
                    <Text mt={'-40px'} ml='-70px' fontWeight={'bold'} fontSize={'2xl'}>Welcome</Text>
                    <Text ml={'62px'} mt='20px' textAlign={'left'} w='80%' fontSize={'sm'}>Manage tasks, work, campaigns and content across teams for seamless collaboration.</Text>

                   
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Digital asset management</Text>



                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Handle tasks and workflows</Text>


                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Streamline work requests</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Integrated calendar to track timelines</Text>


                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Easy commenting and collaboration to avoid bottlenecks</Text>
                  
                        <NavLink to='/freemark'>
                            <Button borderRadius={'60px'} mt='150px' w={'35%'} color={'white'} bg='#0037ff'>Try for free</Button>
                        </NavLink>

                </Box>











                {/* 2nd box */}
                <Box m={'auto'}  w='32%' h="100%"  bg={'#f6f6f6'}>

                    <Box bg={'#ff8110'} w='100%' h={'10px'}></Box>

                    <Img w={'10%'} ml='60px' mt={'50px'} src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_contentcloud.svg" />
                    <Text mt={'-40px'} ml='50px' fontWeight={'bold'} fontSize={'2xl'}>Content management</Text>
                    <Text ml={'62px'} mt='20px' textAlign={'left'} w='80%' fontSize={'sm'}>Create compelling content experiences. Empower your editors to compose great experiences by creating and combining content assets.</Text>

  
                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Content management</Text>



                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Authoring and layout</Text>


                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Headless API</Text>

                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Approval workflow</Text>


                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Design compelling experiences</Text>

                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Create once, publish everywhere</Text>

                    <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/87c766dbca675ff50dd4.svg"  />
                    <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Deliver content flexibly on .NET5</Text>

                   

                    
 

                    <Button borderRadius={'60px'} mt='90px' w={'35%'} color={'white'} bg='#0037ff'>Request pricing</Button>
                    
                </Box>



                <Box m={'auto'}  w='32%' h="100%" bg={'#f6f6f6'} >
                        <Box bg={'#ffcc00'} w='100%' h={'10px'}></Box>
                    
                        <Img w={'10%'} ml='60px' mt={'50px'} src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_webexperimentation.svg" />
                        <Text mt={'-40px'} ml='10px' fontWeight={'bold'} fontSize={'2xl'}>Web A/B testing</Text>
                        <Text ml={'62px'} mt='20px' textAlign={'left'} w='80%' fontSize={'sm'}>Experiment everywhere and personalize every touchpoint.</Text>

                   
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Run many types of A/B tests</Text>



                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Reliable results with stats engine</Text>


                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Personalize content</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>AI predictive audiences</Text>

                  

                        <Button borderRadius={'60px'} mt='150px' w={'35%'} color={'white'} bg='#0037ff'>Request pricing</Button>



                </Box>


            </Box >










                    <Box m={'auto'} mt='20px' w="95%" mb={'150px'} h={'500px'} display='flex'>

                         {/* 4th box */}

                         <Box m={'auto'}  w='32%' h="100%" bg={'#f6f6f6'}>



                         <Box bg={'#00ccff'} w='100%' h={'10px'}></Box>
                    
                            <Img w={'10%'} ml='60px' mt={'50px'} src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_featuremanagement.svg" />
                            <Text mt={'-40px'} ml='50px' fontWeight={'bold'} fontSize={'2xl'}>Feature management</Text>
                            <Text ml={'62px'} mt='20px' textAlign={'left'} w='80%' fontSize={'sm'}>Remotely manage and experiment on features server-side in your apps.</Text>

                    
                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/4ceec6408a0e94ed5e22.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>SDKs in 10 programming languages</Text>



                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/4ceec6408a0e94ed5e22.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Advanced audience targeting</Text>


                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/4ceec6408a0e94ed5e22.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Cached data files keep your app fast</Text>

                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/4ceec6408a0e94ed5e22.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Robust community and docs</Text>

                    

                            <Button borderRadius={'60px'} mt='150px' w={'35%'} color={'white'} bg='#0037ff'>Request pricing</Button>


                         </Box>

                         {/* 5th box */}

                        <Box m={'auto'}  w='32%' h="100%" bg={'#f6f6f6'}>

                        <Box bg={'#3be081'} w='100%' h={'10px'}></Box>
                    
                            <Img w={'10%'} ml='60px' mt={'50px'} src="https://www.optimizely.com/globalassets/02.-global-images/product-icons/light-background/opt-product_icon_50px_light_commercecloud.svg" />
                            <Text mt={'-40px'} ml='-50px' fontWeight={'bold'} fontSize={'2xl'}>Commerce</Text>
                            <Text ml={'62px'} mt='20px' textAlign={'left'} w='80%' fontSize={'sm'}>Run multiple shops, inventory and a catalog online and/or offline.</Text>

                    
                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/208cbbacde01c3ae5f73.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Multi-site & multi-lingual</Text>



                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/208cbbacde01c3ae5f73.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Visitor targeting</Text>


                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/208cbbacde01c3ae5f73.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Project collaboration</Text>

                            <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/208cbbacde01c3ae5f73.svg"  />
                            <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Inventory and order management</Text>

                    

                            <Button borderRadius={'60px'} mt='150px' w={'35%'} color={'white'} bg='#0037ff'>Request pricing</Button>
                            
                        </Box>

                            {/* 6th */}
                        <Box m={'auto'} color='white'  w='32%' h="100%" bg={'#080736'}>
                            <Heading textAlign={'left'} fontSize='4xl' mt={'45px'} ml='50px'>Need more?</Heading>

                            <Text ml='50px' textAlign={'left'} mt={'25px'} fontSize='lg' w={'85%'}>No matter your tech stack or scale, we are here to help optimize your digital experiences.</Text>

                            <Button borderRadius={'60px'} mt='50px' ml='-180px' w={'35%'} color={'white'} bg='#0037ff'>see add-ons</Button>
                            <Box display={'flex'} mt='150px'>
                                <Text ml={'50px'}>Not sure where to start?</Text>
                                <Link ml={'75px'}>Contact us</Link>

                            </Box>
                            
                            
                        </Box>


                     </Box>

                     <Footer />
           
        </Box>
    )
}
export default Plans;