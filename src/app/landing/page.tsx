'use client'

import { Fade } from 'react-awesome-reveal'
import Description from './components/Description/Description'
import AboutCourse from './components/AboutCourse/AboutCourse'
import styles from './page.module.scss'
import AboutAuthor from './components/AboutAuthor/AboutAuthor'
import Footer from './components/Footer/Footer'
import Registration from './components/Registration/Registration'
import Feedback from './components/Feedback/Feedback'
import WhyNeed from './components/WhyNeed/WhyNeed'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Curators from './components/Curators/Curators'
import Program from './components/Program/Program'
import ScrollTopButton from './UI/ScrollTopButton/ScrollTopButton'
import VideoModal from './components/VideoModal/VideoModal'

export default function Landing(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Fade cascade triggerOnce damping={0.1}>
          <Description />
          <WhyNeed />
          <AboutAuthor />
          <Curators />
          <Program />
        </Fade>
        <Feedback />
        <Fade cascade triggerOnce damping={0.1}>
          <AboutCourse />
          <Registration />
          <ScrollTopButton />
        </Fade>
        <VideoModal />
      </main>
      <Footer />
    </>
  )
}
