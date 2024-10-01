import { ClientData, SectionConfig } from './types'
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
  const baseUrl = getStrapiURL()

  const response = await fetch(`${baseUrl}/api/landing?${config.params}`, {
    cache: 'no-store'
  })
  const data = await response.json()

  return data.data.attributes[config.name]
}
