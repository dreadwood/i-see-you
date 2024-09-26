'use client'

import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import Icon from '@/components/Icon/Icon'
import Slide from './partials/Slide/Slide'

import 'swiper/css'
import styles from './CuratorSlider.module.scss'
import { PeopleList } from '@/services/strapi/types'
import { getStrapiFileData } from '@/services/strapi/utils'

interface CuratorSliderProps {
  curators: PeopleList[]
}

export default function CuratorSlider({
  curators
}: CuratorSliderProps): JSX.Element {
  const swiperRef = useRef<HTMLDivElement | null>(null)
  const btnPrevRef = useRef<HTMLButtonElement | null>(null)
  const btnNextRef = useRef<HTMLButtonElement | null>(null)
  const paginationRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    new Swiper(swiperRef.current || '', {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: paginationRef.current,
        bulletClass: styles.paginationItem,
        bulletActiveClass: styles.paginationActv,
        bulletElement: 'div',
        clickable: true
      },
      navigation: {
        prevEl: btnPrevRef.current,
        nextEl: btnNextRef.current
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        375: {
          slidesPerView: 1
        }
      }
    })
  }, [])
  return (
    <>
      <div className={styles.container} ref={swiperRef}>
        <div className="swiper-wrapper">
          {curators.map((it) => {
            const filePhoto = getStrapiFileData(it.photo)
            const fileVideo = getStrapiFileData(it.video)

            return (
              <div className="swiper-slide" key={it.id}>
                <Slide
                  img={filePhoto.url}
                  text={it.label}
                  videoUrl={fileVideo.url}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.pagination} ref={paginationRef} />

        <div className={styles.contols}>
          <button className={styles.btn} ref={btnPrevRef}>
            <Icon name="arrow-back" />
          </button>
          <button className={styles.btn} ref={btnNextRef}>
            <Icon name="arrow-next" />
          </button>
        </div>
      </div>
    </>
  )
}
