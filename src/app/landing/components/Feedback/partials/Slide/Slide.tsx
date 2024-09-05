import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import styles from './Slide.module.scss'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import PlayButton from '@landing/UI/PlayButton/PlayButton'

interface SlideProps {
  img: StaticImport
  alt?: string
}

export default function Slide({ img, alt }: SlideProps): JSX.Element {
  return (
    <div className={styles.slide}>
      <Image
        src={img}
        alt={alt || ''}
        width={450}
        height={345}
        quality={80}
        placeholder="blur"
      />
      <PlayButton />
    </div>
  )
}
