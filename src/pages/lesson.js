import React, { Children, useEffect, useRef } from 'react'
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
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Inline, INLINES } from '@contentful/rich-text-types'

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

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p>{children}</p>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <a href={node.data.uri}>{children}</a>
      },
    },
  }

  return (
    <>
      <MainNavbar />
      <main ref={refMain}>
        <div className='position-relative'>
          {/* shape Hero */}
          <section className='section section-lg section-shaped'>
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
                <Row className='mb-5'>
                  <Col>
                    <h1 className='display-3 text-white'>
                      {data.shortTitle} <span>{data.shortDescription}</span>
                    </h1>
                    <p className='lead text-white'></p>
                  </Col>
                </Row>
                <Col className='col-sm-12 col-md-6 offset-md-3'>
                  <Row className='display-2 m-0'>
                    {data.audio ? (
                      <AudioPlayer
                        customAdditionalControls={[]}
                        customVolumeControls={[]}
                        src={data.audio.url}
                      />
                    ) : null}
                  </Row>
                </Col>
              </div>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew'></div>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className='section section-lg pt-lg-0 mt--200 mb-6'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg='12'>
                <Row className='row-grid'></Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='section section-lg'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg='12'>
                <Row className='row-grid'>
                  {documentToReactComponents(
                    data.content.json,
                    RICHTEXT_OPTIONS
                  )}
                </Row>
                <Row></Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <MainFooter />
    </>
  )
}
