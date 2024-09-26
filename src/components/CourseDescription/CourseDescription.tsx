import Title from '@/UI/Title/Title'
import { headerLinks } from '@/app/const'
import Video from '@/components/Video/Video'

import { StrapiConfig } from '@/services/strapi/config'
import { getStrapiData, getStrapiFileData } from '@/services/strapi/utils'
import { CourseDescriptionSection } from '@/services/strapi/types'

import styles from './CourseDescription.module.scss'

export default async function CourseDescription(): Promise<JSX.Element> {
  const { title, text, highlightedText, posterVideo, video } =
    await getStrapiData<CourseDescriptionSection>(
      StrapiConfig.courseDescription
    )

  const filePosterVideo = getStrapiFileData(posterVideo)
  const fileVideo = getStrapiFileData(video)

  return (
    <section className={styles.section} id={headerLinks[0].htmlId}>
      <div className={styles.wrp}>
        <Title text={title} />
        <div className={styles.columns}>
          <div className={styles.content}>
            <div
              dangerouslySetInnerHTML={{
                __html: text.split('\n').join('<br>')
              }}
            />
            <p className={styles.accent}>{highlightedText}</p>
          </div>
          <div className={styles.video}>
            <Video posterUrl={filePosterVideo.url} videoUrl={fileVideo.url} />
          </div>
        </div>
      </div>
    </section>
  )
}
