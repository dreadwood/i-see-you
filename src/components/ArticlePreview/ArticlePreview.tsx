import Icon from '@/components/Icon/Icon'
import styles from './ArticlePreview.module.scss'
import { IArticleBlogWithId } from '@/services/strapi/types'
import { getStrapiFileData } from '@/services/strapi/utils'

interface ArticlePreviewProps {
  article: IArticleBlogWithId
}

export default function ArticlePreview({
  article
}: ArticlePreviewProps): JSX.Element {
  const filePhoto = getStrapiFileData(article.previewImage)

  return (
    <article className={styles.card}>
      {filePhoto && (
        <picture>
          <img className={styles.img} src={filePhoto.url} alt="" />
        </picture>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{article.previewTitle}</h3>
        <p className={styles.text}>{article.previewText}</p>

        <div className={styles.bottom}>
          <div className={styles.info}>
            {article.author} • {article.date}
          </div>
          {article.socialCount && (
            <div className={styles.count}>
              <Icon name="share" width={16} height={16} />
              {article.socialCount}
            </div>
          )}
        </div>

        <a
          className={styles.link}
          href={`/blog/${article.url}`}
          aria-label={'Открыть статью'}
        ></a>
      </div>
    </article>
  )
}
