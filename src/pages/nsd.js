import React from 'react'
import { Button, Card, CardBody, Container, Row, Col } from 'reactstrap'
import MainNavbar from 'components/Navbars/Navbar'
import MainFooter from 'components/Footers/footer'

class NSD extends React.Component {
  state = {}
  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref='main'>
          <div className='position-relative'>
            {/* shape Hero */}
            <section className='section section-lg section-shaped pb-250'>
              <div className='shape shape-style-1 shape-default'>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className='py-lg-md d-flex'>
                <div className='col px-0'>
                  <Row>
                    <Col lg='6'>
                      <h1 className='display-3 text-white'>
                        Next Step Discipleship <span>Lorem Ipsum</span>
                      </h1>
                      <p className='lead text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Enim ut sem viverra aliquet eget sit amet
                        tellus.
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
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0 mb-5'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                            <i className='ni ni-check-bold' />
                          </div>
                          <h6 className='text-primary text-uppercase'>
                            Lesson 1
                          </h6>
                          <p className='description mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Enim ut sem viverra aliquet
                            eget sit amet tellus.
                          </p>
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
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0 mb-5'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                            <i className='ni ni-check-bold' />
                          </div>
                          <h6 className='text-primary text-uppercase'>
                            Lesson 2
                          </h6>
                          <p className='description mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Enim ut sem viverra aliquet
                            eget sit amet tellus.
                          </p>
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
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0 mb-5'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                            <i className='ni ni-check-bold' />
                          </div>
                          <h6 className='text-primary text-uppercase'>
                            Lesson 3
                          </h6>
                          <p className='description mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Enim ut sem viverra aliquet
                            eget sit amet tellus.
                          </p>
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
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0 mb-5'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                            <i className='ni ni-check-bold' />
                          </div>
                          <h6 className='text-primary text-uppercase'>
                            Lesson 4
                          </h6>
                          <p className='description mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Enim ut sem viverra aliquet
                            eget sit amet tellus.
                          </p>
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
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0 mb-5'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                            <i className='ni ni-check-bold' />
                          </div>
                          <h6 className='text-primary text-uppercase'>
                            Lesson 5
                          </h6>
                          <p className='description mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Enim ut sem viverra aliquet
                            eget sit amet tellus.
                          </p>
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
}

export default NSD
