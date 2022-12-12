import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

export default function LessonCard(props) {
  const { description, lessonNumber, audio } = props

  return (
    <Col lg='4'>
      <Card className='card-lift--hover shadow border-0 mb-5'>
        <CardBody className='py-5'>
          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
            <i className='ni ni-check-bold' />
          </div>
          <h6 className='text-primary text-uppercase'>Lesson {lessonNumber}</h6>
          <p className='description mt-3'>{description}</p>
          <div></div>
          {audio ? (
            <AudioPlayer
              customAdditionalControls={[]}
              customVolumeControls={[]}
              src={audio.url}
            />
          ) : null}
        </CardBody>
      </Card>
    </Col>
  )
}
