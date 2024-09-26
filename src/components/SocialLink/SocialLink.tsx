import clsx from 'clsx'
import Icon from '@/components/Icon/Icon'

import styles from './SocialLink.module.scss'

type SocialLink = {
  id: number
  label: string
  url: string
  icon: string
}

interface SocialLinksProps {
  social: SocialLink[]
  style?: 'blue' | 'white' | 'gray'
  className?: string
}

export default function SocialLinks({
  social,
  style = 'blue',
  className
}: SocialLinksProps): JSX.Element {
  return (
    <ul className={clsx(styles.list, className)}>
      {social.map((it) => (
        <li key={it.id}>
          <a className={styles.link} href={it.url} aria-label={it.label}>
            <Icon name={`logo-${it.icon}-${style}`} />
            <Icon name={`logo-${it.icon}-color`} />
          </a>
        </li>
      ))}
    </ul>
  )
}
