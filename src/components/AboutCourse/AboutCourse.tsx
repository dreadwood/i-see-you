import Icon from '@/components/Icon/Icon'
import Title from '@/UI/Title/Title'

import styles from './AboutCourse.module.scss'

const content = [
  '<b>12 групповых онлайн встреч</b> с Юрием Менячихиным.',
  '<b>6 записанных видео лекций</b> по теории.',
  'Освоение базовой <b>техники работы с состоянием</b> на онлайн встречах с Юрием, групповых и индивидуальных встречах с кураторами.',
  '<b>Постоянную поддержку</b> персонального куратора.',
  'Знакомство и открытое <b>общение с новыми людьми</b>.',
  'Техническое <b>обслуживание вашей личности</b> в авторизованном СТО.'
]

export default function Description(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <Title text={`За 21 день обучения <span>вы получите:</span>`} />
        <ul className={styles.list}>
          {content.map((it) => (
            <li className={styles.item} key={it}>
              <Icon className={styles.icon} name="circle-check-1" />
              <div dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
