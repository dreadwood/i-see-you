import { headerLinks } from '@/app/const'
import Title from '@/UI/Title/Title'
import SocialLinks from '@/components/SocialLink/SocialLink'
import { StrapiConfig } from '@/services/strapi/config'
import { fetchGetPageData } from '@/services/strapi/fetch'
import { AboutAuthorSection } from '@/services/strapi/types'
import { getStrapiFileData } from '@/services/strapi/utils'

import styles from './AboutAuthor.module.scss'

export default async function AboutAuthor(): Promise<JSX.Element> {
  const { title, quote, authorQuote, list, socialLinks, photo } =
    await fetchGetPageData<AboutAuthorSection>(StrapiConfig.aboutAuthor)

  const filePhoto = getStrapiFileData(photo)

  return (
    <section className={styles.section} id={headerLinks[1].htmlId}>
      <div className={styles.wrp}>
        <div className={styles.card}>
          <div className={styles.content}>
            <Title text={title} />

            <p className={styles.quote}>
              <q>{quote}</q>
              {authorQuote}
            </p>

            <ul className={styles.list}>
              {list.map((it) => (
                <li className={styles.item} key={it.id}>
                  {it.item}
                </li>
              ))}
            </ul>

            <SocialLinks social={socialLinks} style="gray" />
          </div>
          <div className={styles.photo}>
            <picture>
              <img src={filePhoto.url} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
