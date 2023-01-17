import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({ Component, pageprops, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageprops} key={router.route} />
        </AnimatePresence>
      </Layout>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-12S93LP2TY"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        
        gtag('config', 'G-12S93LP2TY');
      </script>
    </ChakraProvider>
  )
}

export default Website
