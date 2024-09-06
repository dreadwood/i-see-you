import Icon from '@/components/Icon/Icon'
import { ContactLink, SocialLink } from '@/app/const'
import SocialLinks from '@/components/SocialLink/SocialLink'

import styles from './Footer.module.scss'

const contactList = [
  {
    id: 1,
    name: '@Roma',
    href: ContactLink.Telegram,
    icon: 'contact-telegram'
  },
  {
    id: 2,
    name: ContactLink.Email,
    href: `mailto:${ContactLink.Email}`,
    icon: 'contact-email'
  }
]

const socialList = [
  {
    id: 1,
    label: 'перейти на youtube канал',
    href: SocialLink.Youtube,
    icon: 'logo-youtube-white',
    iconHover: 'logo-youtube-color'
  },
  {
    id: 2,
    label: 'открыть telegram канал',
    href: SocialLink.Telegram,
    icon: 'logo-telegram-white',
    iconHover: 'logo-telegram-color'
  },
  {
    id: 3,
    label: 'профиль в instagram',
    href: SocialLink.Instagram,
    icon: 'logo-instagram-white',
    iconHover: 'logo-instagram-color'
  },
  {
    id: 4,
    label: 'группа facebook',
    href: SocialLink.Facebook,
    icon: 'logo-facebook-white',
    iconHover: 'logo-facebook-color'
  },
  {
    id: 5,
    label: 'группа вконтакте',
    href: SocialLink.VK,
    icon: 'logo-vk-white',
    iconHover: 'logo-vk-color'
  }
]

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrp}>
        <div>
          <p className={styles.text}>
            На все ваши вопросы ответит координатор программы Роман Парасоцкий
          </p>

          <ul className={styles.contactList}>
            {contactList.map((it) => (
              <li key={it.id}>
                <a className={styles.contactItem} href={it.href}>
                  <Icon name={it.icon} />
                  {it.name}
                </a>
              </li>
            ))}
          </ul>

          <SocialLinks social={socialList} className={styles.socialList} />
        </div>

        <div className={styles.rightCol}>
          <a className={styles.link} href="#FIXME:">
            Подписаться на новости
          </a>
          <a className={styles.link} href="#FIXME:">
            Политика Конфиденциальности
          </a>

          <div className={styles.copyright}>
            © 2022-{new Date().getFullYear().toString()}
          </div>
        </div>
      </div>
    </footer>
  )
}
