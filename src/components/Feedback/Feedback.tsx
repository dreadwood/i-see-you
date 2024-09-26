import Image from 'next/image'
import FeedbackSlider from '@/components/FeedbackSlider/FeedbackSlider'
import Title from '@/UI/Title/Title'
import { FeedbackSection } from '@/services/strapi/types'
import { getStrapiData } from '@/services/strapi/utils'
import { StrapiConfig } from '@/services/strapi/config'

import illustration from '@img/illustration/illustration-04.jpg'
import illustrationDark from '@img/illustration/illustration-dark-04.jpg'

import styles from './Feedback.module.scss'

interface FeedbackProps {
  isDarkImg?: boolean
}

export default async function Feedback({
  isDarkImg
}: FeedbackProps): Promise<JSX.Element> {
  const { title, people } = await getStrapiData<FeedbackSection>(
    StrapiConfig.feedback
  )

  return (
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDarkImg ? illustrationDark : illustration}
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
