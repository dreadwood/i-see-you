import Icon from '@/components/Icon/Icon'
import styles from './ArticlePreview.module.scss'

interface ArticlePreviewProps {
  title?: string
  text?: string
  img?: string
  author?: string
  date?: string
  count?: number
}

export default function ArticlePreview({
  title = 'Тест текст текст',
  text = 'Это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой.',
  img = 'https://loremflickr.com/1280/720',
  author = 'John Doe',
  date = '30 Сентября 2024',
  count = 321
}: ArticlePreviewProps): JSX.Element {
  return (
    <article className={styles.card}>
      <picture>
        <img className={styles.img} src={img} alt="" />
      </picture>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>

        <div className={styles.bottom}>
          <div className={styles.info}>
            {author} • {date}
          </div>
          <div className={styles.count}>
            <Icon name="share" width={16} height={16} />
            {count}
          </div>
        </div>

        <a className={styles.link} href="#" aria-label={'Открыть статью'}></a>
      </div>
    </article>
  )
}
