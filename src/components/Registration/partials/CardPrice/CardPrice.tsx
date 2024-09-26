import clsx from 'clsx'

import styles from './CardPrice.module.scss'

interface CardPriceProps {
  cost: string
  costText: string
  className?: string
}

export default function CardPrice({
  cost,
  costText,
  className
}: CardPriceProps): JSX.Element {
  return (
    <div className={clsx(styles.card, className)}>
      <p className={styles.title} dangerouslySetInnerHTML={{ __html: cost }} />
      <p className={styles.text}>{costText}</p>
    </div>
  )
}
