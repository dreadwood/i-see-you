'use client'

import Icon from '@/components/Icon/Icon'
import styles from './ScrollTopButton.module.scss'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function ScrollTopButton(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false)

  const widnowScrollHandler = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    setIsVisible(scrollTop > 300)
  }

  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', widnowScrollHandler)
    widnowScrollHandler()
    return () => {
      window.removeEventListener('scroll', widnowScrollHandler)
    }
  }, [])

  return (
    <button
      className={clsx(styles.btn, isVisible && styles.show)}
      onClick={handleScroll}
      aria-label="пролистать страницу вверх "
    >
      <Icon name="arrow" />
    </button>
  )
}
