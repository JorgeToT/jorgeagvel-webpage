import { Container, Heading, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Posts = () => {
  return (
    <Layout title={'Posts'}>
      <Container>
        <Section delay={0.4}>
          <Divider my={5} />
          <Heading as="h2" fontSize={18} mb={4} variant="section-title">
            Posts
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
