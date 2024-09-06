'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import Icon from '@/components/Icon/Icon'
import Overlay from '@/UI/Overlay/Overlay'
import { useVideoStore } from '@/store/video'

import 'plyr-react/plyr.css'
import styles from './VideoModal.module.scss'

const Plyr = dynamic(() => import('plyr-react'), { ssr: false })

type MediaType = 'audio' | 'video'

const plyrOptions = {
  controls: [
    'play-large',
    'play',
    'progress',
    'current-time',
    'mute',
    'volume',
    'fullscreen'
  ],
  hideControls: false,
  resetOnEnd: true
}

export default function VideoModal(): JSX.Element {
  const { isOpen, videoUrl, closeVideo } = useVideoStore()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const source = {
    type: 'video' as MediaType,
    sources: [
      {
        src: videoUrl as string
      }
    ]
  }

  return (
    <>
      <Overlay isShow={isOpen} onClick={() => closeVideo()} />
      {isOpen && (
        <div className={styles.wrp}>
          <button className={styles.close} onClick={() => closeVideo()}>
            <Icon name="cross" />
          </button>
          {videoUrl && (
            <div className={styles.container}>
              <Plyr source={source} options={plyrOptions} />
            </div>
          )}
        </div>
      )}
    </>
  )
}
