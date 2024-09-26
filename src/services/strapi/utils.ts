import { FileObj, SectionConfig } from './types'

export function getStrapiURL() {
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337'
}

export async function getStrapiData<T>(config: SectionConfig): Promise<T> {
  const baseUrl = getStrapiURL()

  try {
    const response = await fetch(`${baseUrl}/api/landing?${config.params}`)
    const data = await response.json()

    return data.data.attributes[config.name]
  } catch (error) {
    console.log('error:', error)
    throw error
  }
}

export function getStrapiFileData(fileObj: FileObj) {
  return {
    url: getStrapiURL() + fileObj.data.attributes.url,
    name: fileObj.data.attributes.name,
    caption: fileObj.data.attributes.caption,
    width: fileObj.data.attributes.width,
    height: fileObj.data.attributes.height,
    mime: fileObj.data.attributes.mime
  }
}
