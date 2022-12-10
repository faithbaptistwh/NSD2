import axios from 'axios'
import { useState, useEffect } from 'react'

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env

var data = JSON.stringify({
  query: `{
    lessonCardCollection(order: lessonNumber_ASC) {
      items {
        lessonNumber
        description
        audio {
          url
        }
      }
    }
  }`,
  variables: {},
})

var config = {
  method: 'post',
  url: 'https://graphql.contentful.com/content/v1/spaces/rsocu0hl5psn',
  headers: {
    Authorization: 'Bearer ObQeZf6Vv0sfN1m-WitpOTEk9jU8n5zmS-JOym1LVik',
    'Content-Type': 'application/json',
  },
  data: data,
}

export default function TestHook() {
  let [data, setData] = useState()

  useEffect(() => {
    getContent()
  }, [])

  const getContent = async () => {
    await axios(config)
      .then(function (response) {
        setData(response.data.data.lessonCardCollection.items)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return { data }
}
