import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbTrax from '../public/images/works/trax.png'
import thumbTravelJournal from '../public/images/works/travel-journal.png'
import thumbAirbnb from '../public/images/works/airbnb-experience-clone.png'

const Work = () => {
  return (
    <Layout>
      <Container maxW="container.sm">
        <Section delay={0.4}>
          <Divider my={5} />
          <Heading as="h2" fontSize={18} mb={4} variant="section-title">
            Works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="trax"
              title="Trax Music App"
              thumbnail={thumbTrax}
            >
              A music app based in Spotify design, created with NextJS and
              Chakra UI.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={18} mb={4} variant="section-title">
            Old Works
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="travel-journal"
              title="Travel Journal"
              thumbnail={thumbTravelJournal}
            >
              A travel journal website created with React.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="airbnb"
              title="Airbnb Experience Clone"
              thumbnail={thumbAirbnb}
            >
              A clone of Airbnb's website, created with React.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
