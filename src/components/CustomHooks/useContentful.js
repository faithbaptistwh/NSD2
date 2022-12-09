import { createClient } from 'contentful'

const useContentful = () => {
  const client = createClient({
    space: 'rsocu0hl5psn',
    accessToken: 'ObQeZf6Vv0sfN1m-WitpOTEk9jU8n5zmS-JOym1LVik',
  })

  const getCards = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'lessonCard',
        select: 'fields',
        order: 'fields.lessonNumber',
      })
      const sanitizeEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        }
      })
      return sanitizeEntries
    } catch (error) {
      console.log(`Error getting Lesson Card: ${error}`)
    }
  }

  return { getCards }
}

export default useContentful
