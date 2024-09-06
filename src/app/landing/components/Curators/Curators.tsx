'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import Icon from '@/components/Icon/Icon'
import Title from '@landing/UI/Title/Title'
import Slide from './partials/Slide/Slide'

import photoCurators1 from '@img/people/person-02.jpg'
import photoCurators2 from '@img/people/person-04.jpg'
import photoCurators3 from '@img/people/person-06.jpg'
import illustration from '@img/illustration/illustration-03.jpg'

import 'swiper/css'
import styles from './Curators.module.scss'
import { headerLinks } from '@landing/const'

const curators = [
  {
    id: 1,
    photo: photoCurators1,
    text: 'Микелаанджело Лодовикою, 40 лет',
    videoUrl: '/video/example.mp4'
  },
  {
    id: 2,
    photo: photoCurators2,
    text: 'Леонардо да Винчи, 31 год',
    videoUrl: '/video/example.mp4'
  },
  {
    id: 3,
    photo: photoCurators3,
    text: 'Донателло ди Никколо, 53 года',
    videoUrl: '/video/example.mp4'
  },
  {
    id: 4,
    photo: photoCurators1,
    text: 'Микелаанджело Лодовикою, 40 лет',
    videoUrl: '/video/example.mp4'
  }
]

export default function Curators(): JSX.Element {
  const btnPrevRef = useRef<HTMLButtonElement | null>(null)
  const btnNextRef = useRef<HTMLButtonElement | null>(null)
  const paginationRef = useRef<HTMLDivElement | null>(null)
  const swiperRef = useRef<HTMLDivElement | null>(null)

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
      <section className={styles.section} id={headerLinks[2].htmlId}>
        <div className={styles.wrp}>
          <Title text={`Наши <span>кураторы</span>`} />

          <div className={styles.container} ref={swiperRef}>
            <div className="swiper-wrapper">
              {curators.map((it) => (
                <div className="swiper-slide" key={it.id}>
                  <Slide img={it.photo} text={it.text} videoUrl={it.videoUrl} />
                </div>
              ))}
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
        </div>
      </section>

      <div className={styles.illustration}>
        <Image
          src={illustration}
          alt={''}
          width={876}
          height={425}
          quality={80}
          sizes="880px"
          placeholder="blur"
        />
      </div>
    </>
  )
}
