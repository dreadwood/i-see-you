import clsx from 'clsx'
import ButtonContent from './partials/ButtonContent/ButtonContent'
import styles from './Button.module.scss'
import BackButton from './partials/BackButton/BackButton'

interface ButtonProps {
  text: string
  iconLeft?: string
  iconRight?: string
  link?: string
  size?: 'size2'
  color?: 'orange' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  as?: 'button' | 'link' | 'backButton'
  className?: string
  onCLick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
  text,
  iconLeft,
  iconRight,
  link,
  size,
  color = 'orange',
  type = 'button',
  as = 'button',
  className,
  onCLick
}: ButtonProps): JSX.Element {
  const clsName = clsx(
    styles.btn,
    styles[color],
    size && styles[size],
    className
  )

  const content = ButtonContent({
    iconLeft,
    iconRight,
    text
  })

  switch (as) {
    case 'link':
      return (
        <a className={clsName} href={link}>
          {content}
        </a>
      )

    case 'backButton':
      return <BackButton className={clsName}>{content}</BackButton>

    case 'button':
    default:
      return (
        <button className={clsName} type={type} onClick={onCLick}>
          {content}
        </button>
      )
  }
}
