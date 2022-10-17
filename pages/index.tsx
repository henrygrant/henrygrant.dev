import type { NextPage } from 'next'
import Head from 'next/head'
// @ts-ignore
import TypeIt from "typeit-react" 
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faStrava, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Heading = styled.h1`
  font-weight: normal;
  margin: 0 0 .3rem;
`

const Subtext = styled.h2`
  height: 31px;
  font-weight: normal;
  margin: 0 0 .8rem;
  display: flex;
  justify-content: center;
`

const Links = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-between
`

const typeAnimation = (inst: any) => {
  inst
    .type("Front End Developer")
    .pause(1500)
    .move(-10, {delay: 100})
    .delete(10)
    .type("Back End")
    .move(null, {to: "END"})
    .pause(1500)
    .move(-10, {delay: 100})
    .delete(8)
    .type("Mobile App")
    .move(null, {to: "END"})
    .pause(1500)
    .delete(20)
    .pause(250)
    .type("Devops Engineer")
    .pause(1500)
    .delete(15)
    .pause(250)
    .delete(15)
    .pause(250)
    .type("Solutions Architect")
    .pause(1500)
    .delete(21)
    .type("Full Stack Engineer");
  return inst
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Henry Grant</title>
        <meta name="description" content="Henry Grant - Full Stack Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <InnerContainer>
          <Heading>Henry Grant</Heading>
          <Subtext>
            <TypeIt getBeforeInit={typeAnimation} />
          </Subtext>
          <Links>
            <a href="https://www.linkedin.com/in/henry-grant-662227169/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.strava.com/athletes/1542509" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faStrava} size="2x" />
            </a>
            <a href="https://www.instagram.com/henry_grant_/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/henrygrant" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:me@henrygrant.dev" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </Links>
        </InnerContainer>
      </MainContainer>
    </div>
  )
}

export default Home
