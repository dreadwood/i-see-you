import ContentHeader from './partials/ContentHeader/ContentHeader'
import { fetchGetPageData } from '@/services/strapi/fetch'
import { FooterSection } from '@/services/strapi/types'
import { StrapiPageConfig } from '@/services/strapi/config'

import styles from './Header.module.scss'

export default async function Header(): Promise<JSX.Element> {
  const { socialLinks } = await fetchGetPageData<FooterSection>(
    StrapiPageConfig.footer
  )

  return (
    <header className={styles.header}>
      <ContentHeader socialLinks={socialLinks} />
    </header>
  )
}
