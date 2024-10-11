import Icon from '@/components/Icon/Icon'
import Title from '@/UI/Title/Title'

import styles from './AboutCourse.module.scss'
import { StrapiPageConfig } from '@/services/strapi/config'
import { fetchGetPageData } from '@/services/strapi/fetch'
import { AboutCourseSection } from '@/services/strapi/types'

const content = [
  '<b>12 групповых онлайн встреч</b> с Юрием Менячихиным.',
  '<b>6 записанных видео лекций</b> по теории.',
  'Освоение базовой <b>техники работы с состоянием</b> на онлайн встречах с Юрием, групповых и индивидуальных встречах с кураторами.',
  '<b>Постоянную поддержку</b> персонального куратора.',
  'Знакомство и открытое <b>общение с новыми людьми</b>.',
  'Техническое <b>обслуживание вашей личности</b> в авторизованном СТО.'
]

export default async function AboutCourse(): Promise<JSX.Element> {
  const { title, list } = await fetchGetPageData<AboutCourseSection>(
    StrapiPageConfig.aboutCourse
  )

  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <Title text={title} />
        <ul className={styles.list}>
          {list.map((it) => (
            <li className={styles.item} key={it.id}>
              <Icon className={styles.icon} name="circle-check-1" />
              <div dangerouslySetInnerHTML={{ __html: it.item }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
