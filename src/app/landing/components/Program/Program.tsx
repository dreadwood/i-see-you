import clsx from 'clsx'
import Title from '@landing/UI/Title/Title'
import { headerLinks } from '@landing/const'
import Accordion from './partials/Accordion/Accordion'
import styles from './Program.module.scss'

const groups = [
  {
    id: 1,
    name: '4-й поток, Online',
    period: '05 октября - 26 октября',
    time: '10:00 - 12:00 (GMT+3)',
    isActv: true
  },
  {
    id: 2,
    name: '5-й поток, Online',
    period: '01 ноября - 21 ноября',
    time: '10:00 - 12:00 (GMT+3)'
  },
  {
    id: 3,
    name: '6-й поток, Online',
    period: '01 декабря - 21 декабря',
    time: '10:00 - 12:00 (GMT+3)'
  }
]

const blocks = [
  {
    id: 1,
    name: 'Теория',
    list: [
      '<b>Модуль 1:</b> Любовь',
      '<b>Модуль 2:</b> Теория границ',
      '<b>Модуль 3:</b> Кризисы',
      '<b>Модуль 4:</b> Субличности',
      '<b>Модуль 5:</b> Тонкие тела',
      '<b>Модуль 6:</b> Книга Пять Травм - Лиз Бурбо',
      '<b>Модуль 7:</b> Свободная тема'
    ]
  },
  {
    id: 2,
    name: 'Практика',
    list: [
      'Работа с кураторами',
      'Работа с компенсациями',
      'Практика “Я тебя вижу”',
      'Медитации'
    ]
  },
  {
    id: 3,
    name: 'Самостоятельная работа',
    list: [
      'Работа с кураторами',
      'Работа с компенсациями',
      'Практика “Я тебя вижу”',
      'Медитации'
    ]
  }
]

export default function Program(): JSX.Element {
  return (
    <section className={styles.section} id={headerLinks[3].htmlId}>
      <div className={styles.wrp}>
        <div className={styles.top}>
          <Title className={styles.title} text={`Программа`} />

          <div className={styles.groupList}>
            {groups.map((it) => (
              <div
                className={clsx(styles.groupItem, it.isActv && styles.actv)}
                key={it.id}
              >
                <div className={styles.groupName}>{it.name}</div>
                <div className={styles.groupPeriod}>{it.period}</div>
                <div>{it.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.accordionList}>
          {blocks.map((it) => (
            <Accordion data={it} key={it.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
