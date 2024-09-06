'use client'

import Plyr from 'plyr'
import { useEffect, useRef } from 'react'

import Icon from '@/components/Icon/Icon'
import Overlay from '@/UI/Overlay/Overlay'
import { useVideoStore } from '@/store/video'

import 'plyr/dist/plyr.css'
import styles from './VideoModal.module.scss'

export default function VideoModal(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const { isOpen, videoUrl, closeVideo } = useVideoStore()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'scroll'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    if (!videoUrl) return
    const player = new Plyr(videoRef.current || '', {
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
    })
    player.source = {
      type: 'video',
      sources: [
        {
          src: videoUrl
        }
      ]
    }
  }, [videoUrl])

  return (
    <>
      <Overlay isShow={isOpen} onClick={() => closeVideo()} />
      {isOpen && (
        <div className={styles.wrp}>
          <button className={styles.close} onClick={() => closeVideo()}>
            <Icon name="cross" />
          </button>
          <div className={styles.container}>
            <video
              id="player"
              width="1024"
              height="576"
              controls
              preload="none"
              ref={videoRef}
            >
              {/* <source src="/video/example.mp4" type="video/mp4" /> */}
            </video>
          </div>
        </div>
      )}
    </>
  )
}
