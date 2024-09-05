import Image from 'next/image'
import CardForm from './partials/CardForm/CardForm'
import CardPrice from './partials/CardPrice/CardPrice'
import illustration from '@img/illustration/illustration-05.jpg'
import styles from './Registration.module.scss'
import { headerLinks } from '@landing/const'

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
            width={728}
            height={645}
            quality={80}
            sizes="730px"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}
