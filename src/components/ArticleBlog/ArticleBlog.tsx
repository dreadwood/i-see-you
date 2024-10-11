import SocialLinks from '@/components/SocialLink/SocialLink'
import Button from '@/UI/Button/Button'
import Title from '@/UI/Title/Title'

import styles from './ArticleBlog.module.scss'
import { IArticleBlog } from '@/services/strapi/types'
import {
  getStrapiFileData,
  getStrapiMultiFileData
} from '@/services/strapi/utils'

const socialLinks = [
  {
    id: 1,
    label: 'поделиться в ',
    url: '#',
    icon: 'telegram'
  },
  {
    id: 2,
    label: 'поделиться в ',
    url: '#',
    icon: 'instagram'
  },
  {
    id: 3,
    label: 'поделиться в ',
    url: '#',
    icon: 'facebook'
  },
  {
    id: 4,
    label: 'поделиться в ',
    url: '#',
    icon: 'vk'
  }
]

interface ArticleBlogProps {
  article: IArticleBlog
}

export default function ArticleBlog({
  article
}: ArticleBlogProps): JSX.Element {
  return (
    <section>
      <div className={styles.wrp}>
        <Title text={article.articleTitle} as="h1" />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: article.firstText.split('\n').join('<br>')
          }}
        />

        <div className={styles.illustration}>
          {article.articleImages?.data &&
            article.articleImages.data.map((it) => {
              const filePhoto = getStrapiMultiFileData(it)

              return (
                <picture key={filePhoto.url}>
                  <img src={filePhoto.url} alt="" />
                </picture>
              )
            })}
        </div>

        {article.secondText && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: article.secondText.split('\n').join('<br>')
            }}
          />
        )}

        <div className={styles.info}>
          {article.author && article.author + ' • '}
          {article.date}
        </div>

        <div className={styles.social}>
          <h3 className={styles.socialTitle}>Поделиться</h3>
          <SocialLinks social={socialLinks} style="gray" />
        </div>

        <div className={styles.controls}>
          <Button
            as="backButton"
            text="Назад"
            size="size2"
            iconLeft="btn-arrow-left"
          />
          <Button
            as="link"
            link="/"
            text="Вернуться на главную"
            color="ghost"
            size="size2"
          />
        </div>
      </div>
    </section>
  )
}
