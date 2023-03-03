import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import Script from 'next/script'

const Website = ({ Component, pageprops, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageprops} key={router.route} />
        </AnimatePresence>
      </Layout>
      {/* <!-- Start of HubSpot Embed Code --> */}
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/24173053.js"
      ></Script>
      {/* <!-- End of HubSpot Embed Code --> */}
    </ChakraProvider>
  )
}

export default Website
