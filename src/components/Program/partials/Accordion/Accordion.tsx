'use client'

import { useRef, useState } from 'react'
import clsx from 'clsx'
import Icon from '@/components/Icon/Icon'

import styles from './Accordion.module.scss'
import { ProgramListSection } from '@/services/strapi/types'

interface AccordionProps {
  data: ProgramListSection
  className?: string
}

export default function Accordion({
  data,
  className
}: AccordionProps): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)

  const refList = useRef<HTMLUListElement | null>(null)

  return (
    <div className={clsx(styles.accordion, className)}>
      <button
        className={clsx(styles.btn, isOpen && styles.open)}
        onClick={() => setOpen(!isOpen)}
      >
        {data.name}
        <Icon
          className={clsx(styles.icon, isOpen && styles.open)}
          name="accordion-arrow"
        />
      </button>
      <ul
        className={clsx(styles.body, isOpen && styles.open)}
        style={{
          height: isOpen ? refList.current?.scrollHeight : 0
        }}
        ref={refList}
      >
        {data.list.map((it) => (
          <li key={it.id}>
            <div dangerouslySetInnerHTML={{ __html: it.item }} />
            {it.description && (
              <div className={styles.description}>{it.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
