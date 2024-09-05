import Icon from '@/components/Icon/Icon'
import styles from './CardForm.module.scss'
import Button from '@landing/UI/Button/Button'
import clsx from 'clsx'

interface CardFormProps {
  className?: string
}

export default function CardForm({ className }: CardFormProps): JSX.Element {
  return (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.title}>Регистрация на курс</h2>
      <p className={styles.text}>
        Мы свяжемся с вами для предварительной беседы.
      </p>
      <div className={styles.notice}>
        <Icon className={styles.noticeIcon} name="circle-check-2" />
        Поздравляем! Вы успешно зарегистрированны.
        <button className={styles.noticeClose} aria-label="закрыть уведомление">
          <Icon name="cross" />
        </button>
      </div>
      <form className={styles.form}>
        <input className={styles.field} type="text" placeholder="Имя *" />
        <input className={styles.field} type="email" placeholder="Емейл *" />
        <input
          className={styles.field}
          type="tel"
          placeholder="Номер телефона *"
        />
        <input
          className={styles.field}
          type="text"
          placeholder="Никнейм в Telegram"
        />
        <Button text="Зарегистрироваться" type="submit" />
      </form>
    </div>
  )
}
