import { ClientData } from './types'
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
