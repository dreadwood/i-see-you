import Image from 'next/image'
import clsx from 'clsx'
import Button from '@/UI/Button/Button'
import Icon from '@/components/Icon/Icon'
import illustration from '@img/illustration/illustration-01.jpg'
import illustrationDark from '@img/illustration/illustration-dark-01.jpg'
import { fetchGetPageData } from '@/services/strapi/fetch'
import { HeroSection } from '@/services/strapi/types'
import { StrapiPageConfig } from '@/services/strapi/config'
import { headerLinks } from '@/app/const'

import styles from './Hero.module.scss'

type HeroListItem = {
  id: number
  icon: string
  text: string
  colorText: string
}

interface HeroProps {
  isDark?: boolean
}

export default async function Hero({
  isDark
}: HeroProps): Promise<JSX.Element> {
  const { title, text, buttonText, list } = await fetchGetPageData<HeroSection>(
    StrapiPageConfig.hero
  )

  return (
    <section>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDark ? illustrationDark : illustration}
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
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text.split('\n').join('<br>') }}
          />
          <Button
            className={styles.btn}
            as="link"
            link={headerLinks[5].href}
            text={buttonText}
          />
        </div>

        <ul className={clsx(styles.listCard, isDark && styles.dark)}>
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
