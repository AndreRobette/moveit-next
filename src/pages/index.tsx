import React from "react";
import { GetServerSideProps } from 'next';

import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { Container, ContentLeft, ContentRight, Section } from "../styles/pages/styles"

import Head from 'next/head';
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number
}

export default function Home(props: IHomeProps) {

  return (
    <ChallengesProvider level= {props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted} >
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <Section>
            <ContentLeft >
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </ContentLeft>

            <ContentRight>
              <ChallengeBox />
            </ContentRight>
          </Section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

