import { FormLabel, Button, Heading } from '@chakra-ui/react'
import Section from './section'
import { useRouter } from 'next/router'

const ContactForm = () => {
  const router = useRouter()
  const sendForm = e => {
    e.preventDefault()
    router.push('/thanks')
  }
  return (
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Contact me
      </Heading>
      <FormLabel>First name</FormLabel>
      <Button onClick={sendForm}>Send</Button>
    </Section>
  )
}

export default ContactForm
