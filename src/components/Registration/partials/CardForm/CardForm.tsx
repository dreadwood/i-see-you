'use client'

import clsx from 'clsx'
import { Dispatch, useEffect, useState } from 'react'
import Button from '@/UI/Button/Button'
import FieldElement from '@/UI/FieldElement/FieldElement'
import Notice from '@/UI/Notice/Notice'

import styles from './CardForm.module.scss'
import { Field } from '@/services/strapi/types'

const NOTICE_DISPLAY_TIME = 3000

type FormData = {
  id: number
  formTitle: string
  formText?: string
  formSuccessfulMsg: string
  formTextButton: string
  nameField: Field
  emailField: Field
  telField: Field
  telegramField: Field
}

interface CardFormProps {
  formData: FormData
  className?: string
}

export default function CardForm({
  formData,
  className
}: CardFormProps): JSX.Element {
  const {
    formTitle,
    formText,
    formSuccessfulMsg,
    formTextButton,
    nameField,
    emailField,
    telField,
    telegramField
  } = formData

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
      case !name.length && nameField.isExist && nameField.isRequired:
        setNoticeMsg('Введите ваше имя.')
        setNoticeError(true)
        return
      case !email.length && emailField.isExist && emailField.isRequired:
        setNoticeMsg('Укажите свой email.')
        setNoticeError(true)
        return
      case !tel.length && telField.isExist && telField.isRequired:
        setNoticeMsg('Укажите номер телефона.')
        setNoticeError(true)
        return
      case !telegram.length &&
        telegramField.isExist &&
        telegramField.isRequired:
        setNoticeMsg('Укажите никнейм Telegram.')
        setNoticeError(true)
        return
    }

    setNoticeMsg(formSuccessfulMsg)
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
  }, [noticeMsg, noticeError])

  return (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.title}>{formTitle}</h2>
      <p className={styles.text}>{formText}</p>
      {noticeMsg.length !== 0 && (
        <Notice
          className={styles.notice}
          isError={noticeError}
          text={noticeMsg}
          onClick={() => setNoticeMsg('')}
        />
      )}

      <form className={styles.form}>
        {nameField.isExist && (
          <FieldElement
            type={nameField.type}
            isRequired={nameField.isRequired}
            placeholder={`${nameField.placeholder}${nameField.isRequired ? ' *' : ''}`}
            value={name}
            onChange={(evt) => handleRequaredField(evt, setName)}
          />
        )}
        {emailField.isExist && (
          <FieldElement
            type={emailField.type}
            isRequired={emailField.isRequired}
            placeholder={`${emailField.placeholder}${emailField.isRequired ? ' *' : ''}`}
            value={email}
            onChange={(evt) => handleRequaredField(evt, setEmail)}
          />
        )}
        {telField.isExist && (
          <FieldElement
            type={telField.type}
            isRequired={telField.isRequired}
            placeholder={`${telField.placeholder}${telField.isRequired ? ' *' : ''}`}
            value={tel}
            onChange={(evt) => handleRequaredField(evt, setTel)}
          />
        )}
        {telegramField.isExist && (
          <FieldElement
            type={telegramField.type}
            isRequired={telegramField.isRequired}
            placeholder={`${telegramField.placeholder}${telegramField.isRequired ? ' *' : ''}`}
            value={telegram}
            onChange={(evt) => setTelegram(evt.target.value)}
          />
        )}

        <Button
          className={styles.btn}
          text={formTextButton}
          type="submit"
          onCLick={handleFormSubmit}
        />
      </form>
    </div>
  )
}
