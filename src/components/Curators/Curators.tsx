import Image from 'next/image'
import Title from '@/UI/Title/Title'
import CuratorSlider from '@/components/CuratorSlider/CuratorSlider'
import { headerLinks } from '@/app/const'
import { CuratorsSection } from '@/services/strapi/types'
import { getStrapiData } from '@/services/strapi/utils'
import { StrapiConfig } from '@/services/strapi/config'

import illustration from '@img/illustration/illustration-03.jpg'
import illustrationDark from '@img/illustration/illustration-dark-03.jpg'

import styles from './Curators.module.scss'

interface CuratorsProps {
  isDark?: boolean
}

export default async function Curators({
  isDark
}: CuratorsProps): Promise<JSX.Element> {
  const { title, people } = await getStrapiData<CuratorsSection>(
    StrapiConfig.curators
  )

  return (
    <>
      <section className={styles.section} id={headerLinks[2].htmlId}>
        <div className={styles.wrp}>
          <Title text={title} />

          <CuratorSlider curators={people} />
        </div>
      </section>

      <div className={styles.illustration}>
        <Image
          src={isDark ? illustrationDark : illustration}
          alt={''}
          quality={80}
          sizes="880px"
          placeholder="blur"
        />
      </div>
    </>
  )
}
