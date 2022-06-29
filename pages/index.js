import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} align="center" color="white" mb={6}>
        Hello, I&apos;m a full-stack developer based in México.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-tittle">
            Jorge Aguilar
          </Heading>
          <p>Actuary student | Full-stack developer | Data analyst </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
