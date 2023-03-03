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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-12S93LP2TY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          
          gtag('config', 'G-12S93LP2TY');
        `}
      </Script>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/24173053.js"
      ></Script>
    </ChakraProvider>
  )
}

export default Website
