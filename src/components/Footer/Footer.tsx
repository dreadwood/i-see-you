import clsx from 'clsx'
import Icon from '@/components/Icon/Icon'
import SocialLinks from '@/components/SocialLink/SocialLink'
import { StrapiPageConfig } from '@/services/strapi/config'
import { FooterSection } from '@/services/strapi/types'
import { fetchGetPageData } from '@/services/strapi/fetch'

import styles from './Footer.module.scss'

interface FooterProps {
  isDark?: boolean
}

export default async function Footer({
  isDark
}: FooterProps): Promise<JSX.Element> {
  const { text, copyrightDate, socialLinks, contactLinks, textLinks } =
    await fetchGetPageData<FooterSection>(StrapiPageConfig.footer)

  return (
    <footer className={clsx(styles.footer, isDark && styles.dark)}>
      <div className={styles.wrp}>
        <div>
          <p className={styles.text}>{text}</p>

          <ul className={styles.contactList}>
            {contactLinks.map((it) => (
              <li key={it.id}>
                <a className={styles.contactItem} href={it.url}>
                  <Icon name={`contact-${it.icon}`} />
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          <SocialLinks
            className={styles.socialList}
            social={socialLinks}
            style="white"
          />
        </div>

        <div className={styles.rightCol}>
          {textLinks.map((it) => (
            <a className={styles.link} href={it.url} key={it.id}>
              {it.label}
            </a>
          ))}
          <div className={styles.copyright}>© {copyrightDate}</div>
        </div>
      </div>
    </footer>
  )
}
