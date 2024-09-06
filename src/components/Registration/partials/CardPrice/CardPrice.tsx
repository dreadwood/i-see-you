import clsx from 'clsx'

import styles from './CardPrice.module.scss'

interface CardPriceProps {
  className?: string
}

export default function CardPrice({ className }: CardPriceProps): JSX.Element {
  return (
    <div className={clsx(styles.card, className)}>
      <p className={styles.title}>
        Стоимость курса <span>$700 USD</span>
      </p>
      <p className={styles.text}>
        Живое общение Юрием Менячихиным в ZOOM с возможностью задавать
        тематические вопросы. Видеозапись занятия будет доступна участникам по
        его окончании.
      </p>
    </div>
  )
}
