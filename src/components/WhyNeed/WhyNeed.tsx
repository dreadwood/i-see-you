import Image from 'next/image'
import Title from '@/UI/Title/Title'
import Button from '@/UI/Button/Button'
import illustration from '@img/illustration/illustration-02.jpg'

import styles from './WhyNeed.module.scss'

const list = [
  'Нежелании нести ответственность за семью и отношения.',
  'Хронической усталости на работе.',
  'Отсутствии планов на карьерный рост и повышение квалификации.',
  'Нежелании заниматься поиском ресурсов.',
  'Наборе привычек, которые должны компенсировать все выше сказанное.'
]

export default function WhyNeed(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={illustration}
            alt={'Юрий Менячихин'}
            sizes="580px"
            quality={80}
            placeholder="blur"
          />
        </div>
        <div className={styles.content}>
          <Title text={`Зачем <span>мне это</span>`} />

          <ul className={styles.list}>
            {list.map((it) => (
              <li className={styles.item} key={it}>
                {it}
              </li>
            ))}
          </ul>

          <Button className={styles.btn} text="Зарегистрироваться" />
        </div>
      </div>
    </section>
  )
}
