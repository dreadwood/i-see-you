import Title from '@/UI/Title/Title'
import Video from '@/components/Video/Video'
import { headerLinks } from '@/app/const'
import { StrapiPageConfig } from '@/services/strapi/config'
import { getStrapiFileData } from '@/services/strapi/utils'
import { CourseDescriptionSection } from '@/services/strapi/types'
import { fetchGetPageData } from '@/services/strapi/fetch'

import styles from './CourseDescription.module.scss'

export default async function CourseDescription(): Promise<JSX.Element> {
  const { title, text, highlightedText, posterVideo, video } =
    await fetchGetPageData<CourseDescriptionSection>(
      StrapiPageConfig.courseDescription
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
            {fileVideo && (
              <Video
                posterUrl={filePosterVideo?.url}
                videoUrl={fileVideo.url}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
