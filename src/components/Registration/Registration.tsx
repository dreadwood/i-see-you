import Image from 'next/image'
import illustration from '@img/illustration/illustration-05.jpg'
import { headerLinks } from '@/app/const'
import CardForm from './partials/CardForm/CardForm'
import CardPrice from './partials/CardPrice/CardPrice'

import styles from './Registration.module.scss'

export default function Registration(): JSX.Element {
  return (
    <section className={styles.section} id={headerLinks[5].htmlId}>
      <div className={styles.wrp}>
        <CardForm className={styles.cardForm} />
        <CardPrice />
        <div className={styles.illustration}>
          <Image
            src={illustration}
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
