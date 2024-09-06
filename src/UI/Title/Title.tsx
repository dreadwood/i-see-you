import clsx from 'clsx'
import styles from './Title.module.scss'

interface TitleProps {
  text: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export default function Title({
  text,
  className,
  as: Component = 'h2'
}: TitleProps): JSX.Element {
  return (
    <Component
      className={clsx(styles.title, className)}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}
