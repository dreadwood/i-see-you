import Icon from '@/components/Icon/Icon'
import SocialLinks from '@/components/SocialLink/SocialLink'
import { getStrapiData } from '@/services/strapi/utils'
import { StrapiConfig } from '@/services/strapi/config'
import { FooterSection } from '@/services/strapi/types'

import styles from './Footer.module.scss'

export default async function Footer(): Promise<JSX.Element> {
  const { text, copyrightDate, socialLinks, contactLinks, textLinks } =
    await getStrapiData<FooterSection>(StrapiConfig.footer)

  return (
    <footer className={styles.footer}>
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
