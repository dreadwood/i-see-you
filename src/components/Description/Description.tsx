'use client'

import Image from 'next/image'
import PlayButton from '@/UI/PlayButton/PlayButton'
import Title from '@/UI/Title/Title'
import { headerLinks } from '@/app/const'
import { useVideoStore } from '@/store/video'
import photo from '@img/people/author-01.jpg'

import styles from './Description.module.scss'

export default function Description(): JSX.Element {
  const { openVideo } = useVideoStore()

  return (
    <section className={styles.section} id={headerLinks[0].htmlId}>
      <div className={styles.wrp}>
        <Title text={`Описание <span>курса</span>`} />
        <div className={styles.columns}>
          <div className={styles.conten}>
            <p>
              Лекционная часть посвящёна теории границ, структуре личности,
              возрастным кризисам и механизмам компенсации боли.
            </p>
            <p>
              Практическая часть основана на базовой технике работы с
              состоянием, которая дополнена комплексом медитаций.
            </p>

            <p>
              Основными ключами базовой техники являются ощущения в теле,
              которые позволяют определить тип субличности и направить внимание
              на конкретную потребность. Вы не пройдете мимо - ощущения в теле
              невозможно игнорировать.
            </p>

            <p className={styles.accent}>
              Уникальность курса в том, что теория раскладывает все по полкам, а
              практика сведена к одной технике, которая вполне доступна к
              освоению за 21 день.
            </p>
          </div>
          <div className={styles.video}>
            <Image
              src={photo}
              alt={'Юрий Менячихин'}
              quality={80}
              placeholder="blur"
            />
            <PlayButton onClick={() => openVideo('/video/example.mp4')} />
          </div>
        </div>
      </div>
    </section>
  )
}
