import styles from './Header.module.scss'

const links = [
  {
    id: 1,
    text: 'О курсе',
    href: '#'
  },
  {
    id: 2,
    text: 'Про автора',
    href: '#'
  },
  {
    id: 3,
    text: 'Кураторы',
    href: '#'
  },
  {
    id: 4,
    text: 'Программа',
    href: '#'
  },
  {
    id: 5,
    text: 'Блог',
    href: '#'
  },
  {
    id: 6,
    text: 'Регистрация',
    href: '#'
  }
]

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.wrp}>
        <ul className={styles.list}>
          {links.map((it) => (
            <li key={it.id}>
              <a className={styles.link} href={it.href}>
                {it.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
