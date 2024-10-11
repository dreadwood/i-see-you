import clsx from 'clsx'
import Title from '@/UI/Title/Title'
import { headerLinks } from '@/app/const'
import Accordion from './partials/Accordion/Accordion'
import { StrapiPageConfig } from '@/services/strapi/config'
import { fetchGetPageData } from '@/services/strapi/fetch'
import { ProgramListSection, ProgramSection } from '@/services/strapi/types'

import styles from './Program.module.scss'

interface ProgramProps {
  isDark?: boolean
}

export default async function Program({
  isDark
}: ProgramProps): Promise<JSX.Element> {
  const programData = fetchGetPageData<ProgramSection>(StrapiPageConfig.program)
  const programListData = fetchGetPageData<ProgramListSection[]>(
    StrapiPageConfig.programList
  )

  const [program, programList] = await Promise.all([
    programData,
    programListData
  ])

  const { title, waves } = program

  return (
    <section className={styles.section} id={headerLinks[3].htmlId}>
      <div className={styles.wrp}>
        <div className={styles.top}>
          <Title className={styles.title} text={title} />

          <div className={styles.groupList}>
            {waves.map((it) => (
              <div
                className={clsx(
                  styles.groupItem,
                  isDark && styles.dark,
                  it.active && styles.actv
                )}
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
          {programList.map((it) => (
            <Accordion data={it} key={it.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
