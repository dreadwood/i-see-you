import Title from '@/UI/Title/Title'
import { headerLinks } from '@/app/const'
import Video from '@/components/Video/Video'
import photo from '@img/people/author-01.jpg'

import styles from './Description.module.scss'

const video = {
  url: '/video/example.mp4',
  poster: photo.src
}

export default function Description(): JSX.Element {
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
            <Video posterUrl={video.poster} videoUrl={video.url} />
          </div>
        </div>
      </div>
    </section>
  )
}
