'use client'

import dynamic from 'next/dynamic'
import clsx from 'clsx'

import 'plyr-react/plyr.css'
import './Video.scss'
import styles from './Video.module.scss'

const Plyr = dynamic(() => import('plyr-react'), { ssr: false })

type MediaType = 'audio' | 'video'

const plyrOptions = {
  controls: [
    'play-large',
    'play',
    'progress',
    'current-time',
    'volume',
    'fullscreen'
  ],
  hideControls: false,
  resetOnEnd: true
}

interface VideoProps {
  videoUrl: string
  posterUrl?: string
  className?: string
}

export default function Video({
  videoUrl,
  posterUrl,
  className
}: VideoProps): JSX.Element {
  const source = {
    type: 'video' as MediaType,
    sources: [
      {
        src: videoUrl
      }
    ],
    poster: posterUrl
  }

  return (
    <div className={clsx(styles.container, className)}>
      <Plyr source={source} options={plyrOptions} />
    </div>
  )
}
