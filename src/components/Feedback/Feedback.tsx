'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import Icon from '@/components/Icon/Icon'
import Title from '@/UI/Title/Title'
import Slide from './partials/Slide/Slide'

import photoStudent1 from '@img/people/person-01.jpg'
import photoStudent2 from '@img/people/person-02.jpg'
import photoStudent3 from '@img/people/person-03.jpg'
import illustration from '@img/illustration/illustration-04.jpg'
import illustrationDark from '@img/illustration/illustration-dark-04.jpg'

import 'swiper/css'
import styles from './Feedback.module.scss'

const students = [
  {
    id: 1,
    photo: photoStudent1.src,
    description: 'отзыв студента 01',
    videoUrl: '/video/example.mp4'
  },
  {
    id: 2,
    photo: photoStudent2.src,
    description: 'отзыв студента 02',
    videoUrl: '/video/example.mp4'
  },
  {
    id: 3,
    photo: photoStudent3.src,
    description: 'отзыв студента 03',
    videoUrl: '/video/example.mp4'
  },
  {
    id: 4,
    photo: photoStudent2.src,
    description: 'отзыв студента 04',
    videoUrl: '/video/example.mp4'
  }
]

interface FeedbackProps {
  isDarkImg?: boolean
}

export default function Feedback({ isDarkImg }: FeedbackProps): JSX.Element {
  const btnPrevRef = useRef<HTMLButtonElement | null>(null)
  const btnNextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    new Swiper(swiperRef.current || '', {
      modules: [Navigation],
      navigation: {
        prevEl: btnPrevRef.current,
        nextEl: btnNextRef.current
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
    <section className={styles.section}>
      <div className={styles.wrp}>
        <div className={styles.illustration}>
          <Image
            src={isDarkImg ? illustrationDark : illustration}
            alt={''}
            quality={80}
            sizes="820px"
            placeholder="blur"
          />
        </div>

        <Title
          className={styles.title}
          text={`Отзывы наших <span>студентов</span>`}
        />

        <div className={styles.container}>
          <div className={styles.slider} ref={swiperRef}>
            <div className="swiper-wrapper">
              {students.map((it) => (
                <div className="swiper-slide" key={it.id}>
                  <Slide
                    img={it.photo}
                    description={it.description}
                    videoUrl={it.videoUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.count}>1 / 23</div>
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
      </div>
    </section>
  )
}
