import clsx from 'clsx'
import styles from './FieldElement.module.scss'
import { HTMLInputTypeAttribute } from 'react'

interface FieldElementProps {
  value?: string
  placeholder?: string
  isRequired?: boolean
  type?: HTMLInputTypeAttribute
  className?: string
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FieldElement({
  type = 'text',
  value,
  placeholder,
  isRequired,
  className,
  onChange
}: FieldElementProps): JSX.Element {
  return (
    <input
      className={clsx(styles.field, className)}
      type={type}
      placeholder={placeholder}
      value={value}
      required={isRequired}
      onChange={onChange}
    />
  )
}
