import { headerLinks, SocialLink } from '@/app/const'
import Image from 'next/image'
import Title from '@/UI/Title/Title'
import SocialLinks from '@/components/SocialLink/SocialLink'
import photo from '@img/people/author-02.jpg'

import styles from './AboutAuthor.module.scss'

const list = [
  'Создатель центра самопознания “Нисарга”',
  'Более 30-ти лет духовной практики',
  'Более 20-ти лет психологической практики',
  'Более 70-ти авторских ритритов',
  'Более 150-ти авторских тренингов',
  'Более 200-т сатсангов',
  'Авторский канал на Ютубе'
]

const socialList = [
  {
    id: 1,
    label: 'перейти на youtube канал',
    href: SocialLink.Youtube,
    icon: 'logo-youtube-gray',
    iconHover: 'logo-youtube-color'
  },
  {
    id: 2,
    label: 'открыть telegram канал',
    href: SocialLink.Telegram,
    icon: 'logo-telegram-gray',
    iconHover: 'logo-telegram-color'
  },
  {
    id: 3,
    label: 'профиль в instagram',
    href: SocialLink.Instagram,
    icon: 'logo-instagram-gray',
    iconHover: 'logo-instagram-color'
  },
  {
    id: 4,
    label: 'группа facebook',
    href: SocialLink.Facebook,
    icon: 'logo-facebook-gray',
    iconHover: 'logo-facebook-color'
  },
  {
    id: 5,
    label: 'группа вконтакте',
    href: SocialLink.VK,
    icon: 'logo-vk-gray',
    iconHover: 'logo-vk-color'
  }
]

export default function AboutAuthor(): JSX.Element {
  return (
    <section className={styles.section} id={headerLinks[1].htmlId}>
      <div className={styles.wrp}>
        <div className={styles.card}>
          <div className={styles.content}>
            <Title text={`Про автора <span>курса</span>`} />

            <p className={styles.quote}>
              <q>Не существует правильной жизни - есть только твоя</q>
              Юрий Менячихин
            </p>

            <ul className={styles.list}>
              {list.map((it) => (
                <li className={styles.item} key={it}>
                  {it}
                </li>
              ))}
            </ul>

            <SocialLinks social={socialList} />
          </div>
          <div className={styles.photo}>
            <Image
              src={photo}
              alt={'Юрий Менячихин'}
              quality={80}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
