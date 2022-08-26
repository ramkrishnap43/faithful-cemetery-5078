import {
    Box,
     Heading,
     Text,
     Img,
     Button,
     Link,
     Input,
     Textarea,
     Select,
    
}from '@chakra-ui/react';
import Footer from "./Footer"
import Navbar from "./Navbar"


function Home(){

    return (
        <Box>
            <Navbar />
        <Box w={"100%"} h="600px"  display={'flex'}>
            <Box w={'40%'} >
                <Heading textAlign={'left' } mt='140px' ml='120px' w={'55%'} fontSize={'7xl'}  fontWeight={'bold'}>Unlock digital potential</Heading>
                <Text mt={'30px'} ml={'120px'} textAlign={'left'} w='70%' >Creating digital experiences that transform your company takes data-driven decisions, continued experimentation and constant invention. Optimizely Digital Experience Platform helps you unlock your digital potential.</Text>
            </Box>




            <Box w={'60%'}>
                <Img w={'90%'} mt='50px' src='https://www.optimizely.com/contentassets/9c67aa9eed2e4b6fa8b8a802b673fb5e/homepage_illustration_new.svg' />
            </Box>

            </Box>

           

            <Box w='90%' m={'auto'} h={'450px'} >
                <Text fontSize={'3xl'} textAlign='left' mt={'60px'} ml='90px' fontWeight={'bold'}>Trusted by 9,000+ businesses and millions of happy customers</Text>
                
                <Box  w={'80%'}  m={'auto'} display='grid' mt={'30px'} gridTemplateColumns={'repeat(4, 1fr)'} gap='95px'>
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/ebay_logo.svg'  />
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/dolby_logo_2019.svg' />
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/sme.svg'/>
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/new_era_logo.svg' />
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/pizza_hut_logo.svg'/>
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/fjall_raven_logo.svg'/>
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/filippa-k-wien.png?width=200&height=130'/>
                    <Img w={'50%'} src='https://www.optimizely.com/globalassets/02.-global-images/customer-logos/moco-food-logo-blue.svg'/>

                </Box>

                    <Button w={'18%'} mt='20px' h={'50px'} borderRadius={'55px'} bg={'#ccd7ff'} color={'blue'}
                    _hover={{backgroundColor:"blue" , color:'white'}}
                    >See our customer stories</Button>

            </Box>

            <Box  w='100%' h={'500px'} display='flex'>
                <Box w={'30%'} border='1px solid black' bg={'#080736'} h='100%'>
                    <Text fontWeight='bold' fontSize={'3xl'} color={'white'} mt='25px'>Digital Experience Platform</Text>
                </Box>
                
                <Box color={'white'} w={'70%'} bg='#0037ff'>
                    <Text mt={'90px'} ml='-310px' fontSize={'larger'} fontWeight='bold'>DXP</Text>
                    <Box textAlign={'left'} ml='355px' w={'55%'} fontWeight='bold' fontSize={'4xl'}>Confidently create and optimize with Optimizely Digital Experience Platform</Box>
                    <Text mt={'15px'} ml='355px' textAlign={'left'} w={'58%'} mb='40px'>Transform digital experience creation with Optimizely Digital Experience Platform, an open, extensible platform providing one consistent foundation behind every digital touch point.</Text>
                    <Link _hover={{color:"black"}} ml={'-40px'} >Learn about our Digital Experience Platform </Link>
                </Box>
            </Box>



                    <Box w={'100%'} h='300px' bg='#861dff' color={'white'} p='15px' display={'flex'} >

                        <Box w={'32%'}  h='100%' >
                            <Link ml={'-220px'} fontSize={'2xl'} fontWeight='bold' >Content</Link>
                            <Text  textAlign={'left'} w='75%' ml='85px'>Easily create, tailor and scale content on a best-in-class enterprise CMS.</Text>
                            <Box mt={'15px'} color={'white'} textAlign={'left'} ml='75px' >
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>CMS</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Headless</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Approval workflows</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Media management</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Authoring & layout</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Project management</Button>
                            </Box>
                        </Box>

                        {/* second box */}


                        <Box w={'32%'}  h='100%' >
                            <Link ml={'-190px'} fontSize={'2xl'} fontWeight='bold' >Commerce</Link>
                            <Text  textAlign={'left'} w='75%' ml='85px'>Run multiple shops, inventory and a catalog online and/or offline.</Text>
                            <Box mt={'15px'} color={'white'} textAlign={'left'} ml='75px' >
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>B2B</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>B2C</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>PIM</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Targeting</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Multisite</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Catalog management</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Customer specific pricing</Button>
                            </Box>
                        </Box>


                        {/* Third box */}

                        <Box w={'32%'}  h='100%' >
                            <Link ml={'-165px'} fontSize={'2xl'} fontWeight='bold' >Optimization</Link>
                            <Text  textAlign={'left'} w='75%' ml='85px'>Use AI to test new features and personalize every touchpoint.</Text>
                            <Box mt={'15px'} color={'white'} textAlign={'left'} ml='75px' >
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Web A/B testing</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Personalization</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Feature management</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Data</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Email</Button>
                                <Button _hover={{color:"#861dff" , bg:'white'}} ml={'5px'} mt='15px' borderRadius={'26px'} h='30px' border={'1px solid white'}  bg='#861dff'>Recommendations</Button>
                            </Box>
                        </Box>
                    </Box>



                    <Box  w='90%' h={'450px'} m='auto'>

                        <Heading textAlign={'left'} mt='50px' ml={'20px'} mb="80px" fontSize='4xl'>Explore our latest insights</Heading>

                        <Box w={'100%'} h='300px'  mt={'25px'} ml={'20px'} display='flex'>
                            <Box w='33%' textAlign='left' >
                                <Link fontSize={'xl'} _hover={{ color:'blue'}} fontWeight={'bold'} mt='20px'>Digital Experiences</Link>
                                <Text mt={'25px'}  mb={'30px'} >Leading digital strategies wrap themselves around every customer and conform to their behaviors, preferences and history. They embrace customers in a context that evolves.</Text>
                                <Link fontWeight={'bold'} _hover={{ color:'blue'}}>DXP insights</Link>
                            </Box>

                            <Box w='33%' textAlign='left' >
                                <Link fontSize={'xl'} _hover={{ color:'blue'}} fontWeight={'bold'} mt='20px'>Experimentation</Link>
                                <Text mt={'25px'}  mb={'30px'} >With an experimentation platform that gives you space to try new approaches and respond to the needs and behaviors of your audience, you can test instead of guess.</Text>
                                <Link fontWeight={'bold'} _hover={{ color:'blue'}}>Experimentation insights</Link>
                            </Box>


                            <Box w='33%' textAlign='left' >
                                <Link fontSize={'xl'} _hover={{ color:'blue'}} fontWeight={'bold'} mt='20px'>Content management</Link>
                                <Text mt={'25px'}  mb={'30px'} >Learn how successful companies are in a constant state of invention and empower their teams to blend science and creativity to create compelling content experiences.</Text>
                                <Link fontWeight={'bold'} _hover={{ color:'blue'}}>Content management insights</Link>
                            </Box>
                            
                        </Box>
                    </Box>

                    {/*  Box */}

                    <Box  w='90%' h={'550px'} m='auto' display={'flex'} ml='100px' cursor={'pointer'}>
                        <Box w='32%'  h='100%' bg='#080736' cursor={'pointer'}>

                            <Img w={'40%'} ml='45px' mt={'30px'} src='https://www.optimizely.com/contentassets/90461ceea0184877b2c559273cd1da58/mazda_logo.svg' />
                            <Text color={'#ffcc00'} fontSize='5xl' fontWeight={'bold'} ml='-230px' mt={'50px'}>200%</Text>
                            <Text ml={'-140px'} color='white'>Increased engagement on site</Text>

                            <Text color={'#ffcc00'} fontSize='5xl' fontWeight={'bold'} ml='-250px' mt={'50px'}>5m+</Text>
                            <Text ml={'-60px'} color='white'>Unique visitors within 2 months of launch</Text>
                            
                       </Box>

                        {/* 2nd */}
                        <Box w='31%'  h='100%' bg='#861dff'  cursor={'pointer'}>
                            
                            <Img w={'40%'} ml='45px' mt={'30px'} src='https://www.optimizely.com/contentassets/90461ceea0184877b2c559273cd1da58/blue-apron_logo.svg' />
                            <Text color={'#ffcc00'} fontSize='5xl' fontWeight={'bold'} ml='-250px' mt={'50px'}>10X</Text>
                            <Text textAlign={'left'} ml={'50px'} color='white'>Increase in experiments run per month after adopting Optimizely</Text>

                            <Text color={'#ffcc00'} fontSize='5xl' fontWeight={'bold'} ml='-210px' mt={'50px'}>100%</Text>
                            <Text ml={'20px'} color='white'>number of product teams using experimentation</Text>


                        </Box>

                        {/* 3rd */}
                        <Box w='31%'  h='100%' bg='#0037ff'  cursor={'pointer'}>
                            
                            <Img w={'40%'} ml='45px' mt={'30px'} src='https://www.optimizely.com/contentassets/90461ceea0184877b2c559273cd1da58/farfetch_logo.svg' />
                            <Text color={'#ffcc00'} fontSize='5xl' fontWeight={'bold'} ml='-280px' mt={'50px'}>2X</Text>
                            <Text textAlign={'left'} ml={'40px'} w='80%' color='white'>Experimentation community has enlarged from 80 to 170 participants</Text>

                            <Text color={'#ffcc00'} fontSize='5xl' fontWeight={'bold'} ml='-215px' mt={'50px'}>20-50</Text>
                            <Text textAlign={'left'} ml={'40px'} w='80%' color='white'>Experiments running each month by the experimentation team</Text>


                        </Box>
                    </Box>


                <Box w={'85%'} h='800px' border={'1px solid black'} mt='15px' ml={'100px'} display='flex' >
                    
                    <Box w={'5%'} h='100%' bg='#0037ff'></Box>

                    <Box w={'45%'} h='100%' bg={'#080736'} color='white' textAlign={'left'}>

                        <Text fontSize={'3xl'} fontWeight={'bold'} w='60%' ml={'50px'} mt='60px'>Getting started with Optimizely</Text>
                        <Text w={'85.5%'} ml='50px' mt={'30px'}>Optimizely is known for content, commerce and optimization with our Digital Experience Platform (DXP). Millions of experiences are served with our platform every single day, helping organizations grow exponentially online. Ready to take your digital experiences to the next level?</Text>
                        <Text fontWeight={"bold"} ml='50px' mt={'20px'}>If you have questions about our products or services, our experts are here to help with:</Text>

                        <Box  w='60%' ml={'100px'} mt='30px'>
                            <ul>
                                <li>Technical requirements</li>
                                <li>Customized demos</li>
                                <li>Pricing information</li>
                                <li>Optimizely product capabilities</li>
                            </ul>
                        </Box>

                    </Box>

                 

                    <Box bg={"#3be081"} w='50%' h='100%'>

                        <Text ml={'50px'} mt='50px' fontWeight={"bold"} textAlign={'left'} fontSize={'2xl'} w='80%'>First, we need to know a couple of things about you</Text>

                        
                        
                        
                        <Box w={'90%'}  h={'480px'} m='auto' mt={'10px'}>
                                <Input mt={'20px'} w={'40%'}  mr={'80px'} placeholder="First Name" isRequired />
                                <Input mt={'20px'} w={'40%'}  placeholder='Last Name' isRequired  />
                            
                                <Input mt={'35px'}  w={'93%'} placeholder='Work Email' isRequired />

                                
                                <Input mt={'35px'} w={'40%'}  mr={'80px'} placeholder="Company" isRequired />
                                <Input mt={'35px'}  w={'40%'}  placeholder='Job Title' isRequired  />

                                <Box display={'flex'} ml='20px' mt={'35px'}>
                                    <Input  w={'42%'}  mr={'80px'}  placeholder="Phone number(optional)"  />
                                    <Select   w={'40%'}  >
                                        <option value='India'>India</option>
                                        <option value='Hong Kong'>Hong Kong</option>
                                        <option value='China'>China</option>
                                        <option value='Australia'>Australia</option>
                                        <option value='Russia'>Russia</option>
                                        <option value='America'>America</option>
                                        <option value='Japan'>Japan</option>
                                        <option value='Nepal'>Nepal</option>
                                        <option value='Bhutan'>Bhutan</option>

                                    </Select>
                                </Box>








                                <Text ml={'30px'} mb='20px' textAlign={'left'} mt={'35px'}>What products are you interested in? (optional)</Text>
                                <Textarea w={'90%'} border='1px solid black' h={'100px'}></Textarea>
                        </Box>
                        <Text textAlign={'left'} ml={'50px'} mt='10px'>Optimizely will store and process your personal data as described in our Privacy Policy. You can opt out at any time.Submit</Text>
                        <Button color={'white'} _hover={{bg:'#080736'}} bg='#0037ff' ml={'-410px'} mt='20px' w={'20%'} borderRadius='30px'>Submit</Button>



                    </Box>
                  

                </Box>








            <Footer />

            </Box>





































           





        
    )
}

export default Home;