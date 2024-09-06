import Image from 'next/image'
import Button from '@/UI/Button/Button'
import Icon from '@/components/Icon/Icon'
import illustration from '@img/illustration/illustration-01.jpg'
import illustrationDark from '@img/illustration/illustration-dark-01.jpg'

import styles from './Hero.module.scss'

const description = [
  {
    id: 1,
    icon: 'speedometer',
    sup: 'Старт нового потока',
    sub: '5 октября'
  },
  {
    id: 2,
    icon: 'clock',
    sup: 'Длительность марафона',
    sub: '21 день'
  },
  {
    id: 3,
    icon: 'globe',
    sup: 'Продолжительность Zoom встречи',
    sub: '10:00 - 12:00 (GMT+3)'
  },
  {
    id: 4,
    icon: 'users',
    sup: 'Практические занятия с куратором в мини группах',
    sub: '5-6 человек'
  }
]

interface HeroProps {
  isDarkImg?: boolean
}

export default function Hero({ isDarkImg }: HeroProps): JSX.Element {
  return (
    <section>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDarkImg ? illustrationDark : illustration}
            alt={''}
            quality={80}
            sizes="640px"
            priority={true}
            placeholder="blur"
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>“Я тебя вижу...”</span> Марафон инициация
          </h1>
          <p className={styles.text}>
            Авторский курс Юрия Менячихина инициирует общение с внутренним
            Ребенком, внутренним Подростком и внутренним Взрослым. В результате
            детство наполняется теплом, юность освобождается от ответственности
            за взрослую жизнь, а зрелость открывается любви и творчеству.
          </p>
          <Button className={styles.btn} text="Зарегистрироваться" />
        </div>

        <ul className={styles.listCard}>
          {description.map((it) => (
            <li className={styles.item} key={it.id}>
              <Icon className={styles.icon} name={it.icon} />
              <div>
                {it.sup}
                <div className={styles.accent}>{it.sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
