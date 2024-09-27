import Image from 'next/image'
import { headerLinks } from '@/app/const'
import illustration from '@img/illustration/illustration-05.jpg'
import illustrationDark from '@img/illustration/illustration-dark-05.jpg'
import CardForm from './partials/CardForm/CardForm'
import CardPrice from './partials/CardPrice/CardPrice'

import styles from './Registration.module.scss'
import { getStrapiData } from '@/services/strapi/utils'
import { StrapiConfig } from '@/services/strapi/config'
import { RegistrationSection } from '@/services/strapi/types'

interface RegistrationProps {
  isDark?: boolean
}

export default async function Registration({
  isDark
}: RegistrationProps): Promise<JSX.Element> {
  const { cost, costText, ...formData } =
    await getStrapiData<RegistrationSection>(StrapiConfig.registration)

  return (
    <section className={styles.section} id={headerLinks[5].htmlId}>
      <div className={styles.wrp}>
        <CardForm
          formData={formData}
          isDark={isDark}
          className={styles.cardForm}
        />
        <CardPrice cost={cost} costText={costText} />
        <div className={styles.illustration}>
          <Image
            src={isDark ? illustrationDark : illustration}
            alt={''}
            quality={80}
            sizes="730px"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}
