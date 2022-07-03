import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  List,
  ListItem,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.sm">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          align="center"
          mb={6}
        >
          Hello, I&apos;m a full-stack developer based in México.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jorge Aguilar
            </Heading>
            <p>Actuary student | Full-stack developer | Data analyst </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src="/images/jorge.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I have a great ability to analyze, and to solve problems. I have
            experience analyzing data with Python and R. I also have experience
            creating web applications (React, Next JS) and management databases
            SQL and NoSQL. I&apos;m passionate to write code, and learn new
            technologies, if a obstacle presents in my way, i always do the
            necessary to solve it.
          </Paragraph>
          <Box align="center" my={4} py={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Toluca, México
          </BioSection>
          <BioSection>
            <BioYear>2018 to present</BioYear>
            Actuary student
          </BioSection>
          <BioSection>
            <BioYear>2022 (Jan - May)</BioYear>
            Full-stack developer at Innovaccion Virtual by Microsoft
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Things I like
          </Heading>
          <Paragraph>
            Music, Play Videogames, Programing, Machine Learning
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/JorgeToT" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @JorgeToT
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/JorgeAgVel" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @JorgeAgVel
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/jorge_agvel/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @jorge_agvel
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jorge-aguilar-vel%C3%A1zquez-0995761b5/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Jorge Aguilar
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
