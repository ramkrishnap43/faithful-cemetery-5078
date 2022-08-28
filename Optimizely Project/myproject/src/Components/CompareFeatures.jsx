import {Box, Text,Img , Button} from "@chakra-ui/react"
import Footer from "./Footer";

function CompareFeatures(){

    return (
        <Box>
            <Box w={'95%'} m='auto' h='950px' mt={'50px'} mb='100px' >
                <Text textAlign={'left'} fontSize='4xl' fontWeight={'bold'} _hover={{color : "blue"}} ml='100px' mt={'60px'}
                >Compare features</Text>

                <Box w={'95%'} h='800px'  m='auto' display={'flex'} mt='50px'>
                    <Box w={'24%'} h='auto'  bg='#f6f6f6'>
                        <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Start </Text>
                        <Text mt='-25px' ml={'-40px'}>includes...</Text>
                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Calendar</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Spreadsheet planning</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Monthly editorial calendar</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Campaign timeline/Gnatt view</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Kanban board</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Unlimited views</Text>


                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Project management</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Campaigns/briefs</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Tasks and task management</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Flexible workflows</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Alerts and notifications</Text>



                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Usage</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Up to 5 users</Text>


                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Services</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Access to KnowledgeBase</Text>



                        <Button borderRadius={'60px'} mt='60px' w={'35%'} color={'white'} bg='#0037ff'>Sign up now</Button>
                    </Box>




                    {/* 2nd */}

                    <Box w={'24%'}  m='auto' h='auto' bg='#f6f6f6'>
                        <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Manage </Text>
                        <Text mt='-25px' ml={'70px'}>includes Start, plus...</Text>
                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Intake</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Dynamic intake forms</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Request dashboard</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Smart routing rules</Text>

                        

                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Capacity</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Resource and capacity planning</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Utilization and time tracking</Text>




                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Asset proofing</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Multi-format file support</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Annotations and commentingext</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Unlimited stock images</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Adobe Creative Cloud connector</Text>


                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Usage</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Unlimited "Guest" users</Text>

                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Services</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Standard customer support</Text>



                        <Button borderRadius={'60px'} mt='60px' mb={'50px'} w={'35%'} color={'white'} bg='#0037ff'>Start free trial</Button>




                    </Box>




                    {/* 3rd */}

                
                    <Box w={'24%'}  m='auto' h='auto' bg='#f6f6f6'>


                        <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Create </Text>
                        <Text mt='-25px' ml={'70px'}>includes Manage, plus...</Text>
                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Ideation</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Keyword recommendations</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Competitive research</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Share-of-voice insights</Text>

                        

                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Content creation</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Rich-text editor</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>MS 365 connector</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Live web proofing</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Structured content</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Content optimizer</Text>




                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Publishing</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Content scheduling/publishing</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>CMS connectors</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Social connectors</Text>

                        


                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Analytics</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Web content analytics</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Operational efficiency analytics</Text>

                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Usage</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Minimum 20 users</Text>


                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Services</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Premium customer support</Text>



                        <Button borderRadius={'60px'} mt='60px' mb={'10px'} w={'35%'} color={'white'} bg='#0037ff'>Contact us</Button>



                    </Box>




                    {/* 4th */}

                    <Box w={'24%'}  m='auto' h='auto' bg='#f6f6f6'>


                        <Text textAlign={'left'} ml='45px' mt={'50px'} fontSize={'xl'} fontWeight='bold'>Orchestrate</Text>
                        <Text mt='-25px' ml={'150px'}>includes Create, plus...</Text>
                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Security</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>SSO + two-factor authentication</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Custom role management</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Multiple instance architecture</Text>

                        

                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Budgeting</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Budget allocation</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>nvoice management</Text>




                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Digital asset management (DAM)</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Library (digital asset manager)</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Integrated workflows</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Asset collections</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Asset linage</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Unlimited storage</Text>


                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Integrations</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Access to Welcome App Marketplace</Text>

                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Usage</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Minimum 30 users</Text>

                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Unlimited API calls</Text>



                        <Text ml='45px' mt={'15px'}  textAlign={'left'} fontWeight='bold'>Services</Text>
                        <Img ml='60px' mt={'15px'} src="https://www.optimizely.com/dist/786373202e4ca405a1c1.svg"  />
                        <Text ml={'90px'} mt='-20px' textAlign={'left'} fontSize={'sm'}>Named Success Manager</Text>

                        



                        <Button borderRadius={'60px'} mt='60px' mb={'10px'} w={'35%'} color={'white'} bg='#0037ff'>Contact us</Button>





                    </Box>










                    
                </Box>
                

            </Box>

            <Footer />

        </Box>
    )
}
export default CompareFeatures;