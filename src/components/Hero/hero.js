import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'

class MainHero extends React.Component {
  render() {
    return (
      <>
        <div className='position-relative'>
          {/* Hero for FREE version */}
          <section className='section section-hero section-shaped'>
            {/* Background circles */}
            <div className='shape shape-style-1 shape-default'>
              <span className='span-150' />
              <span className='span-50' />
              <span className='span-50' />
              <span className='span-75' />
              <span className='span-100' />
              <span className='span-75' />
              <span className='span-50' />
              <span className='span-100' />
              <span className='span-50' />
              <span className='span-100' />
            </div>
            <Container className='shape-container d-flex align-items-center py-lg'>
              <div className='col px-0'>
                <Row className='align-items-center justify-content-center'>
                  <Col className='text-center' lg='6'>
                    <img
                      alt='...'
                      className='img-fluid'
                      src={require('assets/img/brand/logo.png')}
                      style={{ width: '500px' }}
                    />
                    <p className='lead text-white'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Maecenas ultricies mi eget mauris pharetra et
                      ultrices. Sagittis eu volutpat odio facilisis mauris sit.
                      Nibh nisl condimentum id venenatis a condimentum vitae.
                    </p>
                    <div className='btn-wrapper mt-5'>
                      <Button
                        className='btn-white btn-icon mb-3 mb-sm-0'
                        color='default'
                        href='/nsd'
                        size='lg'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='ni ni-books' />
                        </span>
                        <span className='btn-inner--text'>
                          Check out the Course
                        </span>
                      </Button>{' '}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
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
        </div>
      </>
    )
  }
}

export default MainHero
