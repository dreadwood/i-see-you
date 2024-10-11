import {
  IArticleBlog,
  IArticleBlogWithId,
  ArticleListRes,
  ClientData,
  SectionConfig
} from './types'
import { getStrapiURL } from './utils'

export async function fetchCreateClient(client: ClientData): Promise<Response> {
  const baseUrl = getStrapiURL()

  const data = {
    data: client
  }

  const res = await fetch(`${baseUrl}/api/clients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return res
}

export async function fetchGetPageData<T>(config: SectionConfig): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/landing?${config.params}`,
    {
      cache: 'no-store'
    }
  )
  const data = await response.json()

  return data.data.attributes[config.name]
}

export async function fetchGetBlogData(
  config: SectionConfig,
  page?: number
): Promise<IArticleBlogWithId[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?${config.params}`,
    {
      cache: 'no-store'
    }
  )
  const data: ArticleListRes = await response.json()

  return data.data.map((it) => ({ id: it.id, ...it.attributes }))
}

export async function fetchGetArticleData(
  url: string
): Promise<IArticleBlog | null> {
  const searchParams = `filters[url][$eq]=${url}&populate=*`
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?${searchParams}`,
    {
      cache: 'no-store'
    }
  )

  const data: ArticleListRes = await response.json()

  if (data.data.length === 0) {
    return null
  }

  return data.data[0].attributes
}
