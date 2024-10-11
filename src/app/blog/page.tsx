import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview'
import Title from '@/UI/Title/Title'
import ScrollTopButton from '@/UI/ScrollTopButton/ScrollTopButton'
import Button from '@/UI/Button/Button'
import Pagination from '@/UI/Pagination/Pagination'
import { fetchGetBlogData } from '@/services/strapi/fetch'
import { StrapiBlogConfig } from '@/services/strapi/config'

import styles from './page.module.scss'

export default async function BlogPage(): Promise<JSX.Element> {
  const articles = await fetchGetBlogData(StrapiBlogConfig.blog)

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.wrp}>
          <Title text={'Наш <span>блог</span>'} as="h1" />

          <div className={styles.list}>
            {articles.map((it) => (
              <ArticlePreview article={it} key={it.id} />
            ))}
          </div>

          {/* <Pagination className={styles.pagination} /> */}
          <div className={styles.controls}>
            <Button
              className={styles.btn}
              as="link"
              link="/"
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
