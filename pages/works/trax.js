import { Container, Link, List, ListItem, Badge } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title={'Trax'}>
      <Container>
        <Title>
          Trax <Badge>2022</Badge>
        </Title>
        <P>Hello</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://music-app-jorgetot.vercel.app/"
              target={'_blank'}
            >
              https://music-app-jorgetot.vercel.app/signin
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/MacOS/Linux/Android/iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, NextJS, PostgreSQL, Prisma, Chakra-UI</span>
          </ListItem>
        </List>
        <WorkImage src={'/images/works/trax.png'} alt="Trax" />
      </Container>
    </Layout>
  )
}

export default Work
