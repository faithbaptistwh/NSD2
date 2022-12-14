import React, { useEffect, useRef } from 'react'
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import MainNavbar from 'components/Navbars/Navbar'
import MainFooter from 'components/Footers/footer'
import GetLesson from 'components/CustomHooks/getLesson'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Link } from 'react-router-dom'

export default function Lesson() {
  const refMain = useRef()
  const { data } = GetLesson()

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
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink
                        previous
                        tag={Link}
                        to='/next-step-discipleship'
                      />
                    </PaginationItem>
                  </Pagination>
                </Row>
                <Row>
                  <Col>
                    <h1 className='display-3 text-white'>
                      {data.shortTitle} <span>{data.shortDescription}</span>
                    </h1>
                    <p className='lead text-white'></p>
                  </Col>
                </Row>
                <Row className='display-2'>
                  {data.audio ? (
                    <AudioPlayer
                      customAdditionalControls={[]}
                      customVolumeControls={[]}
                      src={data.audio.url}
                    />
                  ) : null}
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
