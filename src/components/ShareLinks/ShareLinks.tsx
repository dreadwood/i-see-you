'use client'

import SocialLinks from '@/components/SocialLink/SocialLink'
import { fetchIncrimentCountArticle } from '@/services/strapi/fetch'
import { IArticleBlogWithId } from '@/services/strapi/types'
import { useState } from 'react'

interface ShareLinksProps {
  article: IArticleBlogWithId
}

export default function ShareLinks({ article }: ShareLinksProps): JSX.Element {
  const [count, setCount] = useState<number>(article.socialCount || 0)

  const socialLinks = [
    {
      id: 1,
      label: 'поделиться в Telegram',
      url: `https://t.me/share/url?url=http://iseeyou.courses/blog/${article.url}`,
      icon: 'telegram'
    },
    {
      id: 2,
      label: 'поделиться в Facebook',
      url: `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fiseeyou.courses%2Fblog%2F${article.url}`,
      icon: 'facebook'
    },
    {
      id: 3,
      label: 'поделиться во Вконтакте ',
      url: `https://vk.com/share.php?url=httpы://iseeyou.courses/blog/${article.url}`,
      icon: 'vk'
    }
  ]

  async function handleClick() {
    const updateCount = count + 1
    await fetchIncrimentCountArticle(article.id, updateCount)
    setCount(updateCount)
  }

  return <SocialLinks social={socialLinks} onClick={handleClick} style="gray" />
}
