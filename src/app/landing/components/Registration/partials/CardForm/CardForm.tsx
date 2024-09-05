'use client'

import clsx from 'clsx'
import { Dispatch, useEffect, useState } from 'react'
import Button from '@landing/UI/Button/Button'
import Field from '@landing/UI/Field/Field'
import Notice from '@/app/landing/UI/Notice/Notice'
import styles from './CardForm.module.scss'

const NOTICE_DISPLAY_TIME = 3000

interface CardFormProps {
  className?: string
}

export default function CardForm({ className }: CardFormProps): JSX.Element {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [tel, setTel] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')

  const [noticeMsg, setNoticeMsg] = useState<string>('')
  const [noticeError, setNoticeError] = useState<boolean>(false)

  function handleRequaredField(
    evt: React.ChangeEvent<HTMLInputElement>,
    dispatch: Dispatch<string>
  ) {
    setNoticeMsg('')
    dispatch(evt.target.value)
  }

  function resetForm() {
    setName('')
    setEmail('')
    setTel('')
    setTelegram('')
  }

  function handleFormSubmit(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault()

    switch (true) {
      case !name.length:
        setNoticeMsg('Введите ваше имя.')
        setNoticeError(true)
        return
      case !email.length:
        setNoticeMsg('Укажите свой email.')
        setNoticeError(true)
        return
      case !tel.length:
        setNoticeMsg('Укажите номер телефона.')
        setNoticeError(true)
        return
    }

    setNoticeMsg('Поздравляем! Вы успешно зарегистрированны.')
    setNoticeError(false)

    // TODO: 2024-09-05 / add fetch
    const result = { name, email, tel, telegram }
    console.log(result)

    resetForm()
  }

  useEffect(() => {
    setTimeout(
      () => !noticeError && noticeMsg && setNoticeMsg(''),
      NOTICE_DISPLAY_TIME
    )
  }, [noticeMsg])

  return (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.title}>Регистрация на курс</h2>
      <p className={styles.text}>
        Мы свяжемся с вами для предварительной беседы.
      </p>
      {noticeMsg.length !== 0 && (
        <Notice
          className={styles.notice}
          isError={noticeError}
          text={noticeMsg}
          onClick={() => setNoticeMsg('')}
        />
      )}

      <form className={styles.form}>
        <Field
          isRequired
          placeholder="Имя *"
          value={name}
          onChange={(evt) => handleRequaredField(evt, setName)}
        />
        <Field
          type="email"
          isRequired
          placeholder="Емейл * "
          value={email}
          onChange={(evt) => handleRequaredField(evt, setEmail)}
        />
        <Field
          type="tel"
          isRequired
          placeholder="Номер телефона * "
          value={tel}
          onChange={(evt) => handleRequaredField(evt, setTel)}
        />
        <Field
          type="text"
          placeholder="Никнейм в Telegram"
          value={telegram}
          onChange={(evt) => setTelegram(evt.target.value)}
        />
        <Button
          className={styles.btn}
          text="Зарегистрироваться"
          type="submit"
          onCLick={handleFormSubmit}
        />
      </form>
    </div>
  )
}
