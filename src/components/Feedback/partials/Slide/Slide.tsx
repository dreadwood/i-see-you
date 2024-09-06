import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import PlayButton from '@/UI/PlayButton/PlayButton'
import { useVideoStore } from '@/store/video'

import styles from './Slide.module.scss'

interface SlideProps {
  img: StaticImport
  videoUrl: string
  alt?: string
}

export default function Slide({ img, videoUrl, alt }: SlideProps): JSX.Element {
  const { openVideo } = useVideoStore()
  return (
    <div className={styles.slide}>
      <Image src={img} alt={alt || ''} quality={80} placeholder="blur" />
      <PlayButton onClick={() => openVideo(videoUrl)} />
    </div>
  )
}
