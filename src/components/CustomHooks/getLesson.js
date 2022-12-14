import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env

export default function GetLesson() {
  let [data, setData] = useState()
  const { lessonId } = useParams()

  useEffect(() => {
    getContent()
  }, [lessonId])

  const getContent = async () => {
    console.log(lessonId)
    var data = JSON.stringify({
      query: `{
        lesson(id: "${lessonId}") {
          shortTitle
          shortDescription
          content{
            json
          }
          audio{
            url
          }
        }
      }
          `,
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

    await axios(config)
      .then(function (response) {
        setData(response.data.data.lesson)
        console.log(response.data.data.lesson)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return { data }
}
