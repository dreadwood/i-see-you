import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview'
import Title from '@/UI/Title/Title'
import ScrollTopButton from '@/UI/ScrollTopButton/ScrollTopButton'
import Button from '@/UI/Button/Button'
import Pagination from '@/UI/Pagination/Pagination'
import { articles } from '@/mocks/articles'

import styles from './page.module.scss'

const title = 'Наш <span>блог</span>'

export default function Landing(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.wrp}>
          <Title text={title} as="h1" />

          <div className={styles.list}>
            {articles.map((it) => (
              <ArticlePreview
                title={it.title}
                text={it.text}
                author={it.author}
                date={it.date}
                count={it.count}
                key={it.id}
              />
            ))}
          </div>

          <Pagination className={styles.pagination} />
          <div className={styles.controls}>
            <Button
              className={styles.btn}
              text="На главную"
              size="size2"
              iconLeft="btn-arrow-left"
            />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
