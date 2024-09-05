'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import Icon from '@/components/Icon/Icon'
import Title from '@landing/UI/Title/Title'
import Slide from './partials/Slide/Slide'

import photoStudent1 from '@img/people/person-01.jpg'
import photoStudent2 from '@img/people/person-02.jpg'
import photoStudent3 from '@img/people/person-03.jpg'
import illustration from '@img/illustration/illustration-04.jpg'

import 'swiper/css'
import styles from './Feedback.module.scss'

const students = [
  {
    id: 1,
    photo: photoStudent1,
    description: 'студент 01'
  },
  {
    id: 2,
    photo: photoStudent2,
    description: 'студент 02'
  },
  {
    id: 3,
    photo: photoStudent3,
    description: 'студент 03'
  },
  {
    id: 4,
    photo: photoStudent2,
    description: 'студент 04'
  }
]

export default function Feedback(): JSX.Element {
  const btnPrevRef = useRef<HTMLButtonElement | null>(null)
  const btnNextRef = useRef<HTMLButtonElement | null>(null)
  const swiperRef = useRef<HTMLDivElement | null>(null)

  // console.log(styles.activeSlide)
  useEffect(() => {
    new Swiper(swiperRef.current || '', {
      modules: [Navigation],
      // loop: true,
      navigation: {
        prevEl: btnPrevRef.current,
        nextEl: btnNextRef.current
      },
      // slideActiveClass: styles.activeSlide,
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
            src={illustration}
            alt={''}
            width={821}
            height={593}
            quality={80}
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
                  <Slide img={it.photo} alt={it.description} />
                </div>
              ))}
            </div>
            {/* <Slide img={photoStudent1} alt="студент 01" />
          <Slide img={photoStudent2} alt="студент 02" />
          <Slide img={photoStudent3} alt="студент 03" /> */}
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
