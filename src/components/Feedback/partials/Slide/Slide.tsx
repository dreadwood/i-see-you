import Video from '@/components/Video/Video'

import styles from './Slide.module.scss'

interface SlideProps {
  img: string
  videoUrl: string
  description?: string
}

export default function Slide({
  img,
  videoUrl,
  description
}: SlideProps): JSX.Element {
  return (
    <div className={styles.slide}>
      <Video posterUrl={img} videoUrl={videoUrl} />
      <div className="visually-hidden">{description}</div>
    </div>
  )
}
