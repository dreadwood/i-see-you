import Title from '@/UI/Title/Title'
import Button from '@/UI/Button/Button'
import styles from './ListArticle.module.scss'
import ArticlePreview from '@/components/ArticlePreview/ArticlePreview'
import { articles } from '@/mocks/articles'

interface ListArticleProps {
  title: string
  isBlogLink?: boolean
}

export default async function ListArticle({
  title,
  isBlogLink
}: ListArticleProps): Promise<JSX.Element> {
  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.top}>
          <Title text={title} as="h1" />
          {isBlogLink && (
            <Button
              className={styles.btn}
              text="Читать всё"
              color="ghost"
              size="size2"
              iconRight="btn-arrow-right"
            />
          )}
        </div>
        <div className={styles.content}>
          {articles.slice(0, 3).map((it) => (
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
      </div>
    </section>
  )
}
