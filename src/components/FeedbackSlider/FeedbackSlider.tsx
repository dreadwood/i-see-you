'use client'

import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import Icon from '@/components/Icon/Icon'
import Slide from './partials/Slide/Slide'

import 'swiper/css'
import styles from './FeedbackSlider.module.scss'
import { PeopleList } from '@/services/strapi/types'
import { getStrapiFileData } from '@/services/strapi/utils'

interface FeedbackSliderProps {
  students: PeopleList[]
}

export default function FeedbackSlider({
  students
}: FeedbackSliderProps): JSX.Element {
  const btnPrevRef = useRef<HTMLButtonElement | null>(null)
  const btnNextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<HTMLDivElement | null>(null)
  const paginationRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    new Swiper(swiperRef.current || '', {
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: btnPrevRef.current,
        nextEl: btnNextRef.current
      },
      pagination: {
        el: paginationRef.current,
        type: 'fraction'
      },
      breakpoints: {
        900: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    })
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles.slider} ref={swiperRef}>
          <div className="swiper-wrapper">
            {students.map((it) => {
              const filePhoto = getStrapiFileData(it.photo)
              const fileVideo = getStrapiFileData(it.video)

              return (
                <div className="swiper-slide" key={it.id}>
                  {filePhoto && fileVideo && (
                    <Slide
                      img={filePhoto.url}
                      description={it.label}
                      videoUrl={fileVideo.url}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.count}>1 / {students.length}</div>
          <div ref={paginationRef} style={{ display: 'none' }}></div>
          <div className={styles.contols}>
            <button className={styles.btn} ref={btnPrevRef}>
              <Icon name="arrow-back" />
            </button>
            <button className={styles.btn} ref={btnNextRef}>
              <Icon name="arrow-next" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
