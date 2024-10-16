import Image from 'next/image'
import FeedbackSlider from '@/components/FeedbackSlider/FeedbackSlider'
import Title from '@/UI/Title/Title'
import { FeedbackSection } from '@/services/strapi/types'
import { StrapiPageConfig } from '@/services/strapi/config'
import { fetchGetPageData } from '@/services/strapi/fetch'
import illustration from '@img/illustration/illustration-04.jpg'
import illustrationDark from '@img/illustration/illustration-dark-04.jpg'

import styles from './Feedback.module.scss'

interface FeedbackProps {
  isDark?: boolean
}

export default async function Feedback({
  isDark
}: FeedbackProps): Promise<JSX.Element> {
  const { title, people } = await fetchGetPageData<FeedbackSection>(
    StrapiPageConfig.feedback
  )

  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDark ? illustrationDark : illustration}
            alt={''}
            quality={80}
            sizes="820px"
            placeholder="blur"
          />
        </div>

        <Title className={styles.title} text={title} />

        <FeedbackSlider students={people} />
      </div>
    </section>
  )
}
