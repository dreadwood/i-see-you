import Image from 'next/image'
import Title from '@/UI/Title/Title'
import Button from '@/UI/Button/Button'
import illustration from '@img/illustration/illustration-02.jpg'
import illustrationDark from '@img/illustration/illustration-dark-02.jpg'
import { StrapiConfig } from '@/services/strapi/config'
import { WhyNeedSection } from '@/services/strapi/types'
import { fetchGetPageData } from '@/services/strapi/fetch'

import styles from './WhyNeed.module.scss'

interface WhyNeedProps {
  isDark?: boolean
}

export default async function WhyNeed({
  isDark
}: WhyNeedProps): Promise<JSX.Element> {
  const { title, buttonText, list } = await fetchGetPageData<WhyNeedSection>(
    StrapiConfig.whyNeed
  )
  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDark ? illustrationDark : illustration}
            alt={'Юрий Менячихин'}
            sizes="580px"
            quality={80}
            placeholder="blur"
          />
        </div>
        <div className={styles.content}>
          <Title text={title} />

          <ul className={styles.list}>
            {list.map((it) => (
              <li className={styles.item} key={it.id}>
                {it.item}
              </li>
            ))}
          </ul>

          <Button className={styles.btn} text={buttonText} />
        </div>
      </div>
    </section>
  )
}
