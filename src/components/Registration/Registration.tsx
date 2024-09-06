import Image from 'next/image'
import { headerLinks } from '@/app/const'
import illustration from '@img/illustration/illustration-05.jpg'
import illustrationDark from '@img/illustration/illustration-dark-05.jpg'
import CardForm from './partials/CardForm/CardForm'
import CardPrice from './partials/CardPrice/CardPrice'

import styles from './Registration.module.scss'

interface RegistrationProps {
  isDarkImg?: boolean
}

export default function Registration({
  isDarkImg
}: RegistrationProps): JSX.Element {
  return (
    <section className={styles.section} id={headerLinks[5].htmlId}>
      <div className={styles.wrp}>
        <CardForm className={styles.cardForm} />
        <CardPrice />
        <div className={styles.illustration}>
          <Image
            src={isDarkImg ? illustrationDark : illustration}
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
