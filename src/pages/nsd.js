import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import MainNavbar from 'components/Navbars/Navbar'
import MainFooter from 'components/Footers/footer'
import LessonCard from 'components/Card/card'
import TestHook from 'components/CustomHooks/testHook'

var config = {
  method: 'get',
  url: 'https://cdn.contentful.com/spaces/rsocu0hl5psn/environments/master/entries?&content_type=lessonCard',
  headers: {
    Authorization: 'Bearer ObQeZf6Vv0sfN1m-WitpOTEk9jU8n5zmS-JOym1LVik',
  },
}

export default function NextStep() {
  const refMain = useRef()
  const { data } = TestHook()

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    refMain.scrollTop = 0
  }, [])

  if (!data) {
    return <span>Loading...</span>
  }

  return (
    <>
      <MainNavbar />
      <main ref={refMain}>
        <div className='position-relative'>
          {/* shape Hero */}
          <section className='section section-lg section-shaped pb-250'>
            <div className='shape shape-style-1 shape-default'></div>
            <Container className='py-lg-md d-flex'>
              <div className='col px-0'>
                <Row>
                  <Col lg='6'>
                    <h1 className='display-3 text-white'>
                      Next Step Discipleship <span>Lorem Ipsum</span>
                    </h1>
                    <p className='lead text-white'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Enim ut sem viverra aliquet eget sit amet tellus.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className='section section-lg pt-lg-0 mt--200'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg='12'>
                <Row className='row-grid'>
                  <p></p>
                  {data.map(({ description, lessonNumber, audio }) => (
                    <LessonCard
                      description={description}
                      lessonNumber={lessonNumber}
                      audio={audio}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <MainFooter />
    </>
  )
}
