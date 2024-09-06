'use client'

import clsx from 'clsx'
import Icon from '@/components/Icon/Icon'
import styles from './Header.module.scss'
import SocialLinks from '@landing/components/SocialLink/SocialLink'
import { headerLinks, SocialLink } from '@landing/const'
import { useEffect, useState } from 'react'
import Overlay from '../../UI/Overlay/Overlay'

const socialList = [
  {
    id: 1,
    label: 'перейти на youtube канал',
    href: SocialLink.Youtube,
    icon: 'logo-youtube-blue',
    iconHover: 'logo-youtube-color'
  },
  {
    id: 2,
    label: 'открыть telegram канал',
    href: SocialLink.Telegram,
    icon: 'logo-telegram-blue',
    iconHover: 'logo-telegram-color'
  },
  {
    id: 3,
    label: 'профиль в instagram',
    href: SocialLink.Instagram,
    icon: 'logo-instagram-blue',
    iconHover: 'logo-instagram-color'
  },
  {
    id: 4,
    label: 'группа facebook',
    href: SocialLink.Facebook,
    icon: 'logo-facebook-blue',
    iconHover: 'logo-facebook-color'
  },
  {
    id: 5,
    label: 'группа вконтакте',
    href: SocialLink.VK,
    icon: 'logo-vk-blue',
    iconHover: 'logo-vk-color'
  }
]

export default function Header(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <Overlay isShow={isOpen} onClick={() => setOpen(false)} />
      <div className={styles.wrp}>
        <div className={styles.logo}>Я тебя вижу</div>
        <div className={clsx(styles.offcanvas, isOpen && styles.open)}>
          <div className={styles.offcanvasTop}>
            <div className={styles.offcanvasLogo}>Я тебя вижу</div>
            <button className={styles.close} onClick={() => setOpen(false)}>
              <Icon name="cross" />
            </button>
          </div>
          <ul className={styles.list}>
            {headerLinks.map((it) => (
              <li key={it.id}>
                <a
                  className={styles.link}
                  href={`#${it.htmlId}`}
                  onClick={() => setOpen(false)}
                >
                  {it.text}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.offcanvasBottom}>
            <SocialLinks social={socialList} />
          </div>
        </div>
        <button className={styles.burger} onClick={() => setOpen(true)}>
          <Icon name="menu-burger" />
        </button>
      </div>
    </header>
  )
}
