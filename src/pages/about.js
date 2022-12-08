import React from 'react'
import { Button, Card, Container, Row, Col } from 'reactstrap'
import MainNavbar from 'components/Navbars/Navbar'
import MainFooter from 'components/Footers/footer'

class About extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main className='profile-page' ref='main'>
          <section className='section-profile-cover section-shaped my-0'>
            {/* Circles background */}
            <div className='shape shape-style-1 shape-default alpha-4'>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className='section'>
            <Container>
              <Card className='card-profile shadow mt--300'>
                <div className='px-4'>
                  <Row className='justify-content-center'>
                    <Col className='order-lg-2' lg='3'>
                      <div className='card-profile-image'>
                        <a href='#' onClick={(e) => e.preventDefault()}>
                          <img
                            alt='...'
                            className='rounded-circle'
                            src={require('assets/img/brand/avatar.jpg')}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className='order-lg-3 text-lg-right align-self-lg-center'
                      lg='4'
                    >
                      <div className='card-profile-actions py-4 mt-lg-0 '>
                        <Button
                          className='mr-4'
                          color='info'
                          href='#'
                          onClick={(e) => e.preventDefault()}
                          size='sm'
                        >
                          Email
                        </Button>
                      </div>
                      <div></div>
                    </Col>
                    <Col className='order-lg-1' lg='4'>
                      <div className='card-profile-stats d-flex justify-content-center'>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </Col>
                  </Row>
                  <div className='text-center mt-5'>
                    <h3>
                      Iron Man <span className='font-weight-light'></span>
                    </h3>
                    <div className='h6 font-weight-300'>
                      <i className='ni location_pin mr-2' />
                      Winter Haven, FL
                    </div>
                    <div className='h6 mt-4'>
                      <i className='ni business_briefcase-24 mr-2' />
                      Pastor
                    </div>
                  </div>
                  <div className='mt-5 py-5 border-top text-center'>
                    <Row className='justify-content-center'>
                      <Col lg='9'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <MainFooter />
      </>
    )
  }
}

export default About
