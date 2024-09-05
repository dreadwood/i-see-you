import Icon from '@/components/Icon/Icon'
import styles from './SocialLink.module.scss'
import clsx from 'clsx'

type SocialLink = {
  id: number
  label: string
  href: string
  icon: string
  iconHover: string
}

interface SocialLinksProps {
  social: SocialLink[]
  className?: string
}

export default function SocialLinks({
  social,
  className
}: SocialLinksProps): JSX.Element {
  return (
    <ul className={clsx(styles.list, className)}>
      {social.map((it) => (
        <li key={it.id}>
          <a className={styles.link} href={it.href} aria-label={it.label}>
            <Icon name={it.icon} />
            <Icon name={it.iconHover} />
          </a>
        </li>
      ))}
    </ul>
  )
}
