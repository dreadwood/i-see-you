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
import ListArticle from '@/components/ListArticle/ListArticle'

export default async function Landing(): Promise<JSX.Element> {
  return (
    <>
      <Header />
      <main>
        <Hero isDark />
        <CourseDescription />
        <WhyNeed isDark />
        <AboutAuthor />
        <Curators isDark />
        <Program />
        <Feedback isDark />
        <AboutCourse />
        <ListArticle title="Наш <span>блог</span>" isBlogLink />
        <Registration isDark />
      </main>
      <Footer isDark />
      <ScrollTopButton />
    </>
  )
}
