import Description from '@/components/Description/Description'
import AboutCourse from '@/components/AboutCourse/AboutCourse'
import AboutAuthor from '@/components/AboutAuthor/AboutAuthor'
import Footer from '@/components/Footer/Footer'
import Registration from '@/components/Registration/Registration'
import Feedback from '@/components/Feedback/Feedback'
import WhyNeed from '@/components/WhyNeed/WhyNeed'
import Hero from '@/components/Hero/Hero'
import Header from '@/components/Header/Header'
import Curators from '@/components/Curators/Curators'
import Program from '@/components/Program/Program'
import VideoModal from '@/components/VideoModal/VideoModal'
import ScrollTopButton from '@/UI/ScrollTopButton/ScrollTopButton'

import styles from './page.module.scss'

export default function Landing(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Description />
        <WhyNeed />
        <AboutAuthor />
        <Curators />
        <Program />
        <Feedback />
        <AboutCourse />
        <Registration />
        <ScrollTopButton />
        <VideoModal />
      </main>
      <Footer />
    </>
  )
}
