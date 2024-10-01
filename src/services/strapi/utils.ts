import { FileObj } from './types'

export function getStrapiURL(): string {
  return process.env.NEXT_PUBLIC_DEV_MODE === 'true' &&
    process.env.NEXT_PUBLIC_STRAPI_URL
    ? process.env.NEXT_PUBLIC_STRAPI_URL
    : ''
}

export function getStrapiFileData(fileObj: FileObj) {
  const path = getStrapiURL()

  return {
    url: path + fileObj.data.attributes.url,
    name: fileObj.data.attributes.name,
    caption: fileObj.data.attributes.caption,
    width: fileObj.data.attributes.width,
    height: fileObj.data.attributes.height,
    mime: fileObj.data.attributes.mime
  }
}
