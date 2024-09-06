'use client'

import Icon from '@/components/Icon/Icon'
import Image from 'next/image'
import styles from './Slide.module.scss'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import PlayButton from '@landing/UI/PlayButton/PlayButton'
import { useState } from 'react'
import clsx from 'clsx'
import { useVideoStore } from '@/store/video'

interface SlideProps {
  img: StaticImport
  text: string
  videoUrl: string
  alt?: string
}

export default function Slide({
  img,
  text,
  videoUrl,
  alt
}: SlideProps): JSX.Element {
  const { openVideo } = useVideoStore()
  const [isLike, setLike] = useState<boolean>(false)

  return (
    <div className={styles.slide}>
      <div className={styles.photo}>
        <Image
          src={img}
          alt={alt || ''}
          width={450}
          height={345}
          quality={80}
          placeholder="blur"
        />
        <button
          className={clsx(styles.like, isLike && styles.actv)}
          onClick={() => setLike(!isLike)}
        >
          <Icon name="heart" />
        </button>
        <PlayButton onClick={() => openVideo(videoUrl)} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
