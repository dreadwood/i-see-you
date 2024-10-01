import { FileObj, SectionConfig } from './types'

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'
}

export async function getStrapiData<T>(config: SectionConfig): Promise<T> {
  const baseUrl = getStrapiURL()

  const response = await fetch(`${baseUrl}/api/landing?${config.params}`, {
    cache: 'no-store'
  })
  const data = await response.json()

  return data.data.attributes[config.name]
}

export function getStrapiFileData(fileObj: FileObj) {
  const path = process.env.NEXT_PUBLIC_DEV_MODE === 'true' ? getStrapiURL() : ''

  return {
    url: path + fileObj.data.attributes.url,
    name: fileObj.data.attributes.name,
    caption: fileObj.data.attributes.caption,
    width: fileObj.data.attributes.width,
    height: fileObj.data.attributes.height,
    mime: fileObj.data.attributes.mime
  }
}

// export async function createClient(): Promise<> {

// }
