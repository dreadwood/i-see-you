import clsx from 'clsx'
import Icon from '@/components/Icon/Icon'
import styles from './Pagination.module.scss'

interface PaginationProps {
  currentIndex?: number
  className?: string
}

export default function Pagination({
  className
}: PaginationProps): JSX.Element {
  return (
    <div className={clsx(styles.pagination, className)}>
      <a className={styles.btn}>
        <Icon name="pagination-first" width={16} height={16} />
      </a>
      <a className={styles.btn}>
        <Icon name="pagination-prev" width={16} height={16} />
      </a>

      <a className={clsx(styles.btn, styles.actv)}>1</a>
      <a className={styles.btn}>2</a>
      <a className={styles.btn}>3</a>
      <div className={clsx(styles.btn, styles.ellipsis)}>...</div>
      <a className={styles.btn}>10</a>
      {/* <a className={styles.btn}>88</a>
      <a className={styles.btn}>99</a> */}

      <a className={styles.btn}>
        <Icon name="pagination-next" width={16} height={16} />
      </a>
      <a className={styles.btn}>
        <Icon name="pagination-last" width={16} height={16} />
      </a>
    </div>
  )
}
