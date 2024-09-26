import Image from 'next/image'
import Button from '@/UI/Button/Button'
import Icon from '@/components/Icon/Icon'
import illustration from '@img/illustration/illustration-01.jpg'
import illustrationDark from '@img/illustration/illustration-dark-01.jpg'

import { getStrapiData } from '@/services/strapi/utils'
import { HeroSection } from '@/services/strapi/types'
import { StrapiConfig } from '@/services/strapi/config'

import styles from './Hero.module.scss'

type HeroListItem = {
  id: number
  icon: string
  text: string
  colorText: string
}

interface HeroProps {
  isDarkImg?: boolean
}

export default async function Hero({
  isDarkImg
}: HeroProps): Promise<JSX.Element> {
  const { title, text, buttonText, list } = await getStrapiData<HeroSection>(
    StrapiConfig.hero
  )

  return (
    <section>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDarkImg ? illustrationDark : illustration}
            alt={''}
            quality={80}
            sizes="640px"
            priority={true}
            placeholder="blur"
          />
        </div>

        <div className={styles.content}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={styles.text}>{text}</p>
          <Button className={styles.btn} text={buttonText} />
        </div>

        <ul className={styles.listCard}>
          {(list as HeroListItem[]).map((it) => (
            <li className={styles.item} key={it.id}>
              <Icon className={styles.icon} name={it.icon} />
              <div>
                {it.text}
                <div className={styles.accent}>{it.colorText}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
