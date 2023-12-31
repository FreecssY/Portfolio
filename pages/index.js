import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg ="red" p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack, developer based in France
            </Box>
            
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        MHAND Youssef
                    </Heading>
                    <p>Digital portfolio (Developer / Designer / Photographer)</p>
                </Box>
            </Box>
        </Container>
    )
}
    
export default Page;
