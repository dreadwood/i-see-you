import clsx from 'clsx'
import Title from '@/UI/Title/Title'
import { headerLinks } from '@/app/const'
import Accordion from './partials/Accordion/Accordion'

import styles from './Program.module.scss'
import { StrapiConfig } from '@/services/strapi/config'
import { getStrapiData } from '@/services/strapi/utils'
import { ProgramListSection, ProgramSection } from '@/services/strapi/types'

interface ProgramProps {
  isDark?: boolean
}

export default async function Program({
  isDark
}: ProgramProps): Promise<JSX.Element> {
  const programData = getStrapiData<ProgramSection>(StrapiConfig.program)
  const programListData = getStrapiData<ProgramListSection[]>(
    StrapiConfig.programList
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
