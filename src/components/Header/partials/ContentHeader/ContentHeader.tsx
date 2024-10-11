'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Icon from '@/components/Icon/Icon'
import SocialLinks from '@/components/SocialLink/SocialLink'
import Overlay from '@/UI/Overlay/Overlay'
import { headerLinks } from '@/app/const'
import { CommonLink } from '@/services/strapi/types'

import styles from './ContentHeader.module.scss'

interface ContentHeaderProps {
  socialLinks: CommonLink[]
}

export default function ContentHeader({ socialLinks }: ContentHeaderProps) {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
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
                  href={it.href}
                  onClick={() => setOpen(false)}
                >
                  {it.text}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.offcanvasBottom}>
            <SocialLinks social={socialLinks} />
          </div>
        </div>
        <button className={styles.burger} onClick={() => setOpen(true)}>
          <Icon name="menu-burger" />
        </button>
      </div>
    </>
  )
}
