import clsx from 'clsx'
import styles from './Field.module.scss'
import { HTMLInputTypeAttribute } from 'react'

interface FieldProps {
  value?: string
  placeholder?: string
  isRequired?: boolean
  type?: HTMLInputTypeAttribute
  className?: string
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Field({
  type = 'text',
  value,
  placeholder,
  isRequired,
  className,
  onChange
}: FieldProps): JSX.Element {
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
