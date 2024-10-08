import SocialLinks from '@/components/SocialLink/SocialLink'
import Button from '@/UI/Button/Button'
import Title from '@/UI/Title/Title'

import styles from './ArticleBlog.module.scss'

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

type Article = {
  title: string
  fisrtPart: string
  secondPart?: string
  author?: string
  date: string
}

interface ArticleBlogProps {
  article: Article
}

export default function ArticleBlog({
  article
}: ArticleBlogProps): JSX.Element {
  return (
    <section>
      <div className={styles.wrp}>
        <Title text={article.title} as="h1" />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: article.fisrtPart.split('\n').join('<br>')
          }}
        />

        <div className={styles.illustration}>
          <picture>
            <img src="https://loremflickr.com/1200/720" alt="" />
          </picture>
          <picture>
            <img src="https://loremflickr.com/1280/720" alt="" />
          </picture>
          <picture>
            <img src="https://loremflickr.com/1200/720" alt="" />
          </picture>
        </div>

        {article.secondPart && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: article.secondPart.split('\n').join('<br>')
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
          <Button text="Назад" size="size2" iconLeft="btn-arrow-left" />
          <Button text="Вернуться на главную" color="ghost" size="size2" />
        </div>
      </div>
    </section>
  )
}
