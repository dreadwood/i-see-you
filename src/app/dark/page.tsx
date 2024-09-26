import CourseDescription from '@/components/CourseDescription/CourseDescription'
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
import ScrollTopButton from '@/UI/ScrollTopButton/ScrollTopButton'

import styles from './page.module.scss'

export default async function Landing(): Promise<JSX.Element> {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero isDarkImg />
        <CourseDescription />
        <WhyNeed isDarkImg />
        <AboutAuthor />
        <Curators isDarkImg />
        <Program />
        <Feedback isDarkImg />
        <AboutCourse />
        <Registration isDarkImg />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
