import Title from '@/UI/Title/Title'
import Button from '@/UI/Button/Button'
import styles from './ListArticle.module.scss'
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview'
import { fetchGetBlogData } from '@/services/strapi/fetch'
import { StrapiBlogConfig } from '@/services/strapi/config'

interface ListArticleProps {
  title: string
  config: (typeof StrapiBlogConfig)[keyof typeof StrapiBlogConfig]
  isBlogLink?: boolean
}

export default async function ListArticle({
  title,
  config,
  isBlogLink
}: ListArticleProps): Promise<JSX.Element> {
  const articles = await fetchGetBlogData(config)

  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.top}>
          <Title text={title} as="h1" />
          {isBlogLink && (
            <Button
              className={styles.btn}
              text="Читать всё"
              as="link"
              link={'/blog'}
              color="ghost"
              size="size2"
              iconRight="btn-arrow-right"
            />
          )}
        </div>
        <div className={styles.content}>
          {articles.map((it) => (
            <ArticlePreview article={it} key={it.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
