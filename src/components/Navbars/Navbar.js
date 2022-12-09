import React from 'react'
import { Link } from 'react-router-dom'
import Headroom from 'headroom.js'
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'

class MainNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'))
    // initialise
    headroom.init()
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    })
  }

  onExited = () => {
    this.setState({
      collapseClasses: '',
    })
  }

  render() {
    return (
      <>
        <header className='header-global'>
          <Navbar
            className='navbar-main navbar-transparent navbar-light'
            expand='lg'
            id='navbar-main'
          >
            <Container>
              <NavbarBrand className='mr-lg-5' to='/' tag={Link}>
                <img alt='...' src={require('assets/img/brand/logo.png')} />
              </NavbarBrand>
              <button className='navbar-toggler' id='navbar_global'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse
                toggler='#navbar_global'
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className='navbar-collapse-header'>
                  <Row>
                    <Col className='collapse-brand' xs='6'>
                      <Link to='/'>
                        <img
                          alt='...'
                          src={require('assets/img/brand/logo.png')}
                        />
                      </Link>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button className='navbar-toggler' id='navbar_global'>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className='navbar-nav-hover align-items-lg-center' navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-ui-04 d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>Courses</span>
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-menu-xl'>
                      <div className='dropdown-menu-inner'>
                        <Media
                          className='d-flex align-items-center'
                          to='/next-step-discipleship'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-primary rounded-circle text-white'>
                            <i className='ni ni-book-bookmark' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-primary mb-md-1'>
                              Next Step Discipleship
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className='d-flex align-items-center'
                          href='/#'
                          target='_blank'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
                            <i className='ni ni-calendar-grid-58' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-primary mb-md-1'>
                              Daily Bible
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className='d-flex align-items-center'
                          href='/#'
                          target='_blank'
                        >
                          <div className='icon icon-shape bg-gradient-warning rounded-circle text-white'>
                            <i className='ni ni-books' />
                          </div>
                          <Media body className='ml-3'>
                            <h5 className='heading text-warning mb-md-1'>
                              Lorem ipsum
                            </h5>
                            <p className='description d-none d-md-inline-block mb-0'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-collection d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>About</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to='/about' tag={Link}>
                        About
                      </DropdownItem>
                      <DropdownItem to='/' tag={Link}>
                        Contact
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className='align-items-lg-center ml-lg-auto' navbar>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://www.facebook.com/'
                      id='tooltip333589074'
                      target='_blank'
                    >
                      <i className='fa fa-facebook-square' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip333589074'>
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://www.instagram.com/'
                      id='tooltip356693867'
                      target='_blank'
                    >
                      <i className='fa fa-instagram' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip356693867'>
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://twitter.com/'
                      id='tooltip184698705'
                      target='_blank'
                    >
                      <i className='fa fa-twitter-square' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip184698705'>
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    )
  }
}

export default MainNavbar
