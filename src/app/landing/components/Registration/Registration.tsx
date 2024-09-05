import Image from 'next/image'
import CardForm from './partials/CardForm/CardForm'
import CardPrice from './partials/CardPrice/CardPrice'
import illustration from '@img/illustration/illustration-05.jpg'
import styles from './Registration.module.scss'

export default function Registration(): JSX.Element {
  return (
    <section className={styles.section}>
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
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  )
}
