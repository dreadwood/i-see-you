import { FileObj, MultiFileObj } from './types'

export function getStrapiURL(): string {
  return process.env.NEXT_PUBLIC_DEV_MODE === 'true' &&
    process.env.NEXT_PUBLIC_STRAPI_URL
    ? process.env.NEXT_PUBLIC_STRAPI_URL
    : ''
}

export function getStrapiFileData(obj: FileObj) {
  if (!obj.data) {
    return
  }

  const path = getStrapiURL()

  return {
    url: path + obj.data.attributes.url,
    name: obj.data.attributes.name,
    caption: obj.data.attributes.caption,
    width: obj.data.attributes.width,
    height: obj.data.attributes.height,
    mime: obj.data.attributes.mime
  }
}

export function getStrapiMultiFileData(obj: MultiFileObj) {
  const path = getStrapiURL()

  return {
    url: path + obj.attributes.url,
    name: obj.attributes.name,
    caption: obj.attributes.caption,
    width: obj.attributes.width,
    height: obj.attributes.height,
    mime: obj.attributes.mime
  }
}
