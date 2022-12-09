import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'

export default function LessonCard(props) {
  const { description, lessonNumber } = props
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
          <Button
            className='mt-4'
            color='primary'
            href='#pablo'
            onClick={(e) => e.preventDefault()}
          >
            Listen
          </Button>
        </CardBody>
      </Card>
    </Col>
  )
}
