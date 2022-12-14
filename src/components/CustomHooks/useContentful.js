import axios from 'axios'
import { useState, useEffect } from 'react'

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env

var data = JSON.stringify({
  query: `{
    lessonCollection(order: lessonNumber_ASC) {
      items {
        sys{
          id
        }
        lessonNumber
        shortTitle
        shortDescription
        content{
          json
        }
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
  url: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
    'Content-Type': 'application/json',
  },
  data: data,
}

export default function GetLessons() {
  let [data, setData] = useState()

  useEffect(() => {
    getContent()
  }, [])

  const getContent = async () => {
    await axios(config)
      .then(function (response) {
        setData(response.data.data.lessonCollection.items)
        console.log(response.data.data.lessonCollection.items)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return { data }
}
