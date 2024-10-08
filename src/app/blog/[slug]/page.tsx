import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ScrollTopButton from '@/UI/ScrollTopButton/ScrollTopButton'
import ArticleBlog from '@/components/ArticleBlog/ArticleBlog'
import ListArticle from '@/components/ListArticle/ListArticle'
import { article } from '@/mocks/article'

import styles from './page.module.scss'

export default function Landing(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <ArticleBlog article={article} />
        <ListArticle title="Последние <span>посты</span>" />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
