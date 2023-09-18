import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Fira Code', monospace;
  }
`

function MyApp({ Component, pageProps }: AppProps) 

{
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
