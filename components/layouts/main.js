import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Navbar } from '../navbar'
import ContactForm from '../contactForm'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jorge Aguilar - Homepage</title>
        <link rel="icon" href="/images/jletter.png" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      <ContactForm />
      </Container>

    </Box>
  )
}

export default Main
