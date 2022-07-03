import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            facilisis id elit vel commodo. Cras viverra faucibus luctus. Proin
            eu dignissim turpis, quis convallis ante. Pellentesque ac placerat
            nisl. Curabitur varius libero nec faucibus finibus. Nam vel odio et
            purus semper interdum eget ut sapien. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Curabitur in risus et purus aliquam faucibus vel eu mi. Sed lacus
            sapien, elementum a condimentum sed, facilisis eu nisl. Curabitur
            augue metus, interdum non dignissim eget, maximus et arcu. Vivamus
            molestie luctus dui, et vestibulum felis blandit vitae. Suspendisse
            bibendum massa nec nisi accumsan maximus. Nam nisi augue, maximus id
            arcu non, finibus sollicitudin lacus. Aliquam at erat nec odio
            egestas eleifend. Aliquam non dolor lectus. Pellentesque sed
            convallis dui.
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
      </Container>
    </Layout>
  )
}

export default Page
