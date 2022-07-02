import { ColorModeScript } from '@chakra-ui/core'
import NextDocument, { HTMÑ, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </body>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
