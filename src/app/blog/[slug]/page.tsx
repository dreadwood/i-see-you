import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ScrollTopButton from '@/UI/ScrollTopButton/ScrollTopButton'
import ArticleBlog from '@/components/ArticleBlog/ArticleBlog'
import ListArticle from '@/components/ListArticle/ListArticle'
import { notFound } from 'next/navigation'
import { StrapiBlogConfig } from '@/services/strapi/config'
import { fetchGetArticleData } from '@/services/strapi/fetch'

import styles from './page.module.scss'

interface ArticlePageParams {
  params: { slug: string }
}

export default async function ArticlePage({
  params
}: ArticlePageParams): Promise<JSX.Element> {
  const article = await fetchGetArticleData(params.slug)

  if (!article) {
    return notFound()
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <ArticleBlog article={article} />
        <ListArticle
          title="Последние <span>посты</span>"
          config={StrapiBlogConfig.last}
        />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  )
}
