'use client'

import clsx from 'clsx'
import { useState } from 'react'
import Icon from '@/components/Icon/Icon'
import Video from '@/components/Video/Video'

import styles from './Slide.module.scss'

interface SlideProps {
  img: string
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
  const [isLike, setLike] = useState<boolean>(false)

  return (
    <div className={styles.slide}>
      <div className={styles.photo}>
        <Video posterUrl={img} videoUrl={videoUrl} />
        <button
          className={clsx(styles.like, isLike && styles.actv)}
          onClick={() => setLike(!isLike)}
        >
          <Icon name="heart" />
        </button>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
